import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const isEmailValid = (email) => {
  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};
const isNameValid = (name) => {
  // Usamos una expresión regular para buscar números (\d) en el texto
  const contieneNumero = /\d/.test(name);
  return contieneNumero;
};
export const Checkout = () => {
  const { register, handleSubmit, formState } = useForm();
  const { cart, totalPrecio, clearCart } = useContext(CartContext);

  const onSubmit = async (data) => {
    // La variable "data" contiene los datos del formulario
    const resultado = totalPrecio();
    const precioTotal = resultado.sumaDePrecios;
    const envioTotal = resultado.sumaDeEnvios;
    let objOrder;
    if (
      isEmailValid(data.email) &&
      !isNaN(data.telefono) &&
      isNaN(data.nombre) &&
      !isNameValid(data.nombre)
    ) {
      objOrder = {
        buyer: data,
        item: cart,
        total: precioTotal + envioTotal,
      };
    } else {
      objOrder = null;
    }

    if (typeof objOrder === "object" && objOrder !== null) {
      if (objOrder.item.length > 0) {
        const batch = writeBatch(db);
        const outOfStock = [];

        const ids = cart.map((prod) => prod.id);

        const productRef = query(
          collection(db, "productos"),
          where(documentId(), "in", ids)
        );

        //desestructuramos el valor que nos retorna getDocs(querySnapshot)
        const { docs } = await getDocs(productRef);

        docs.forEach((doc) => {
          const campos = doc.data();
          const stockDb = campos.stock;

          const productAddedToCart = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = productAddedToCart.quantity;

          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...campos });
          }
        });
        if (outOfStock.length === 0) {
          const orderRef = collection(db, "orders");

          const { id: orderId } = await addDoc(orderRef, objOrder);

          batch.commit();
          clearCart();
          alert("comprado con exito");
          window.location.href = "/";
        } else {
          alert("no hay productos");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input
        {...register("nombre", { required: true })}
        placeholder="Nombre y apellido"
      />
      <input
        type="number"
        {...register("telefono", { required: true })}
        placeholder="Telefono"
      />
      <input
        {...register("email", { required: true })}
        placeholder="Correo electrónico"
      />
      <button type="submit" disabled={!formState.isValid}>
        Enviar
      </button>
    </form>
  );
};

import ItemList from "../itemList/itemList";

import { useState, useEffect } from "react";
import { db } from "../../service/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); // Estado local para almacenar la lista de productos
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productRef = !categoryId
      ? collection(db, "productos")
      : query(
          collection(db, "productos"),
          where("categoria", "==", categoryId)
        );
    getDocs(productRef)
      .then((QuerySnapshot) => {
        const productsAdapted = QuerySnapshot.docs.map((doc) => {
          const campos = doc.data();

          return { id: doc.id, ...campos };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        setLoading(false);
      });

    // Como el segundo argumento del useEffect es un arreglo vacío [], este efecto se ejecuta solo una vez al montar el componente
  }, [categoryId]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "230px",
        }}
      >
        <span className="loader"></span>
      </div>
    );
  }

  if (products.length !== 0) {
    return <ItemList products={products} />;
  } else {
    alert("productos esta vacio");
    return <h1>no se encontro el producto</h1>;
  }
};
export default ItemListContainer;

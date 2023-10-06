import { useParams } from "react-router-dom";
import { db } from "../../service/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { useEffect,useState } from "react";
const FinCheckout = () => {
    const [product, setProduct] = useState(null);
    const { idOrder } = useParams();
      const item = product ? product.item : null;
    let datosComprador="";
    let datosItems=""
    useEffect(()=>{
        const refOrder = doc(db, "orders", idOrder);
        getDoc(refOrder)
      .then((documentSnapshot) => {
        const campos = documentSnapshot.data();
        const productAdapted = { id: documentSnapshot.id, ...campos };
        setProduct(productAdapted);
     

      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      })
        
    },[idOrder])
    if (product!=null){
   
        datosComprador=     <div>
        <p>Nombre: {product.buyer.nombre}</p>
        <p>Telefono: {product.buyer.telefono}</p>
        <p>Email: {product.buyer.email}</p>
      </div>
      datosItems=item.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.imgUrl} alt="" />
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: {item.precio}</p>
          
        </div>
        
      ));
     
    }

  return (

    <div>
        <h1>Compra exitosa</h1>
        <h2>Tus datos</h2>
        {datosComprador}
        <h2>Datos Items</h2>
        {datosItems}
        <a href="/">Volver al inicio</a>
    </div>
  )
}
export default FinCheckout
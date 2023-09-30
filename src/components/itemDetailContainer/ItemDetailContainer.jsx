import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase/firebaseConfig";
import { getDoc, doc, DocumentSnapshot } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const { categoryId } = useParams();
  useEffect(() => {
    const productRef = doc(db, "productos", itemId);
    getDoc(productRef)
      .then((documentSnapshot) => {
        const campos = documentSnapshot.data();
        const productAdapted = { id: documentSnapshot.id, ...campos };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

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
  return (
    <div className="container-item">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

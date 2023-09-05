import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const { categoryId } = useParams();
  useEffect(() => {
    getProductById(itemId, categoryId)
      .then((response) => {
        if (response) {
          setProduct(response);
        } else {
          console.error("Producto no encontrado");
        }
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

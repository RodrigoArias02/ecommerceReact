import ItemList from "../itemList/itemList";
import { useState, useEffect } from "react";
import { pedirElementos } from "../../peticionList";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]); // Estado local para almacenar la lista de productos
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    pedirElementos(categoryId) // Llamamos a la función pedirElementos con la categoría
      .then((response) => {
        setProducts(response); // Cuando la Promesa se resuelve, actualizamos el estado con los productos recibidos
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(products);
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

  if (products != undefined || products != []) {
    return <ItemList products={products} />;
  }
};
export default ItemListContainer;

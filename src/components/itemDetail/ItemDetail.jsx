import "./itemDetail.css";
import { ItemCount, InputCount } from "../itemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { useNotification } from "../../notification/NotificationService";
const ItemDetail = ({ id, precio, imgUrl, nombre, stock, vendedor }) => {
  const [inputType, setInputType] = useState("button");
  const [quantityAdded, setQuantityAdded] = useState(0);
  const ItemContador = inputType === "input" ? InputCount : ItemCount;
  const { addItem, precioDescuento } = useContext(CartContext);
  const { setNotification } = useNotification();
  let precioD=precioDescuento(precio);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      nombre,
      precio:precioD,
      imgUrl,
      vendedor,
    };

    addItem(item, quantity);
    setNotification("error", `${nombre}`);
  };
  return (
    <>
      <section className="object-img">
        <article className="body-img">
          <img src={imgUrl} alt="" />
        </article>
      </section>
      <section className="body-object">
        <article className="body-article">
          <b className="stock">stock disponible: {stock}</b>
          <p className="title">{nombre}</p>
          <span>
            <p> {
              precioD
            }</p>
            <p className="off">{precioD!=0 ? precio : ""}</p>
            
          </span>
       
        </article>
        <article className="body-article_buttons">
          <p className="p" id="descripcion">
            Descripcion
          </p>
          <p className="p" id="especificaciones">
            Especificaciones
          </p>
        </article>
        <article
          className="body-article_description"
          id="contenedor-descripcion"
        >
          <p></p>
        </article>
        <article className="body-article-relacionados">
          <p>Productos relacionados</p>
          <section className="section-relacionados_cards">
            <div className="card-relacionados">
              <article className="article-img">
                <img src={imgUrl} alt="" />
              </article>
              <article className="article-relacionados_text">
                <p>{nombre}</p>
                <p>{precioD}</p>
              </article>
            </div>
            <div className="card-relacionados">
              <article className="article-img">
                <img src={imgUrl} alt="" />
              </article>
              <article className="article-relacionados_text">
                <p>{nombre}</p>
                <p>{precioD}</p>
              </article>
            </div>
          </section>
        </article>
        <button
          onClick={() =>
            setInputType(inputType === "input" ? "button" : "input")
          }
        >
          Cambiar contador
        </button>
      </section>

      {quantityAdded > 0 ? (
        <Link to={"/cart"}>Ver Carrito</Link>
      ) : (
        <ItemContador initial={1} stock={stock} onAdd={handleOnAdd} />
      )}
    </>
  );
};
export default ItemDetail;

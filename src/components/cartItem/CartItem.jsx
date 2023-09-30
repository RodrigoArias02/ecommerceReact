import "./cartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
const CartItem = ({ id, precio, quantity, nombre, imgUrl }) => {
  const { removeItem } = useContext(CartContext);
  let suma = precio * quantity;
  let precioSinEntero = 0;
  return (
    <article className="card-cart">
      <section className="cart-top">
        <p>Vendedor</p>
      </section>
      <section className="cart-mid">
        <div className="conteiner-img-cart">
          <img src={imgUrl} alt="" />
        </div>
        <div className="conteiner-text-cart">
          <p>{nombre}</p>
          <button className="myButton" onClick={() => removeItem(id)}>
            Eliminar
          </button>
          <section className="cart-text-price">
            <div className="container-quantity">
              <p>{quantity} u.</p>
              <button>
                <i className="bx bx-chevron-down"></i>
              </button>
            </div>
            <p>${(precioSinEntero = Math.floor(suma))}</p>
          </section>
        </div>
      </section>
      <section className="card-bot">
        <p>Envío</p>
        <p> {suma < 90000 ? "$3000" : "Gratis"} </p>
      </section>
      <section className="cart-line">
        <div className="line"></div>
      </section>
    </article>
  );
};
export default CartItem;

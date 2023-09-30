import "./cartFooter.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
const CartFooter = () => {
  const { totalPrecio } = useContext(CartContext);
  const resultado = totalPrecio();
  const precioTotal = resultado.sumaDePrecios;
  const envioTotal = resultado.sumaDeEnvios;
  let precioSinEntero = 0;
  return (
    <div className="footerCart">
      <div className="footer-text">
        <section>
          <p>Productos</p>
          <p>Envío</p>
          <p className="bold">Total</p>
        </section>
        <section id="p-totales">
          <p>${(precioSinEntero = Math.floor(precioTotal))}</p>
          <p>${(precioSinEntero = Math.floor(envioTotal))}</p>
          <p className="bold">
            ${(precioSinEntero = Math.floor(precioTotal + envioTotal))}
          </p>
        </section>
      </div>
      <Link to={"/checkout"}>Continuar Compra</Link>
    </div>
  );
};
export default CartFooter;

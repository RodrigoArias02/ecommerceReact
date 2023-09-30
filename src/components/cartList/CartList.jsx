import CartItem from "../cartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
const CartList = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="section-div_conteinerCards">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
    </div>
  );
};
export default CartList;

import "./cart.css";
import CartList from "../cartList/CartList";
import CartFooter from "../cartFooter/CartFooter";
const CartContainer = () => {
  return (
    <div className="container-cards-items">
      <CartList />
      <CartFooter />
    </div>
  );
};
export default CartContainer;

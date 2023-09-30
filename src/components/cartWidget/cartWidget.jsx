import { useContext, useState, useEffect } from "react";
import CarritoImg from "./assets/carritoo.png";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
const CartW = () => {
  const [totalQ, setTotalQ] = useState([]);
  const { cart, totalQuantity } = useContext(CartContext);

  useEffect(() => {
    setTotalQ(totalQuantity());
  }, [totalQuantity]);
  return (
    <Link to={"/cart"} className="linkCartWidget">
      <div>
        <img src={CarritoImg} alt="" />
        {totalQ <= 0 ? null : <span>{totalQ}</span>}
      </div>
    </Link>
  );
};

export default CartW;

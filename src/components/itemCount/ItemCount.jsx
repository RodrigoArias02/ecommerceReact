import { useState } from "react";
import "./count.css";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuiantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuiantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuiantity(quantity - 1);
    }
  };
  return (
    <section className="footer-ver">
      <div className="footer-section_v">
        <button className="button" onClick={decrement}>
          <i className="bx bx-minus"></i>
        </button>
        <p>{quantity}</p>
        <button className="button" onClick={increment}>
          <i className="bx bx-plus"></i>
        </button>
      </div>
      <div className="footer-section_v">
        <button
          className="btnComprar"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Comprar
        </button>
      </div>
    </section>
  );
};
export default ItemCount;

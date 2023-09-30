import { useState } from "react";
import "./count.css";
export const ItemCount = ({ stock, initial, onAdd }) => {
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

export const InputCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuiantity] = useState(initial);
  const handleChange = (e) => {
    if (e.target.value <= stock && e.target.value > 0) {
      if (!isNaN(e.target.value)) {
        let numeroEntero = parseInt(e.target.value, 10);
        setQuiantity(numeroEntero);
      }
    }
  };

  return (
    <section className="footer-ver">
      <div className="footer-section_v">
        <input
          className="contadorInput"
          type="number"
          onChange={handleChange}
          value={quantity}
        />
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

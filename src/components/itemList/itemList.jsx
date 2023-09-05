import React from "react";
import Item from "../item/Item";
const ItemList = ({ products }) => {
  return (
    <div className="section-div_conteinerCards">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};
export default ItemList;

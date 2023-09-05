import React from "react";
import CartW from "../cartWidget/cartWidget";
import { NavLink } from "react-router-dom";
function Headertop({ greeting }) {
  return (
    <section className="heaeder-section-one">
      <NavLink to={"/"} className={"textDecoration"}>
        {/* Se utiliza para insertar HTML dinámico */}
        <p dangerouslySetInnerHTML={{ __html: greeting }} />
      </NavLink>
      <CartW />
    </section>
  );
}

export default Headertop;

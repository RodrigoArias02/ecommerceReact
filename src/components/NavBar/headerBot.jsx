import React from "react";
import procesador from "./assets/intel7.png";
import placaMadre from "./assets/b360.webp";
import ram from "./assets/ram8gb.png";
import Almacenamiento from "./assets/m2tb.png";
import { NavLink } from "react-router-dom";
function Headerbot() {
  return (
    <section className="heaeder-section-three" id="conteinerCategories">
      <div className="section-div_categories">
        <NavLink
          to={"category/procesadores"}
          className={({ isActive }) =>
            isActive ? "clickable-content activeOption" : "clickable-content "
          }
        >
          <section className="div-section_photo">
            <img src={procesador} alt="" />
          </section>
          <p>Procesadores</p>
        </NavLink>
      </div>
      <div className="section-div_categories">
        <NavLink
          to={"category/placasmadre"}
          className={({ isActive }) =>
            isActive ? "clickable-content activeOption" : "clickable-content "
          }
        >
          <section className="div-section_photo">
            <img src={placaMadre} alt="" />
          </section>
          <p>Placas madre</p>
        </NavLink>
      </div>
      <div className="section-div_categories">
        <NavLink
          to={"category/memoriaRam"}
          className={({ isActive }) =>
            isActive ? "clickable-content activeOption" : "clickable-content "
          }
        >
          <section className="div-section_photo">
            <img src={ram} alt="" />
          </section>
          <p>Memorias Ram</p>
        </NavLink>
      </div>
      <div className="section-div_categories">
        <NavLink
          to={"category/almacenamiento"}
          className={({ isActive }) =>
            isActive ? "clickable-content activeOption" : "clickable-content "
          }
        >
          <section className="div-section_photo">
            <img src={Almacenamiento} alt="" />
          </section>
          <p>Almacenamiento</p>
        </NavLink>
      </div>
    </section>
  );
}

export default Headerbot;

import React from "react";
import procesador from "./assets/intel7.png";
import placaMadre from "./assets/b360.webp";
import ram from "./assets/ram8gb.png";
import Almacenamiento from "./assets/m2tb.png";

function Headerbot() {
  return (
    <section className="heaeder-section-three" id="conteinerCategories">
      <div className="section-div_categories">
        <div className="clickable-content">
          <section className="div-section_photo">
            <img src={procesador} alt="" />
          </section>
          <p>Procesadores</p>
        </div>
      </div>
      <div className="section-div_categories">
        <div className="clickable-content">
          <section className="div-section_photo">
            <img src={placaMadre} alt="" />
          </section>
          <p>Placas madre</p>
        </div>
      </div>
      <div className="section-div_categories">
        <div className="clickable-content">
          <section className="div-section_photo">
            <img src={ram} alt="" />
          </section>
          <p>Memorias Ram</p>
        </div>
      </div>
      <div className="section-div_categories">
        <div className="clickable-content">
          <section className="div-section_photo">
            <img src={Almacenamiento} alt="" />
          </section>
          <p>Almacenamiento</p>
        </div>
      </div>
    </section>
  );
}

export default Headerbot;

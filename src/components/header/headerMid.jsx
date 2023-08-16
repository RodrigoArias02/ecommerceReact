import React from "react";

function Headermid() {
  return (
    <section className="heaeder-section-two">
      <article className="div_input-section_logo">
        <i className="bx bx-search-alt-2"></i>
      </article>
      <article className="div_input-section_text">
        <input type="text" id="categoriaInput" />
      </article>
      <article className="div_input-section_submit">
        <input type="submit" id="btnSearch" value="Buscar" />
      </article>
    </section>
  );
}

export default Headermid;

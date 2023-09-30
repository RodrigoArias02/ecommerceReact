import React, { useState, useEffect } from "react";
import Headertop from "./headerTop";
import Headermid from "./headerMid";
import Headerbot from "./headerBot";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation(); // Obtener la ruta actual
  const [penultimateSegment, setPenultimateSegment] = useState("");

  useEffect(() => {
    const segments = pathname.split("/");
    let penultimate = segments[segments.length - 2];
    if (penultimate === "") {
      penultimate = segments[segments.length - 1];
    }
    setPenultimateSegment(penultimate);
  }, [pathname]);

  return (
    <header className="header-product">
      <Headertop
        greeting={
          penultimateSegment === "category" || penultimateSegment === ""
            ? "CompuMundo"
            : "  <i class='bx bx-chevron-left'></i>"
        }
      />
      {penultimateSegment === "category" || penultimateSegment === "" ? (
        <>
          <Headermid />
          <Headerbot />
        </>
      ) : null}
    </header>
  );
};

export default NavBar;

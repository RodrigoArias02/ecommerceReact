import React from "react";
import Headertop from "./headerTop";
import Headermid from "./headerMid";
import Headerbot from "./headerBot";

const NavBar = () => {
  return (
    <header className="header-product">
      <Headertop />
      <Headermid />
      <Headerbot />
    </header>
  );
};
export default NavBar;

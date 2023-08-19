// src/App.js
import React from "react";
import Headertop from "./components/NavBar/headerTop";
import Headermid from "./components/NavBar/headerMid";
import Headerbot from "./components/NavBar/headerBot";
import ItemList from "./components/itemListContainer/itemList";

function App() {
  return (
    <div className="App">
      {/* Siempre los componentes comienzan con mayuscula */}
      <header className="header-product">
        <Headertop />
        <Headermid />
        <Headerbot />
      </header>
      <ItemList greeting={"Bienvenido"} />
    </div>
  );
}

export default App;

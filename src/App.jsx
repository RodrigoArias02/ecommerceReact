// src/App.js
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/itemListContainer/itemList";

function App() {
  return (
    <div className="App">
      {/* Siempre los componentes comienzan con mayuscula */}
      <NavBar />
      <ItemList greeting={"Bienvenido"} />
    </div>
  );
}

export default App;

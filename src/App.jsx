// src/App.js
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* Siempre los componentes comienzan con mayuscula */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="category/:categoryId/item/:itemId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// src/App.js
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/cartContainer/Cart";
import { Checkout } from "./components/checkout/checkout";
import { NotificationProvider } from "./notification/NotificationService";
function App() {
  return (
    <div className="App">
      {/* Siempre los componentes comienzan con mayuscula */}
      <NotificationProvider>
        <BrowserRouter>
          <CartProvider>
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
              <Route path="cart" element={<CartContainer />}></Route>
              <Route path="checkout" element={<Checkout />}></Route>
              <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;

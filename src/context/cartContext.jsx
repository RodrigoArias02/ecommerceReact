import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      const nuevoCart = cart.map((obj) => {
        if (obj.id === item.id) {
          // Clonar el objeto y actualizar la clave si coincide el ID
          return { ...obj, quantity: obj.quantity + quantity };
        }
        return obj; // Mantener el objeto sin cambios si no coincide el ID
      });
      setCart(nuevoCart);
    }
  };
  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };
  const totalQuantity = () => {
    const sumaDeCantidades = cart.reduce((total, producto) => {
      return total + producto.quantity;
    }, 0);
    return sumaDeCantidades;
  };
  const totalPrecio = () => {
    const sumaDePrecios = cart.reduce((totalPrecio, producto) => {
      return totalPrecio + producto.precio * producto.quantity;
    }, 0);
    const sumaDeEnvios = cart.reduce((totalEnvios, producto) => {
      const suma = producto.precio * producto.quantity;
      if (suma < 90000) {
        totalEnvios = totalEnvios + 3000;
      }
      return totalEnvios;
    }, 0);

    return {
      sumaDePrecios,
      sumaDeEnvios,
    };
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

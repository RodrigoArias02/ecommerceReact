import { useState, createContext, useContext } from "react";
import "./notification.css";
const Notification = ({ data }) => {
  const clase =
    data.type === "success" ? "bx bxs-x-circle" : "bx bxs-check-circle";
  const color = {
    backgroundColor:
      data.type === "success" ? "rgba(195,74,67,0.9)" : "rgba(98,172,98,0.9)",
    boxShadow:
      data.type === "success"
        ? "0px 0px 10px rgba(0, 0, 0, 0.5)"
        : "0px 0px 10px rgba(98,172,98,0.9)",
    top: 5,
    right: 5,
  };
  const texto = data.text.substring(0, 25) + "...";
  return (
    <div className="notificationStyle" style={color}>
      <section className="logo">
        <i className={clase}></i>
      </section>
      <section className="texto">
        <h4>Agregado al carrito</h4>
        <p className="descripcion">{texto}</p>
      </section>
    </div>
  );
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationData, setNotificationData] = useState({
    type: "success",
    text: "",
  });

  const setNotification = (type, text, time = 2) => {
    setNotificationData({ type, text });
    setTimeout(() => {
      setNotificationData((prev) => {
        return { ...prev, text: "" };
      });
    }, time * 1500);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {notificationData.text && <Notification data={notificationData} />}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};

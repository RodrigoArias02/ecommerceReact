import { pedirElementos } from "./peticionList";
export const getProductById = async (productId, categoriaId) => {
  try {
    const products = await pedirElementos(categoriaId);
    return products.find((prod) => prod.id === productId);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return null;
  }
};

export async function pedirElementos(idCate) {
  if (typeof idCate === "string" && idCate.length > 0) {
    idCate = idCate === "procesadores" ? "MLA1693" : idCate;
    idCate = idCate === "placasmadre" ? "MLA1692" : idCate;
    idCate = idCate === "memoriasram" ? "MLA1694" : idCate;
    idCate = idCate === "almacenamiento" ? "MLA1672" : idCate;
  } else {
    // El parámetro no es un string con contenido
    idCate = "MLA1693";
  }

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=${idCate}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
    return null;
  }
}

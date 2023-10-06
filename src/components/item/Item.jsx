import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Item = ({ id, precio, imgUrl, nombre, categoria }) => {
  const off = precio > 80000 && precio < 100000 ? 5 : precio > 100000 ? 13 : "";
  let offC = "";
  const { categoryId } = useParams();

  const precioSinEntero = Math.floor(precio);
  let precioD = 0;
  return (
    <>
      <section className="section-card">
        <div className="section-div_like">
          <i className="bx bxs-heart"></i>
        </div>
        <div className="card-containerImg">
          <img src={imgUrl} alt="" />
        </div>
        <article className="card-containerText">
          <p className="nombreProducto">{nombre}</p>
          <span className="precioDescuento">
            <p>
            {
              (precioD =
                off !== "" ? "$" + (precio * (1 - off / 100)).toFixed(0) : precioSinEntero)
            }</p>
            <p>{(offC = off !== "" ? "%" + off : "")}</p>
          </span>
          <p className="precioAnterior">{precioD =
                off !== "" ? "$" + precioSinEntero : ""}
          </p>
        </article>
        <section className="card-containerButtons">
          <Link
            to={
              categoryId === undefined
                ? `category/${categoria}/item/${id}`
                : `./item/${id}`
            }
          >
            Ver mas
          </Link>
          <a href="#">
            <i className="bx bx-plus"></i>
          </a>
        </section>
      </section>
    </>
  );
};
export default Item;

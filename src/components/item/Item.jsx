import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Item = ({ id, price, thumbnail, title, category_id }) => {
  const off = price > 80000 && price < 100000 ? 5 : price > 100000 ? 13 : "";
  let offC = "";
  const { categoryId } = useParams();

  let precioD = 0;
  return (
    <>
      <section className="section-card">
        <div className="section-div_like">
          <i className="bx bxs-heart"></i>
        </div>
        <div className="card-containerImg">
          <img src={thumbnail} alt="" />
        </div>
        <article className="card-containerText">
          <p className="nombreProducto">{title}</p>
          <span className="precioDescuento">
            <p>${price}</p>
            <p>{(offC = off !== "" ? "%" + off : "")}</p>
          </span>
          <p className="precioAnterior">
            {
              (precioD =
                off !== "" ? "$" + (price * (1 - off / 100)).toFixed(0) : "")
            }
          </p>
        </article>
        <section className="card-containerButtons">
          <Link
            to={
              categoryId === undefined
                ? `category/procesadores/item/${id}`
                : `./item/${id}`
            }
          >
            Ver mas
          </Link>
          <a href="">
            <i className="bx bx-plus"></i>
          </a>
        </section>
      </section>
    </>
  );
};
export default Item;

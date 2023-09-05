import "./ItemDetail.css";
import ItemCount from "../itemCount/ItemCount";
const ItemDetail = ({ price, thumbnail, title, sold_quantity }) => {
  return (
    <>
      <section className="object-img">
        <article className="body-img">
          <img src={thumbnail} alt="" />
        </article>
      </section>
      <section className="body-object">
        <article className="body-article">
          <p className="title">{title}</p>
          <span>
            <p>{price}</p>
            <p>{price}</p>
          </span>
          <p className="off">%55</p>
        </article>
        <article className="body-article_buttons">
          <p className="p" id="descripcion">
            Descripcion
          </p>
          <p className="p" id="especificaciones">
            Especificaciones
          </p>
        </article>
        <article
          className="body-article_description"
          id="contenedor-descripcion"
        >
          <p></p>
        </article>
        <article className="body-article-relacionados">
          <p>Productos relacionados</p>
          <section className="section-relacionados_cards">
            <div className="card-relacionados">
              <article className="article-img">
                <img src={thumbnail} alt="" />
              </article>
              <article className="article-relacionados_text">
                <p>{title}</p>
                <p>{price}</p>
              </article>
            </div>
            <div className="card-relacionados">
              <article className="article-img">
                <img src={thumbnail} alt="" />
              </article>
              <article className="article-relacionados_text">
                <p>{title}</p>
                <p>{price}</p>
              </article>
            </div>
          </section>
        </article>
      </section>

      <ItemCount
        initial={1}
        stock={sold_quantity}
        onAdd={(quantity) => console.log("cantidad:", quantity)}
      />
    </>
  );
};
export default ItemDetail;

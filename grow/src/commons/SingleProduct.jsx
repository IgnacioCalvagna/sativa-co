import "./SingleProduct.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [mainSrc, setMainSrc] = useState("");

  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then(res => {
        console.log(`res es`, res)
        setProduct(res.data)
      })
      // .then(() => {
      //   setMainSrc(product.img[0]);
      // });
  }, []);

  console.log(`Product es`, product);

  const handleImageClick = (event) => {
    setMainSrc(event.target.src);
    // console.log(document.getElementsByClassName('thumbnails-div'));
  };

  const prevImg = () => {
    if (product.img.indexOf(mainSrc) > 0) {
      setMainSrc(product.img[product.img.indexOf(mainSrc) - 1]);
    }
  };

  const nextImg = () => {
    // console.log(`index es`, arrImg.indexOf(mainSrc));
    // console.log(`length es`, arrImg.length);
    if (product.img.indexOf(mainSrc) < product.img.length - 1) {
      setMainSrc(product.img[product.img.indexOf(mainSrc) + 1]);
    }
  };

  return (
    <div className="container singleProduct">
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="row d-flex col-lg-5 product-images ">
          <div className="row thumbnails-div col-4">
            {console.log(`product.img es`, product.img)}
            {product.img? product.img.map((ruta, index) => {
              return (
                <img
                  className="product-thumbnail"
                  src={ruta}
                  onClick={handleImageClick}
                ></img>
              );
            }) : null
          }
          </div>
          <div className="main-image col-8">
            <img
              id="featured"
              className="img-fluid product-img"
              style={{
                alignSelf: "center",
                width: "auto",
                maxHeight: "400px",
                margin: "auto",
              }}
              src={product.img? (mainSrc? mainSrc : product.img[0]) : ''}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <div onClick={prevImg} className="arrow">
                {"<"}
              </div>
              <div onClick={nextImg} className="arrow">
                {">"}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <h1 className="text-start product-name">{product.name}</h1>
          <div className="rating-div text-start">
            {" "}
            {"rating 4"} {"star-icon"} {"2 Reviews"}
          </div>
          <div className="product-price text-start d-flex">
            <span className="price">$ {product.price}</span>
            <span className="stock">Stock {product.stock}</span>
          </div>

          <div className="product-description text-start">
            <h4>Detalles del producto</h4>
            <p>{product.description}</p>
          </div>
          <div className="text-start">
            <label htmlFor="quantity">Cantidad: </label>
            <div className="d-flex buyDiv">
              <div className="d-flex">
                <button className="btn btn-light">+</button>
                <input
                  id="quantity"
                  style={{ maxWidth: "80px", textAlign: "center" }}
                  className="form-control"
                  placeholder="1"
                ></input>
                <button className="btn btn-light">-</button>
              </div>
              <button className="btn btn-primary">Agregar a carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

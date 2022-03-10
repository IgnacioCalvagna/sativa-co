import "./SingleProduct.css";
// import "./slider.js";
import { useState } from "react";

const SingleProduct = () => {
  const [mainSrc, setmainSrc] = useState("./pikachu.jpg");
  const arrImg = [
    "./pikachu.jpg",
    "https://i.pinimg.com/736x/f4/95/52/f49552c63e353a6c2b73eada2f8f4671.jpg",
    "https://ae01.alicdn.com/kf/HTB1EVWFdwHqK1RjSZFEq6AGMXXa9.jpg",
  ];
  const handleImageClick = (event) => {
    setmainSrc(event.target.src);
    console.log(document.getElementsByClassName("thumbnails-div"));
  };

  const prevImg = () => {
    if (arrImg.indexOf(mainSrc) > 0) {
      setmainSrc(arrImg[arrImg.indexOf(mainSrc) - 1]);
    }
  };

  const nextImg = () => {
    console.log(`index es`, arrImg.indexOf(mainSrc));
    console.log(`length es`, arrImg.length);
    if (arrImg.indexOf(mainSrc) < arrImg.length - 1) {
      setmainSrc(arrImg[arrImg.indexOf(mainSrc) + 1]);
    }
  };

  return (
    <div className="container singleProduct">
      <div className="row" style={{justifyContent: 'center'}}>
        <div className="d-flex col-lg-5 product-images row">
          <div className="row thumbnails-div col-4">
            <img
              className="product-thumbnail"
              src="./pikachu.jpg"
              onClick={handleImageClick}
            />
            <img
              className="product-thumbnail"
              src="https://i.pinimg.com/736x/f4/95/52/f49552c63e353a6c2b73eada2f8f4671.jpg"
              onClick={handleImageClick}
            />
            <img
              className="product-thumbnail"
              src="https://ae01.alicdn.com/kf/HTB1EVWFdwHqK1RjSZFEq6AGMXXa9.jpg"
              onClick={handleImageClick}
            />
            
          </div>
          <div className="main-image">
            <div onClick={prevImg}>{"<"}</div>
            <img
              id="featured"
              className="img-fluid product-img"
              style={{
                alignSelf: "center",
                width: "auto",
                maxHeight: "400px",
                margin: "auto",
              }}
              src={mainSrc}
            />
            <div onClick={nextImg}>{">"}</div>
          </div>
        </div>

        <div className=" 
        product-detailssss 
        col-lg-7">
          <h1 className="text-start product-name">Product name</h1>
          <div className="rating-div text-start">
            {" "}
            {"rating (1-5)"} {"star-icon"} {"N Reviews"}
          </div>
          <div className="product-price text-start d-flex">
            <span className="price">{"$200,000"}</span>
            <span className="stock">Stock</span>
          </div>

          <div className="product-description text-start">
            <h4>Detalles del producto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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

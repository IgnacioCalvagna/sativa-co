import pikachu from "../assets/pikachu.jpg";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div className="container singleProduct">
      <div className="row">
        <div class="col-md-5 d-flex">
          <img
            className="img-fluid product-img"
            style={{
              alignSelf: "center",
              width: "auto",
              maxHeight: "400px",
              margin: "auto",
            }}
            src={pikachu}
          />
        </div>

        <div
          class="col-md-7 product-details"
          // style={{ backgroundColor: "orange" }}
        >
          <h1 className="text-start product-name">Product name</h1>
          <div class="rating-div text-start">
            {" "}
            {"rating (1-5)"} {"star-icon"} {"N Reviews"}
          </div>
          <div class="product-price text-start d-flex">
            <span className="price">{"$200,000"}</span>
            <span className="stock">Stock</span>
          </div>

          <div class="product-description text-start">
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
              <button className="btn btn-light">+1</button>
              <input id="quantity" style={{ maxWidth: "80px"}} className="form-control"></input>
              <button className="btn btn-light">-1</button>
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

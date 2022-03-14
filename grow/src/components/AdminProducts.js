import "../style/AdminProducts.css";

const AdminProducts = () => {
  return (
    <div className="container singleProductDiv">
      <h1 className="text-center product-name ">CREAR PRODUCTO</h1>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-lg-7">
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre del producto"
              name="name"
              className="productInput"
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="price">Precio:</label>
            <span>
              (ARS) $
              <input
                type="number"
                placeholder='0'
                min={0}
                name="price"
                className="productInput priceInput"
              />
            </span>
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="category">Categoría:</label>
            <input
              type="text"
              placeholder="Categoría 1; Categoría 2; ... "
              name="category"
              className="productInput"
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              placeholder="Stock del producto"
              min={0}
              name="stock"
              className="productInput"
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="images">Imagenes:</label>
            <input
              type="text"
              placeholder="path1; path2; ..."
              name="images"
              className="productInput"
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="description">Descripción:</label>
            <textarea type="text" placeholder="Description" />
          </div>

          <div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary ">Agregar producto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;

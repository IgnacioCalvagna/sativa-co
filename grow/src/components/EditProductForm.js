import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const EditProductForm = () => {
  const { id } = useParams();
  // const imagePath1 = useInput("");
  // const imagePath2 = useInput("");
  // const imagePath3 = useInput("");
  // const imagePath4 = useInput("");
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    img: ["", "", "", ""],
  });

  const [checkedState, setCheckedState] = useState({});

  const handlePathChange = (e) => {
    const otroObj = Object.assign({}, product);
    otroObj.img[parseInt(e.target.id[e.target.id.length - 1])] = e.target.value;
    setProduct(otroObj);
  };

  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        return res.data.category;
      })
      .then((returnedCateg) => {
        let auxObj = {};
        categorias.forEach((categ) => {
          auxObj[categ] = categ === returnedCateg;
        });
        setCheckedState(auxObj);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/product/${product.id}`, product);
  };

  const categorias = [
    "Lámparas",
    "Carpas",
    "Fertilizantes",
    "Sustratos",
    "Picadores",
    "fungicida"
  ];

  const handleOnChangeCheck = (categ) => {
    const updatedCheckedState = { ...checkedState };
    console.log(`updatedcheckstate es`, updatedCheckedState);
    console.log(`categ es`, categ);

    for (const property in updatedCheckedState) {
      console.log(`property es`, property)
      property == categ
        ? (updatedCheckedState[categ] = !updatedCheckedState[categ])
        : (updatedCheckedState[categ] = updatedCheckedState[categ]);
    }
    // const updatedCheckedState = checkedState.forin((item, index) =>
    //   index === position ?] !item : item
    // );
    console.log(`updatedcheckstate es`, updatedCheckedState);

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="container singleProductDiv">
      <h1 className="text-center product-name ">EDITAR PRODUCTO</h1>
      <div className="row" style={{ justifyContent: "center" }}>
        <form className="col-lg-7" onSubmit={handleSubmit}>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre del producto"
              name="name"
              className="productInput"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="price">Precio:</label>
            <span>
              (ARS) $
              <input
                type="number"
                placeholder="0"
                min={0}
                name="price"
                className="productInput priceInput"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </span>
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="category">Categoría:</label>

            {/* <select name="category" id="cars" style={{height: '60px', padding: '0 15px'}} multiple>
              {categorias.map(category=>{
                return (<option value={category}>{category}</option>)
              })} 
            </select>
             */}

            <div className="form-check">
              {/* {
                let anotherCHeck = true
                return ()
              } */}

              {categorias.map((categ, index) => {
                //ACA FALTA QUE PRODUCT.CATEGORY SEA UN ARRAY
                return (
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={categ}
                      value={categ}
                      checked={checkedState[categ]}
                      onChange={() => handleOnChangeCheck(categ)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {categ}
                    </label>
                  </div>
                );
              })}
            </div>
            <div style={{ alignSelf: "flex-end" }}>
              <button className="btn btn-light">Editar categorías</button>
              <button className="btn btn-dark">Nueva categoría</button>
            </div>
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              placeholder="Stock del producto"
              min={0}
              name="stock"
              className="productInput"
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: e.target.value })
              }
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="images">Imagenes:</label>
            {/* {product.img? product.img.map(img=>{
              return (
                <input
              type="text"
              placeholder="path1; path2; ..."
              name="images"
              className="imgProductInput"
              defaultValue={img}
            />
              )
            }): null} */}
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img? product.img[0]: ''}
              onChange={handlePathChange}
              id="path0"
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img? product.img[1]: ''}
              onChange={handlePathChange}
              id="path1"
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img? product.img[2]: ''}
              onChange={handlePathChange}
              id="path2"
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img? product.img[3]: ''}
              onChange={handlePathChange}
              id="path3"
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="description">Descripción:</label>
            <textarea
              type="text"
              placeholder="Description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>

          <div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary" type="submit">
                Editar producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;

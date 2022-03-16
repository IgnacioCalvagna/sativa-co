import axios from "axios";
import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";

const NewProductForm = () => {
  const categorias = ["Lámparas", "Carpas", "Fertilizantes", "Sustratos"];

  const name = useInput("");
  const price = useInput(0);
  // const category = useInput([])
  const stock = useInput(0);
  const imagePath1 = useInput("");
  const imagePath2 = useInput("");
  const imagePath3 = useInput("");
  const imagePath4 = useInput("");

  const description = useInput("");

  const [imgNumber, setImgNumber] = useState(["1"]);

  const handleNumberImg = (e) => {
    e.preventDefault();
    if (imgNumber.length < 7) {
      let otroArr = imgNumber.map((el) => el);
      otroArr.push("otro");
      setImgNumber(otroArr);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/product/add", {
      name: name.value,
      description: description.value,
      category: 'lampara', //ARREGLAR ESTE DATO
      price: price.value,
      stock: stock.value,
      img: [
        imagePath1.value,
        imagePath2.value,
        imagePath3.value,
        imagePath4.value,
      ],
    });
  };


  // useEffect(()=> {
  //   for(let i=0; i<categorias.length; i++) {
  //     const [`categoria${i}`, `setCategoria${i}`]
  //   }
  // })


  return (
    <div className="container singleProductDiv">
      <h1 className="text-center product-name ">CREAR PRODUCTO</h1>
      <div className="row" style={{ justifyContent: "center" }}>
        <form className="col-lg-7" onSubmit={handleSubmit}>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre del producto"
              name="name"
              className="productInput"
              {...name}
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
                {...price}
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
              {categorias.map((category) => {
                return (
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={category}
                      name={category}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {category}
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
              {...stock}
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="images">Imagenes:</label>
            {/* {imgNumber.map((el) => {
              return (
                <input
                  type="text"
                  placeholder="https://path-to-img.png"
                  name="images"
                  className="imgProductInput"
                />
              );
            })}
            <div style={{ alignSelf: "flex-end" }}>
              <button className="btn btn-dark" onClick={handleNumberImg}>
                Agregar nuevo path
              </button>
            </div> */}

            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              {...imagePath1}
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              {...imagePath2}
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              {...imagePath3}
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              {...imagePath4}
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="description">Descripción:</label>
            <textarea type="text" placeholder="Description" {...description} />
          </div>

          <div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary" type="submit">
                Crear producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProductForm;

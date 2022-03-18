import "../style/AdminProducts.css";
import useInput from "../hooks/useInput";
import { Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminProducts = () => {
  const searchValue = useInput("");
  const [results, SetResults] = useState([]);

  const [auxProductId, setAuxProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.value !== "") {
      axios
        .get(`/api/product/name/${searchValue.value}`)
        .then((res) => SetResults(res.data));
    }
  };

  //prueba de modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleDelete = () => {
    console.log(`PRODUCT ID ES`, auxProductId);
    axios
      .delete(`/api/product/${auxProductId}`)
      .then(() => {
        console.log("eliminado");
      })
      .then(() => {
        axios
          .get(`/api/product/name/${searchValue.value}`)
          .then((res) => SetResults(res.data));
      });
    setShow(false);
  };

  const handleShow = () => setShow(true);

  //

  const handleEdit = (e) => {
    const productId = e.target.id;
  };

  return (
    <div className="container usersTitleDiv">
      <h1>Products</h1>
      <div className="searchFormDiv">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="searchUsersInput">Buscador de usuarios </label> */}
          <input
            type="text"
            name="products"
            id="searchProductsInput"
            className="searchFormInput"
            placeholder="Busca un producto"
            {...searchValue}
          />
          <button className="btn btn-primary searchFormBtn" type="submit">
            Buscar
          </button>
        </form>
        <Link to={"/admin/products/new-product"}>
          <button className="btn btn-success" style={{ marginTop: "20px" }}>
            Crear producto
          </button>
        </Link>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr key={result.id}>
                <td>
                  {
                    <img
                      src={result.img[0] ? result.img[0] : ""}
                      style={{ width: "100%", maxWidth: "100px" }}
                    />
                  }
                </td>
                <td>
                  <div className="celdaContent">{result.name}</div>
                </td>
                <td>
                  <div className="celdaContent">{result.description}</div>
                </td>
                <td>
                  <div className="celdaContent">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setAuxProductId(result.id);
                        handleShow();
                      }}
                    >
                      Eliminar
                    </button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirmar eliminar producto?</Modal.Title>
                      </Modal.Header>
                      <Modal.Footer>
                        <button
                          className="btn btn-secondary"
                          onClick={handleClose}
                        >
                          Close
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            console.log(`EL ID ES`, auxProductId);
                            handleDelete();
                          }}
                        >
                          Eliminar
                        </button>
                      </Modal.Footer>
                    </Modal>

                    <Link to={`/admin/products/edit/${result.id}`}>
                      <button
                        className="btn btn-primary"
                        // id={result.id}
                        onClick={() => {}}
                      >
                        Editar
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminProducts;

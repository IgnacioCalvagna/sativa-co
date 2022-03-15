import "../style/AdminProducts.css";
import useInput from "../hooks/useInput";
import { Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminProducts = () => {
  const searchValue = useInput("");
  const [results, SetResults] = useState([]);

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
            <th>Categoría</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr key={result.id}>
                <td>{result.category}</td>
                <td>{result.name}</td>
                <td>{result.description}</td>
                <td>
                  <div style={{ alignSelf: "flex-end" }}>
                    <button className="btn btn-danger" onClick={handleShow}>
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
                          onClick={handleClose}
                        >
                          Eliminar
                        </button>
                      </Modal.Footer>
                    </Modal>

                    <Link to={`/admin/products/edit/${result.id}`}>
                      <button
                        className="btn btn-primary"
                        id={result.id}
                        onClick={handleEdit}
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

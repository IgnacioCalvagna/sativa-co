import axios from "axios";
import { useState, useEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/AdminCategories.css";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`/api/category/getAll/`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  const [auxCategId, setAuxCategId] = useState("");

  //del modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleDelete = () => {
    console.log(`Categ ID ES`, auxCategId);
    axios
      .delete(`/api/category/${auxCategId}`)
      .then(() => {
        console.log("eliminado");
      })
      .then(() => {
        axios.get(`/api/category/getAll/`).then((res) => {
          setCategories(res.data);
        });
      });
    setShow(false);
  };

  const handleShow = () => setShow(true);

  //

  const handleEdit = (e) => {
    const productId = e.target.id;
  };

  return (
    <div className="container categoriesDiv">
      <h1 style={{ paddingBottom: "40px" }}>Categorías</h1>
      <Link to={"/admin/categories/new-category"}>
        <button className="btn btn-success" style={{ marginBottom: "40px" }}>
          Crear categoría
        </button>
      </Link>   
      <Table bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((result) => {
            return (
              <tr key={result.id}>
                <td>
                  <div className="categoriesCelda">{result.id}</div>
                </td>
                <td>
                  <div className="categoriesCelda">{result.name}</div>
                </td>
                <td>
                  <div className="categoriesCelda">{result.description}</div>
                </td>
                <td>
                  <div className="categoriesCelda">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setAuxCategId(result.id);
                        handleShow();
                      }}
                    >
                      Eliminar
                    </button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirmar eliminar categoría?</Modal.Title>
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
                          onClick={handleDelete}
                        >
                          Eliminar
                        </button>
                      </Modal.Footer>
                    </Modal>

                    <Link to={`/admin/categories/edit/${result.id}`}>
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

export default AdminCategories;

import { Table } from "react-bootstrap";
import useInput from "../hooks/useInput";
import "../style/AdminUsers.css";

//FALTA: - Considerar que un admin no puede autorrevocarse un permiso.

const AdminUsers = () => {
  const searchValue = useInput("");
  const usersArr = [
    {
      name: "pika",
      lastname: "chu",
      email: "pika@chu.com",
      role: "admin",
    },
    {
      name: "char",
      lastname: "mander",
      email: "char@mander.com",
      role: "user",
    },
  ];

  return (
    <div className="container usersTitleDiv">
      <h1>Users</h1>
      <div className="searchFormDiv">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* <label htmlFor="searchUsersInput">Buscador de usuarios </label> */}
          <input
            type="text"
            name="users"
            id="searchUsersInput"
            className="searchFormInput"
            placeholder="Busca un usuario"
            {...searchValue}
          />
          <button className="btn btn-primary searchFormBtn">Buscar</button>
        </form>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersArr.map((user, index) => {
            return (
              <tr key={index}>
                <td>
                  {user.role === "admin" ? (
                    <button className="btn btn-danger">Remover</button>
                  ) : (
                    <button className="btn btn-success">Promover</button>
                  )}
                </td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminUsers;

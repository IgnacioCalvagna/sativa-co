import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import "../style/AdminUsers.css";

//FALTA: - Considerar que un admin no puede autorrevocarse un permiso.

const AdminUsers = () => {
  const searchValue = useInput("");

  const user = useSelector((state) => state.user);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchValue.value !== "") {
  //   }
  // };
  console.log(`user id afuera del useeffect es`, user.id);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/user`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  //   useEffect(() => {
  //     if(user.id&&users[0]) {
  //  console.log(`user id es`, user.id);
  //     console.log(`USERS son`, users);
  //     const filteredUsers = users.filter((el) => el.id !== user.id);
  //     setUsers(filteredUsers)
  //     }

  //   }, []);

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

  const handlePromote = () => {
    // axios.
  }

  return (
    <div className="container usersTitleDiv">
      <h1>Users</h1>
      <div className="searchFormDiv">
        {/* <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="searchUsersInput">Buscador de usuarios </label>
          <input
            type="text"
            name="users"
            id="searchUsersInput"
            className="searchFormInput"
            placeholder="Busca un usuario"
            {...searchValue}
          />
          <button className="btn btn-primary searchFormBtn">Buscar</button>
        </form> */}
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, index) => {
            return (
              <tr key={index}>
                <td>{usr.name}</td>
                <td>{usr.lastname}</td>
                <td>{usr.email}</td>
                <td>
                  {usr.role === "admin" ? (
                    <button
                      className="btn btn-danger"
                      disabled={user.id ? parseInt(user.id) === parseInt(usr.id) : true}
                    >
                      Remover
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      disabled={user.id ? parseInt(user.id) === parseInt(usr.id) : true}
                      onClick={handlePromote}
                    >
                      Promover
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminUsers;

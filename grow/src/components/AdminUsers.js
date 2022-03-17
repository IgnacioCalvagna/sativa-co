import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import '../style/AdminUsers.css';
import { useNavigate } from 'react-router';

//FALTA: - Considerar que un admin no puede autorrevocarse un permiso.

const AdminUsers = () => {
  const navigate = useNavigate();

  const searchValue = useInput('');

  const user = useSelector(state => state.user);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/user/getAll/${user.roleId}`).then(res => {
      setUsers(res.data);
    });
  }, []);
  const handlePromote = id => {
    axios.put(`/api/user/admin/adminPromote`, { id });
  };

  return (
    <div className='container usersTitleDiv'>
      <h1>Users</h1>
      <div className='searchFormDiv'>
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
                  {usr.role === 'admin' ? (
                    <button
                      className='btn btn-danger'
                      disabled={
                        user.id ? parseInt(user.id) === parseInt(usr.id) : true
                      }
                    >
                      Remover
                    </button>
                  ) : (
                    <button
                      className='btn btn-success'
                      disabled={
                        user.id ? parseInt(user.id) === parseInt(usr.id) : true
                      }
                      onClick={() => handlePromote(usr.id)}
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

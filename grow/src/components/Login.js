import { useDispatch, useSelector } from 'react-redux';
import {
  sendLoginRequest,
  sendSignUpRequest,
  sendLogoutRequest,
} from '../state/user';

import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router';

export const Login = () => {

  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const first_name = useInput('');
  const last_name = useInput('');
  const email = useInput('');
  const password = useInput('');

  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    console.log('yo soy el mail y el password', email.value, password.value);
    dispatch(
      sendLoginRequest({ email: email.value, password: password.value })
    );
  };
  const handleRegister = e => {
    e.preventDefault();

    dispatch(
      sendSignUpRequest({
        name: first_name.value,
        lastname: last_name.value,
        email: email.value,
        password: password.value,
      }).then(navigate('/'))
    );
  };

  const handleLogout = () => {
    console.log('aprete logout');
    dispatch(sendLogoutRequest());
  };

  return (
    <div>
      <div
        className='modal fade'
        id='registerModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Registrate
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleRegister}>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Nombre
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                    {...first_name}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Apellido
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                    {...last_name}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='recipient-name'
                    {...email}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Contraseña
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='recipient-name'
                    {...password}
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Salir
              </button>
              <button
                type='submit'
                onClick={handleRegister}
                className='btn btn-primary'
              >
                Registrate
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className='modal fade'
        id='loginModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Iniciar sesión
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleLogin}>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='recipient-name'
                    {...email}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Contraseña
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='recipient-name'
                    {...password}
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Salir
              </button>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={handleLogin}
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      <a className='iconNavbar' data-bs-toggle='dropdown'>
        <ion-icon name='person-outline'></ion-icon>
      </a>
      <div className='dropdown-menu dropdown-menu-lg-end'>
        {!user.id ? (
          <div>
            <li>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#loginModal'
                data-bs-whatever='@mdo'
              >
                Login
              </button>
            </li>
            <li>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#registerModal'
                data-bs-whatever='@getbootstrap'
              >
                Register
              </button>
            </li>
          </div>
        ) : (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </div>
    </div>
  );
};

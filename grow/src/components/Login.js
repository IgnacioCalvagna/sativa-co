import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import "../style/Login.css"
import useInput from '../hooks/useInput';
import {
  sendLoginRequest,
  sendSignUpRequest,
  sendLogoutRequest,
} from '../state/user';
import {getShoppingCart} from '../state/shoppingCart'

export const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const first_name = useInput('');
  const last_name = useInput('');
  const email = useInput('');
  const password = useInput('');

  const dispatch = useDispatch();

  const validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  };

  const validateString = str => {
    if (/^[a-z ,.'-]+$/i.test(str)) {
      return true;
    }
    alert('Your name or lastname is not valid!');
    return false;
  };

  const handleLogin = e => {
    e.preventDefault();

    if (!validateEmail(email.value)) return;
    dispatch(
      sendLoginRequest({
        email: email.value,
        password: password.value,
      })

    )
    .then(() => {
      window.location.reload(false);
    });
  };
  const handleRegister = e => {
    e.preventDefault();

    if (!validateString(first_name.value)) return;
    if (!validateString(last_name.value)) return;
    if (!validateEmail(email.value)) return;

    dispatch(
      sendSignUpRequest({
        name: first_name.value,
        lastname: last_name.value,
        email: email.value,
        password: password.value,
      })
    )
      .then(user =>
        dispatch(
          sendLoginRequest({ email: user.email, password: user.password })
        )
      )
      .then(() => {
        window.location.reload(false);
      });
  };

  const handleLogout = () => {
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
                    minlength='2'
                    maxlength='30'
                    className='form-control'
                    id='recipient-name'
                    required
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
                    minlength='2'
                    maxlength='30'
                    required
                    {...last_name}
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='recipient-name'
                    className='col-form-label'
                    data-error='wrong'
                    data-success='right'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control validate'
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
                className='buttonLogin'
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
                className='buttonLogin'
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
            <button className="buttonLogin" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </div>
    </div>
  );
};

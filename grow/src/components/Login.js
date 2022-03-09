import {useDispatch} from 'react-redux'

import useInput from "../hooks/useInput"

export const Login = () => {


    const first_name = useInput('')
    const last_name = useInput('')
    const email = useInput('')
    const password = useInput('')

    const dispatch = useDispatch()

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch()
    }
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch()
    }

  

    return (
        <div>

            <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Registrate</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleRegister}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Nombre</label>
                                    <input type="text" class="form-control" id="recipient-name" {...first_name} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Apellido</label>
                                    <input type="text" class="form-control" id="recipient-name" {...last_name}/>
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Email</label>
                                    <input type="email" class="form-control" id="recipient-name" {...email} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="recipient-name" {...password}/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                            <button type="submit" class="btn btn-primary" >Registrate</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Iniciar sesión</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleLogin}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Email</label>
                                    <input type="email" class="form-control" id="recipient-name" {...email}/>
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="recipient-name" {...password}/>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </div>
                </div>
            </div>



            <div >
                <a className="iconNavbar" data-bs-toggle="dropdown"  ><ion-icon name="person-outline"></ion-icon></a>
                <div class="dropdown-menu dropdown-menu-lg-end">
                    <li>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-whatever="@mdo">Iniciar sesión</button>

                    </li>
                    <li>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal" data-bs-whatever="@getbootstrap">Registrate</button>
                    </li>
                </div>
            </div>


        </div>
    )
}
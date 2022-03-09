import React from 'react';
import "../style/Navbar.css"

export const Sidebar = ()=>{
    return(
        <div>
            <a className="iconNavbar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon name="cart-outline"></ion-icon></a>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">CARRITO DE COMPRAS</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    articulo 1
                </div>
                <div class="offcanvas-body">
                    articulo 2
                </div>
                <div class="offcanvas-body">
                    articulo 3
                </div>
            </div>
        </div>
    )
}
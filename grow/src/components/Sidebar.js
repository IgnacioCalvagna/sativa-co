import React, { useState } from 'react';

import Cart from "./Cart"



export const Sidebar = () => {

    return (
        <div>
            <a className="iconNavbar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon name="cart-outline"></ion-icon></a>
            <div className="offcanvas offcanvas-end cont" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header ">
                    <h5 id="offcanvasRightLabel">CARRITO DE COMPRAS</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <Cart />
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import "../style/Sidebar.css"

const Cart = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems([
            {
                id: 1,
                name: "planta",
                price: 3050,
                img: "imgproduct-png",
                description: "esta es la descripcion del producto",
                quantityStock: 5,
                quantity: 1
            },
            {
                id: 2,
                name: "maseta",
                price: 1000,
                img: "imgproduct-png",
                description: "esta es la descripcion del producto",
                quantityStock: 3,
                quantity: 1
            },
            {
                id: 3,
                name: "tierra",
                price: 3500,
                img: "imgproduct-png",
                description: "esta es la descripcion del producto",
                quantityStock: 4,
                quantity: 1
            },
            {
                id: 4,
                name: "tijera",
                price: 2000,
                img: "imgproduct-png",
                description: "esta es la descripcion del producto",
                quantityStock: 3,
                quantity: 1
            }
        ])
    }, [])

    const suma = (id) => {
        let itemAux = items
        let itemsAux = []
        itemAux.forEach(item => {
            if (item.id == id && item.quantity < item.quantityStock) item.quantity = item.quantity + 1
            itemsAux.push(item)
        })
        setItems(itemsAux)
    }
    const resta = (id) => {
        let itemAux = items
        let itemsAux = []
        itemAux.forEach(item => {
            if (item.id == id && item.quantity > 1) item.quantity = item.quantity - 1
            itemsAux.push(item)
        })
        setItems(itemsAux)
    }
    console.log("---->", items.map(({ quantity, price }) => quantity * price).reduce((total, i) => total + i, 0))

    return (<>
        <div className="containerSidebar">
            <div>
                <div className="titleCart">
                    <h>producto</h>
                    <h>subtotal</h>
                </div>
                <>{
                    items.map(({ name, id, price, quantity, quantityStock }, i) => {
                        return (

                            <div key={id} className="containerCart">
                                <div className="itemImg"><ion-icon name="leaf-outline"></ion-icon></div>
                                <div className="subContainerCart">
                                    <div>
                                        <li className="dataItem">{name}</li>
                                        <li className="dataItem">${price}</li>
                                        <li className="quantityItem">
                                            <button type="button" className="buttonQuantity" onClick={() => resta(id)}>-</button>
                                            <p className="quantity">{quantity}</p>
                                            <button type="button" class="buttonQuantity" onClick={() => suma(id)}>+</button>
                                        </li>
                                        {quantity == quantityStock ? <li className="err">sin stock</li> : null}
                                    </div>
                                    <div className="subtotal">
                                        <li className="dataItem">${price * quantity}</li>
                                        <a className="trashIcon"><ion-icon name="trash-outline"></ion-icon></a>
                                    </div>
                                </div>
                            </div>)
                    })}</>
            </div>
            <div>
                <div className="containerTotal">
                    <h className="titleTotal">Total a pagar</h>
                    <h className="titleTotal">${items.map(({ quantity, price }) => quantity * price).reduce((total, i) => total + i, 0)}</h>
                </div>
                <div className="subPrice">
                    <div>O hasta 6 cuotas sin interes de {(items.map(({ quantity, price }) => quantity * price).reduce((total, i) => total + i, 0) / 6).toFixed(2)}</div>
                    <button className="buttonQuantity starting">Iniciar compra</button>
                </div>

            </div>

        </div>
    </>
    )
}

export default Cart;
import React, { useState, useEffect } from 'react';
import "../style/Sidebar.css"

const Cart = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(
            [
                {
                    "id": 1,
                    "quantity": 7,
                    "createdAt": "2022-03-15T02:51:47.953Z",
                    "updatedAt": "2022-03-15T03:54:43.267Z",
                    "ShoppingCartId": 1,
                    "productId": 1,
                    "product": {
                        "id": 1,
                        "name": "Picador",
                        "description": "Para picar con comidad, facil de llevar",
                        "category": "Picadores",
                        "price": "1500",
                        "stock": 15,
                        "img": null,
                        "createdAt": "2022-03-15T02:51:11.865Z",
                        "updatedAt": "2022-03-15T02:51:11.865Z"
                    }
                },
                {
                    "id": 2,
                    "quantity": 3,
                    "createdAt": "2022-03-15T03:57:10.397Z",
                    "updatedAt": "2022-03-15T03:57:10.428Z",
                    "ShoppingCartId": 1,
                    "productId": 2,
                    "product": {
                        "id": 2,
                        "name": "Macetas",
                        "description": "Macetas de pvc reciclado en color verde",
                        "category": "Contenedores",
                        "price": "2500",
                        "stock": 120,
                        "img": null,
                        "createdAt": "2022-03-15T02:51:11.865Z",
                        "updatedAt": "2022-03-15T02:51:11.865Z"
                    }
                }
            ]
             
        )
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

    return (<>
        <div className="containerSidebar">
            <div>
                <div className="titleCart">
                    <h>producto</h>
                    <h>subtotal</h>
                </div>
                <>{
                    items.map(({ id, quantity, product }, i) => {
                        return (

                            <div key={id} className="containerCart">
                                <div className="itemImg"><ion-icon name="leaf-outline"></ion-icon></div>
                                <div className="subContainerCart">
                                    <div>
                                        <li className="dataItem">{product.name}</li>
                                        <li className="dataItem">${product.price}</li>
                                        <li className="quantityItem">
                                            <button type="button" className="buttonQuantity" onClick={() => resta(id)}>-</button>
                                            <p className="quantity">{quantity}</p>
                                            <button type="button" class="buttonQuantity" onClick={() => suma(id)}>+</button>
                                        </li>
                                        {quantity == product.stock ? <li className="err">sin stock</li> : null}
                                    </div>
                                    <div className="subtotal">
                                        <li className="dataItem">${product.price * quantity}</li>
                                        <a className="trashIcon"><ion-icon name="trash-outline"></ion-icon></a>
                                    </div>
                                </div>
                            </div>)
                    })}</>
            </div>
            <div>
                <div className="containerTotal">
                    <h className="titleTotal">Total a pagar</h>
                    <h className="titleTotal">${items.map(({ quantity, product }) => quantity * product.price).reduce((total, i) => total + i, 0)}</h>
                </div>
                <div className="subPrice">
                    <div>O hasta 6 cuotas sin interes de {(items.map(({ quantity, product }) => quantity * product.price).reduce((total, i) => total + i, 0) / 6).toFixed(2)}</div>
                    <button className="buttonQuantity starting">Iniciar compra</button>
                </div>

            </div>

        </div>
    </>
    )
}

export default Cart;
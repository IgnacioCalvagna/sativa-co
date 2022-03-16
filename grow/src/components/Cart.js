import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrCreateItemCart, deleteItemCart } from '../state/itemCart';
import '../style/Sidebar.css';

const Cart = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const cartItems = useSelector(state => state.itemCarts);

  useEffect(() => setItems(cartItems), [cartItems]);

  const suma = (product, quantity, ShoppingCartId) => {
    if (quantity >= product.stock) return;
    dispatch(
      addOrCreateItemCart({
        ShoppingCartId,
        productId: product.id,
        quantity: quantity + 1,
      })
    );
  };
  const resta = (product, quantity, ShoppingCartId) => {
    if (quantity <= 1) return;
    dispatch(
      addOrCreateItemCart({
        ShoppingCartId,
        productId: product.id,
        quantity: quantity - 1,
      })
    );
  };

  const handleDelete = id => {
    dispatch(deleteItemCart(id));
  };

  return (
    <>
      <div className='containerSidebar'>
        <div>
          <div className='titleCart'>
            <h>producto</h>
            <h>subtotal</h>
          </div>
          <>
            {items.map(({ id, quantity, product, ShoppingCartId }, i) => {
              return (
                <div key={id} className='containerCart'>
                  <div className='itemImg'>
                    <ion-icon name='leaf-outline'></ion-icon>
                  </div>
                  <div className='subContainerCart'>
                    <div>
                      <li className='dataItem'>{product.name}</li>
                      <li className='dataItem'>${product.price}</li>
                      <li className='quantityItem'>
                        <button
                          type='button'
                          className='buttonQuantity'
                          onClick={() =>
                            resta(product, quantity, ShoppingCartId)
                          }
                        >
                          -
                        </button>
                        <p className='quantity'>{quantity}</p>
                        <button
                          type='button'
                          class='buttonQuantity'
                          onClick={() =>
                            suma(product, quantity, ShoppingCartId)
                          }
                        >
                          +
                        </button>
                      </li>
                      {quantity === product.stock ? (
                        <li className='err'>sin stock</li>
                      ) : null}
                    </div>
                    <div className='subtotal'>
                      <li className='dataItem'>${product.price * quantity}</li>
                      <a className='trashIcon' onClick={() => handleDelete(id)}>
                        <ion-icon name='trash-outline'></ion-icon>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        </div>
        <div>
          <div className='containerTotal'>
            <h className='titleTotal'>Total a pagar</h>
            <h className='titleTotal'>
              $
              {items
                .map(({ quantity, product }) => quantity * product.price)
                .reduce((total, i) => total + i, 0)}
            </h>
          </div>
          <div className='subPrice'>
            <div>
              O hasta 6 cuotas sin interes de{' '}
              {(
                items
                  .map(({ quantity, product }) => quantity * product.price)
                  .reduce((total, i) => total + i, 0) / 6
              ).toFixed(2)}
            </div>
            <button className='buttonQuantity starting'>Iniciar compra</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

// useEffect(() => {
//     setItems(
//         [
//             {
//                 "id": 1,
//                 "quantity": 7,
//                 "createdAt": "2022-03-15T02:51:47.953Z",
//                 "updatedAt": "2022-03-15T03:54:43.267Z",
//                 "ShoppingCartId": 1,
//                 "productId": 1,
//                 "product": {
//                     "id": 1,
//                     "name": "Picador",
//                     "description": "Para picar con comidad, facil de llevar",
//                     "category": "Picadores",
//                     "price": "1500",
//                     "stock": 15,
//                     "img": null,
//                     "createdAt": "2022-03-15T02:51:11.865Z",
//                     "updatedAt": "2022-03-15T02:51:11.865Z"
//                 }
//             },
//             {
//                 "id": 2,
//                 "quantity": 3,
//                 "createdAt": "2022-03-15T03:57:10.397Z",
//                 "updatedAt": "2022-03-15T03:57:10.428Z",
//                 "ShoppingCartId": 1,
//                 "productId": 2,
//                 "product": {
//                     "id": 2,
//                     "name": "Macetas",
//                     "description": "Macetas de pvc reciclado en color verde",
//                     "category": "Contenedores",
//                     "price": "2500",
//                     "stock": 120,
//                     "img": null,
//                     "createdAt": "2022-03-15T02:51:11.865Z",
//                     "updatedAt": "2022-03-15T02:51:11.865Z"
//                 }
//             }
//         ]

//     )
// }, [])

// const suma = (product,quantity,ShoppingCartId) => {
//     let itemAux = items;
//     let itemsAux = [];
//     itemAux.forEach(item => {
//       if (item.id === id && item.quantity < item.quantityStock)
//         item.quantity = item.quantity + 1;
//       itemsAux.push(item);
//     });
//     setItems(itemsAux);
//   };

// axios.post(`/api/itemCart`, {
//     ShoppingCartId,
//     productId: product.id,
//     quantity: quantity + 1,})

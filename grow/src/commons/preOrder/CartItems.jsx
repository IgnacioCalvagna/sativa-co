import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import '../../style/OrderHistorial.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { persistUser } from '../../state/user';
import { getShoppingCart } from '../../state/shoppingCart';
import { getItemCart } from '../../state/itemCart';

const CartItems = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const handleOnBuy = () => {
    axios
      .post(`/api/orderDetail/createOrderDetail`, {
        UserId: user.id,
        total: shoppingCart.total,
      })
      .then(order => {
        Promise.all(
          cartItems.map(item => {
            axios.post(`/api/orderItem/add`, {
              price: item.product.price,
              quantity: item.quantity,
              productId: item.productId,
              orderdetailId: order.data.id,
            });
          })
        );
        Promise.all(
          cartItems.map(item => {
            axios.delete(`/api/itemCart/remove/${item.id}`);
          })
        )
          .then(() => {
            axios.delete(`/api/shoppingCart/${shoppingCart.id}`);
          })
          .then(() => dispatch(getShoppingCart()))
          .then(() => dispatch(getItemCart()));
        navigate(`/orderDetails/${order.data.id}`);
      });
  };

  const shoppingCart = useSelector(state => state.shoppingCart);
  const cartItems = useSelector(state => state.itemCarts);

  console.log(cartItems);

  return cartItems ? (
    <div className=''>
      <Table bordered hover>
        <tbody>
          <div class=''>
            {cartItems.map((item, i) => (
              <div className='orderContainer3'>
                <div className=''>
                  <img
                    class='order-card-img'
                    alt=''
                    src={item.product.img[0]}
                  />
                  <Link to={`/product/${item.productId}`}>
                    {item.product.name}
                  </Link>
                </div>
                <div className='orderContainer2'>
                  <div>Qty: {item.quantity}</div>
                  <div>Unit Price: $ {item.product.price}</div>
                  <div>
                    Price: ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </tbody>
      </Table>
      <button className="buttonComment buttonn" onClick={handleOnBuy}>Continue</button>
    </div>
  ) : null;
};
export default CartItems;

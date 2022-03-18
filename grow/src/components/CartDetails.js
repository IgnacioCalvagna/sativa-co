import FakeOrders from '../utils/FakeOrders.js';
import CartDetailsHeader from '../commons/preOrder/CartDetailsHeader';

import '../style/OrderHistorial.css';

import {useSelector } from 'react-redux';


const CartDetails = () => {
  const shoppingCart = useSelector(state => state.shoppingCart);

  return shoppingCart.id ? (
    <div className='orderContainer4'>
      <CartDetailsHeader />
    </div>
  ) : null;
};

export default CartDetails;

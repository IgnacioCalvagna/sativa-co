import { useSelector } from 'react-redux';
import '../../style/CardOrderDetail.css';
import '../SingleProduct.css';
import CartItems from './CartItems';

const CartDetailsHeader = () => {
  const shoppingCart = useSelector(state => state.shoppingCart);

  return shoppingCart.id ? (
    <div className='orderContainer2'>
      <h5 className=''>ShoppingCart</h5>
      <div className=''>
        <div>
          <div>Total Price: $ {shoppingCart.total}</div>
          <div>Order Date: {shoppingCart.updatedAt}</div>
        </div>
      </div>

      <div className='orderContainer2'>
        <CartItems />
      </div>
    </div>
  ) : null;
};

export default CartDetailsHeader;

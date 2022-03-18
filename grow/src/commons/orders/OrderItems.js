import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import '../../style/OrderHistorial.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

const OrderItems = () => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate('/');
  };

  const { id } = useParams();

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    console.log('soy el id del useEffect', id);
    axios.get(`/api/orderItem/getAll/${id}`).then(res => {
      setOrderItems(res.data);
    });
  }, []);

  console.log('soy tu orderItemsssss', orderItems);

  return orderItems[0] ? (
    <div className=''>
      <Table bordered hover>
        <tbody>
          <div class=''>
            {orderItems.map((item, i) => (
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
                  <div>
                    Price: ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </tbody>
      </Table>
      <button onClick={handleBuy}>Checkout</button>
    </div>
  ) : null;
};

export default OrderItems;

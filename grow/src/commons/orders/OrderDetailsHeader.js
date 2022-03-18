import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import '../../style/CardOrderDetail.css';
import '../SingleProduct.css';
import OrderItems from './OrderItems';

const OrderDetailsHeader = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();

  const user = useSelector(state => state.user);

  const [order, setOrder] = useState({});

  useEffect(() => {
    axios
      .get(`/api/orderDetail/getorder/${id}`)
      .then(res => setOrder(res.data));
  }, []);

  return order ? (
    <div className='orderContainer2'>
      <h5 className=''>Order ID : {order.id}</h5>

      <div className=''>
        <div>
          <div>Total Price: $ {parseInt(order.total).toFixed(2)}</div>
          <div>Order Date: {order.createdAt}</div>
        </div>
      </div>
      <div className='orderContainer2'>
        <OrderItems/>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default OrderDetailsHeader;

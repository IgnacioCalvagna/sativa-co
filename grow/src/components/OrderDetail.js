
import FakeOrders from "../utils/FakeOrders.js";
import CardOrderDetail from '../commons/CardOrderDetail';

import "../style/OrderHistorial.css";

const OrderDetail = () => {
    
  return (
    <div className='orderContainer4'>
              <CardOrderDetail data={FakeOrders} />
    </div>
  );
};

export default OrderDetail;
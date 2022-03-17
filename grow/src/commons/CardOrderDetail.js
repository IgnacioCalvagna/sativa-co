import "../style/CardOrderDetail.css";
import './SingleProduct.css';
import OrderItem from "../commons/OrderItem"

const CardOrderDetail = ({ data }) => {
  return (
    <div className="orderContainer2" >
      <div className='' >
        <div className=''>
            <h5 className="">Order ID: {data.order_id}</h5>
            <div className="">
              <div>
                <div>Total Price: {data.payment_id}</div>
                <div>Status Order:{data.status}</div>
                <div>Order Date: {data.created_at}</div>
              </div>
        </div>
        </div>
    </div>
        <div className='orderContainer2'>
        <OrderItem data={data} />
        </div>
        </div>
  );
};

export default CardOrderDetail;

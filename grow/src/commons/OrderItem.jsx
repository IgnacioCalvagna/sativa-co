//sin usar
import { Link } from "react-router-dom";

import "../style/OrderHistorial.css";

const OrderItem = ({ data }) => {
  return (
    <div className="order">
      <div className="">
        <div className="orderContainer">
            <div className="orderContainer2">
              <div>
              <img class="order-card-img" src={data.img} />
              </div>
              <div class="order-text2">
          <Link to={`/product/${data.id}`}>
                <div >{data.name}</div>
          </Link>
                <div >Qty: {data.quantity}</div>
                <div >$.{data.payment}</div>
                <div >Date: {data.created_at}</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

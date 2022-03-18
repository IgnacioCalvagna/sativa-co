// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import FakeOrders from "../utils/FakeOrders.js";
import OrderItemHistory from "../commons/OrderItemHistory"

import "../style/OrderHistorial.css";

const OrderHistorial = () => {
    const datas = FakeOrders
  return (
    <div classname="">
            <div className="">
              <div className="order-title">Order Historial</div>

              <div className="orderContainer">

              {datas.map((data, i) => (
                  <OrderItemHistory data={data} key={i} id={i}/>
              ))}
            </div>
    </div>
    </div>
  );
};

export default OrderHistorial;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import FakeOrders from "../utils/FakeOrders.js";
import OrderItem from "../commons/OrderItem"

import "../style/OrderHistorial.css";

const OrderHistorial = () => {
    const datas = FakeOrders
  return (
    <div classname="">
            <div className="">
              <div className="order-title">Order Historial</div>

              <div className="">

              {datas.map((data, i) => (
                  <OrderItem data={data}/>
              ))}
            </div>
    </div>
    </div>
  );
};

export default OrderHistorial;



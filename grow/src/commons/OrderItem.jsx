//sin usar
import { Accordion, Button, Card, Jumbotron } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import FakeOrderItems from "../utils/FakeOrderItems.js";

import "../style/OrderHistorial.css";

const OrderItem = ({ data }) => {
  const datas2 = FakeOrderItems;
  return (
    <div className="orderContainer">
      <Table bordered hover>
        <tbody>
          <h2 class="accordion-header" id={data.id}>
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div classname="orderContainer3">
                <div class="accordion" id={data.id}>
                  <a></a>
                  <a>Order N. {data.order_id}  |</a>
                  <a>| $.{data.payment_id} |</a>
                  <a>|  Date: {data.created_at}</a>
                </div>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="">
              {datas2.map((data2, i) => (
                <div className="orderContainer3">
                <div className="">
                  <img class="order-card-img" src={data2.images} />
                  <Link to={`/product/${data2.product_id}`}>{data2.name}</Link>
                </div>
                <div className="orderContainer2">
                  <div>Qty: {data2.quantity}</div>
                  <div>Price: {(data2.name * data2.quantity)}</div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderItem;

{
  /* <img class="order-card-img" src={data.img} /> */
}

import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import FakeOrderItems from '../utils/FakeOrderItems.js';

import '../style/OrderHistorial.css';

const OrderItem = ({ data, id }) => {
  const datas2 = FakeOrderItems;
  return (
    <div className=''>
      <Table bordered hover>
        <tbody>
          <button className='btn btn-'>Modificar</button>
          <h2 class='accordion-header'>
            <button
              class='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#collapse${id}`}
              aria-expanded='true'
              aria-controls={`collapse${id}`}
            >
              <div classname='orderContainer3'>
                <div class='accordion'>
                  <span>Order N. {data.order_id} |</span>
                  <span>| $.{data.payment_id} |</span>
                  <span>| Date: {data.created_at}</span>
                </div>
              </div>
            </button>
          </h2>
          <div
            id={`collapse${id}`}
            class='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div class=''>
              {datas2.map((data2, i) => (
                <div className='orderContainer3'>
                  <div className=''>
                    <img class='order-card-img' alt='' src={data2.images} />
                    <Link to={`/product/${data2.product_id}`}>
                      {data2.name}
                    </Link>
                  </div>
                  <div className='orderContainer2'>
                    <div>Qty: {data2.quantity}</div>
                    <div>Price: ${data2.price * data2.quantity}</div>
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

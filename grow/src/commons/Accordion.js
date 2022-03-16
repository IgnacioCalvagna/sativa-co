
      <div class="accordion" id="accordionExample">
      <td></td>
      <td>{data.id}</td>
      {/* <td>{data.quantity}</td> */}
      <td>$.{data.payment}</td>
      <td>{data.created_at}</td>
    </div>







<Table bordered hover>
        <thead>
          <th></th>
          <th>Order ID</th>
          {/* <th>Quantity</th> */}
          <th>Total Price</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr
            data-toggle="collapse"
            data-target="#001"
            class="accordion-toggle"
          >
            <td><img src={data.img} className="order-card-img"></img></td>
            <td>{data.id}</td>
            <td>$.{data.payment}</td>
            <td>{data.created_at}</td>
          </tr>
          <tr>
            <td colspan="3" class="hiddentablerow">
              <div class="accordian-body collapse" id="001">
                Hidden by default
                asdasd
                asdasd
              </div>
            </td>
          </tr>
        </tbody>
      </Table>











<thead>
<th class="">Order</th>
<th class="">Total</th>
<th class="">Date</th>
</thead>

<tbody >
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <div class="accordion" id="accordionExample">
<td></td>
<td>{data.id}</td>
<td>$.{data.payment}</td>
<td>{data.created_at}</td>
</div>
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class=""> 
{data.id}
$.{data.payment}
{data.created_at}
    </div>
  </div>
</tbody>











<Table bordered hover>
<thead>
  <tr>
    <th></th>
    <th>Order ID</th>
    {/* <th>Quantity</th> */}
    <th>Total Price</th>
    <th>Date</th>
  </tr>
</thead>
<tbody>
  <td></td>
  <td>{data.id}</td>
  {/* <td>{data.quantity}</td> */}
  <td>$.{data.payment}</td>
  <td>{data.created_at}</td>
</tbody>
</Table>
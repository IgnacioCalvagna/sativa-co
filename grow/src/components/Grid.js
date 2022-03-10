import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../commons/Card";
import FakeData from "../utils/FakeData"

const Grid = (props) => {
  const products =  FakeData
    console.log("soy card", Card);
  return (
    <div classname="container d-flex justify-content-center mt-50 mb-50">    
    <div className="row">
       <div class="row">
      {products.map((data, i) => (
        <div className="col-md-4 mt-2" key={i}>
          <Link to={`/products`}>
          <Card data={data} />
          </Link>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default Grid;



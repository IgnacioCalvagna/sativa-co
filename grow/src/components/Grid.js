import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../commons/Card";
import FakeData from "../utils/FakeData"

const Grid = (props) => {
  const products =  FakeData
    console.log("soy card", Card);
  return (
    <div className="columns">
      {products.map((data, i) => (
        <div className="column" key={i}>
          <Link to={`/products`}>
          <Card data={data} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Grid;



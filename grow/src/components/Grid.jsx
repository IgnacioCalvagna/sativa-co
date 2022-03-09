import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../commons/Card.jsx";

const Grid = (props) => {
  const { type } = useParams();
  const products = props[type];
  return (
    <div className="columns">
      {products.map((data, i) => (
        <div className="column" key={i}>
          <Link to={`/products/${type}/${data.id}`}>
          <Card data={data} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Grid;
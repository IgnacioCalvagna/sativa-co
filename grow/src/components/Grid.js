import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '../commons/Card';
import FakeData from '../utils/FakeData';

const Grid = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product/').then(res => setProducts(res.data));
  }, []);

  return (
    <div classname='container d-flex justify-content-center mt-50 mb-50'>
      <div className='row'>
        <div class='row'>
          {products?.map((data, i) => (
            <div className='col-md-4 mt-2' key={i}>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;

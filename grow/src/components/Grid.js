import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../commons/Card';

const Grid = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product/').then(res => setProducts(res.data));
  }, []);

  return (
    <div className='container d-flex justify-content-center mt-50 mb-50'>
      <div className='row'>
          {products.map((data, i) => (
            <div className='col-md-4 mt-2' key={i}>
              <Card data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Grid;

// import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import axios from 'axios';
import Grid from './Grid'

import Navbar from './Navbar';
import SingleProduct from '../commons/SingleProduct.jsx';
import { persistUser } from '../state/user';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(persistUser());
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => res.data)
      .then((products) => setProducts(products.items));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Routes>
      <Route
            path="/products"
            element={
              <Grid products={products}/>
            }
          />
          <Route path='/' element={<> hola como andas</>}></Route>

          <Route path='/products/:id' element={<SingleProduct/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;




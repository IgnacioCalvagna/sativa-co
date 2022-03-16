// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import axios from 'axios';
import Grid from './Grid';
import CarouselComponent from './Carousel';
import Navbar from './Navbar';
import Footer from './Footer';
import { persistUser } from '../state/user';
import { getShoppingCart } from '../state/shoppingCart';

import SingleProduct from '../commons/SingleProduct.jsx';
import { getItemCart } from '../state/itemCart';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(persistUser());
  }, []);

  useEffect(() => {
    dispatch(getShoppingCart()).then(() => dispatch(getItemCart()));
  }, [user.id]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('/api/product/')
      .then(res => res.data)
      .then(products => setProducts(products.items));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      {/* <div className="container"> */}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <CarouselComponent />
              <div className='container'>
                <Grid />
              </div>
            </>
          }
        />
        <Route path='/product/:id' element={<SingleProduct />} />
      </Routes>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;

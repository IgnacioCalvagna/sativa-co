// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import axios from 'axios';
import Grid from './Grid';
import CarouselComponent from './Carousel';
import Navbar from './Navbar';
import Footer from './Footer';
import { persistUser } from '../state/user';
import { getShoppingCart } from '../state/shoppingCart';

import OrderItem from '../commons/OrderItem.jsx';
import SingleProduct from '../commons/SingleProduct.jsx';
import AdminUsers from './AdminUsers';
import AdminOrders from './AdminOrders';
import AdminProducts from './AdminProducts';
import NewProductForm from './NewProductForm';
import EditProductForm from './EditProductForm';
import { getItemCart } from '../state/itemCart';
import OrderHistorial from './OrderHistorial';
import OrderDetail from './OrderDetail';
import FilterSearch from './FilterSearch';
import NotFound from './NotFound';
import AdminCategories from './AdminCategories';
import NewCategForm from './NewCategForm';
import EditCategForm from './EditCategForm';

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
    axios.get('/api/product/').then(res => setProducts(res.data));
  }, []);

  return (
    <div className='App'>
      <Navbar setProducts={setProducts}/>
      {/* <div className="container"> */}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <CarouselComponent />
              <div className='container'>
                <Grid products={products}/>
              </div>
            </>
          }
        />
        <Route path='/products/popular' element={<FilterSearch products={products}/>} />
        <Route path='/orders/history' element={<OrderHistorial />} />
        <Route path='/orders/item/:id' element={<OrderItem />} />
        <Route path='/order/detail/:id' element={<OrderDetail />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        {user.roleId === 2 ? (
          <>
            <Route path='/admin/users' element={<AdminUsers />} />
            <Route path='/admin/orders' element={<AdminOrders />} />
            <Route path='/admin/products' element={<AdminProducts />} />
            <Route
              path='/admin/products/new-product'
              element={<NewProductForm />}
            />
            <Route
              path='/admin/products/edit/:id'
              element={<EditProductForm />}
            />
            <Route path='/admin/categories' element={<AdminCategories/>}/>
            <Route
              path='/admin/categories/new-category'
              element={<NewCategForm />}
            />
            <Route
              path='/admin/categories/edit/:id'
              element={<EditCategForm />}
            />
          </>
        ) : null}
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;

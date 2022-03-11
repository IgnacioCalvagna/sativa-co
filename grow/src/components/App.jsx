// import logo from './logo.svg';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import Grid from "./Grid";
import CarouselComponent from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { persistUser } from "../state/user";

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
    <div className="App">
      <Navbar />
      {/* <div className="container"> */}
        <Routes>
          <Route path="/products" element={<>Productos</>} />
          <Route
            path="/"
            element={
              <>
                <CarouselComponent/>
                <div className="container">
                <Grid products={products} />
                </div>
              </>
            }
          ></Route>
        </Routes>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;

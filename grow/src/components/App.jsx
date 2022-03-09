// import logo from './logo.svg';
import './assets/css/App.css';
import { useEffect , useState} from "react";
import {  Route, Routes } from "react-router";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
import Grid from "./Grid.jsx";
import axios from "axios";

function App() {
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
    <div className="container">
      <Routes>
      <Route
            path="products/:type"
            element={
              <Grid products={products}/>
            }
          />
        <Route path="/products" element={<Content />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;






// import logo from './logo.svg';
import {useDispatch} from 'react-redux'
import { useEffect , useState} from "react";
import {  Route, Routes } from "react-router";
import axios from "axios";

import Navbar from "./Navbar";
/* import Content from "./Content"; */
import persistUser from "../state/user"


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(persistUser)
  },[])

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
        {/* <Route path="/products" element={<Content />} /> */}
      </Routes>
    </div>
    </div>
  );
}

export default App;
import { Accordion } from "react-bootstrap";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import axios from "axios";

import "../style/FilterSearch.css";

const FilterSearch = ({  }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [checkedState, setCheckedState] = useState("");
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("/api/category/getAll")
      .then(({ data }) => {
        setAllCategories(data);
        console.log(`categories es`, data);
        return data;
      })
 
  }, []);

  const handleOnChangeCheck = (e) => {
 
    console.log(`event taget value es`, e.target.value)
    let categId = e.target.value
    
    axios.get(`/api/product/category/${categId}`).then(res=>setProducts(res.data))

    setCheckedState(e.target.value)
    console.log(checkedState)
  };

  useEffect(() => {
    axios.get('/api/product/').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="filterContainer1">
      <div className="filterAccordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>
            <form>
              {allCategories.map((category) => {
                return (
                  <div>
                    <input
                      type="radio"
                      name={category.name}
                      value={category.id}
                      checked={checkedState==category.id}
                      id={category.name}
                      // checked={checkedState[category.id]}
                      onChange={handleOnChangeCheck}
                    />
                    <label style={{ marginLeft: "6px" }}>{category.name}</label>
                  </div>
                );
              })}
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <div className="pagination">
          <span>
            {products.length} Result(s) found
          </span>
          {/* <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div> */}
        </div>
        <Grid products={products} />
      </div>
    </div>
  );
};

export default FilterSearch;

import { Accordion } from "react-bootstrap";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import axios from "axios";

import "../style/FilterSearch.css";

const FilterSearch = ({ products }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [checkedState, setCheckedState] = useState({categ: ''});

  useEffect(() => {
    axios
      .get("/api/category/getAll")
      .then(({ data }) => {
        setAllCategories(data);
        console.log(`categories es`, data);
        return data;
      })
      // .then((categories) => {
      //   console.log(`categories es`, data);
      //   // let auxObj = {};
      //   // categories.forEach((categObj) => {
      //   //   auxObj[categObj.id] = false;
      //   // });
      //   // console.log(`auxobj es`, auxObj);
      //   // setCheckedState(auxObj);
      // });
  }, []);

  const handleOnChangeCheck = (e) => {
    // const updatedCheckedState = { ...checkedState };
    // console.log(`1`, updatedCheckedState);
    // for (const property in updatedCheckedState) {
    //   if (property == categ) {
    //     updatedCheckedState[categ] = !updatedCheckedState[categ];
    //   } else updatedCheckedState[categ] = false;
    // }
    // setCheckedState(updatedCheckedState);
    // console.log(`2`, updatedCheckedState);

    setCheckedState({categ: e.target.value})
    console.log(checkedState)
    // axios.get("/api/product/");
  };

  return (
    <div className="filterContainer1">
      <div className="filterAccordion">
        {/* <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body> */}
              {allCategories.map((category) => {
                return (
                  <div>
                    <input
                      type="radio"
                      name={category.name}
                      value={category.id}
                      // checked={checkedState[category.id]}
                      onChange={handleOnChangeCheck}
                    />
                    <label style={{ marginLeft: "6px" }}>{category.name}</label>
                  </div>
                );
              })}
            {/* </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      </div>
      <div>
        <div className="pagination">
          <span>
            {} Result(s) found for {}
          </span>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
        <Grid products={products} />
      </div>
    </div>
  );
};

export default FilterSearch;

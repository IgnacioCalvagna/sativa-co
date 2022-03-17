import { Accordion } from "react-bootstrap";
import Grid from "./Grid";

import "../style/FilterSearch.css";

const FilterSearch = () => {
  return (
    <div className="filterContainer1">
      <div className="filterAccordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>
                <div>
                <input type="checkbox" />{" "}
                <label style={{marginLeft:"6px"}}>Macetas</label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
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
        <Grid />
      </div>
    </div>
  );
};

export default FilterSearch;

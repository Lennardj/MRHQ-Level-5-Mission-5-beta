import style from "../../styles/Main.module.css";
import { useState } from "react";
function FilterForm() {
  const input = document.getElementById("pi_input");
  const value = document.getElementById("priceoutput");
  // the selected value of the range
  const [rangeValue, setSetRangeValue] = useState(5000);

  // This function is called when the first range slider changes
  const getRangeValue = (event) => {
    setSetRangeValue(event.target.value);
    value.textContent = rangeValue;
    console.log(rangeValue);
  };

  return (
    <div className={style.filterForm}>
      <div className={style.left}>
        <div className={style.filterItem}>
          <p>Price</p>
          <input
            id="pi_input"
            type="range"
            min="0"
            max="10000"
            step="500"
            onChange={getRangeValue}
          />
          <p>
            $<span id="priceoutput">{rangeValue && "777"}</span>
          </p>
        </div>
        <div className={style.filterItem}>
          <p>Brand</p>
          <input type="range" />
          <br />
          <input type="range" />
          <br />
          <input type="range" />
        </div>
        <div className={style.filterItem}>
          <p>Processor</p>
          <input type="range" />
          <br />
          <input type="range" />
          <br />
          <input type="range" />
        </div>
        <div className={style.filterItem}>
          <p>Memor (RAM)</p>
          <input type="range" />
          <p>- 88 GB</p>
        </div>
        <div className={style.filterItem}>
          <p>Screen Size</p>
          <input type="range" />
          <p>- 8 "INCH</p>
        </div>
        <div className={style.filterbtnContainer}>
          <p>Show more filters</p>
          <div className={style.filterbtn}>
            <button className={`${style.filterButton1} ${style.filterButton}`}>
              Clear Filter
            </button>
            <button
              type="button"
              className={`${style.filterButton2} ${style.filterButton}`}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <hr className={style.line} />
      </div>
    </div>
  );
}
export default FilterForm;

import style from "../../styles/Main.module.css";
import { useState } from "react";
function FilterForm() {
  return (
    <div className={style.filterForm}>
      <div className={style.left}>
        <div className={style.filterItem}>
          <p>Price</p>
          <input id="pi_input" type="range" min="0" max="3.14" step="any" />
          <p>- $777</p>
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
          <p>- 88 "INCH</p>
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

import style from "../../styles/Main.module.css";
import businesslaptops from "../../images/Businesslaptops.png";
import { Link } from "react-router-dom";
function Tracker(params) {
  return (
    <div className={style.Tracker}>
      <div>
        <ul>
          <Link>
            <li>Home</li>
          </Link>
          <li>Computer & Tablet</li>
          <Link to="/laptops">
            <li>Laptops</li>
          </Link>
        </ul>
        <img src={businesslaptops} alt="placeholder" />
      </div>
      <div className={style.sort}>
        <h3>SORT BY</h3>
        <input />
      </div>
    </div>
  );
}
export default Tracker;

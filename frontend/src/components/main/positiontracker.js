import style from "../../styles/Main.module.css";
import businesslaptops from "../../images/Businesslaptops.png";
import { Link, useLocation } from "react-router-dom";
function Tracker(params) {
  const location = useLocation();
  return (
    <div className={style.Tracker}>
      <div>
        {location.pathname === "/" && (
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>{" "}
          </ul>
        )}
        {location.pathname === "/laptops/" && (
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="">
              <li>Computer & Tablet </li>
            </Link>
            <Link to="/laptops">
              <li>Laptops</li>
            </Link>
          </ul>
        )}
        {/* create a new conditional rendering for the single laptop page */}

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

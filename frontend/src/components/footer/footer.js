import Info from "./info";
import Icon from "./icon";
import style from "../../styles/Footer.module.css";
function Footer() {
  return (
    <div className={style.Footer}>
      <Info />
      <Icon />
    </div>
  );
}
export default Footer;

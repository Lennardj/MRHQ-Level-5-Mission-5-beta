import style from "../../styles/Header.module.css";
import DarkStrip from "./darkstrip";
import Search from "./logo&search&signin";
import Navbar from "./navbar";
import pb from "../../images/PB.png";
import tech from "../../images/TECH.png";

function Header() {
  return (
    <nav className={style.headerContainer}>
      <DarkStrip />
      <Search pb={pb} tech={tech} />
      <Navbar />
    </nav>
  );
}
export default Header;

import * as tiIcon from "react-icons/ti";
import * as bsIcon from "react-icons/bs";
import style from "../../styles/Footer.module.css";
export default function Icon() {
  return (
    <div className={style.footericon}>
      <hr></hr>
      <div className={style.icon}>
        <tiIcon.TiSocialTwitterCircular className={style.child} />
        <bsIcon.BsFacebook className={style.child} />
        <bsIcon.BsInstagram className={style.child} />
        <tiIcon.TiSocialLinkedinCircular className={style.child} />
      </div>
      <p>Copyright. All rights reserved.</p>
    </div>
  );
}

import style from "../../styles/Header.module.css";

export default function Search(props) {
  return (
    <div className={style.logoSearchBar}>
      <div className={style.logoImgContainer}>
        <img
          className={style.logoImgOne}
          src={props.pb}
          alt="PB of the PB tech logo"
        />
        <img
          className={style.logoImgTwo}
          src={props.tech}
          alt="Tech of the PB tech logo"
        />
      </div>
      <form className={style.form}>
        <input
          className={style.headerSearchBox}
          type="search"
          placeholder="Enter the name of the laptop"
        />
        <button type="submit">Search</button>
      </form>
      <div className={style.headerBtnContainer}>
        {/* Create a sign in and create account modal */}
        <button className={`${style.btn1} ${style.btns} btn`}>Sign in</button>
        <button className={`${style.btn2} ${style.btns} btn`}>
          create account
        </button>
      </div>
    </div>
  );
}

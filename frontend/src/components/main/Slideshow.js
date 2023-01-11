import style from "../../styles/Main.module.css";
import { useState, useEffect, useRef } from "react";
function Slideshow() {
  const images = [
    "/images/laptopimage.png",
    "/images/laptopimage.png",
    "/images/laptopimage.png",
  ];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={style.slideshowContainer}>
      <h3>PRODUCTS RECOMMENDED FOR YOU</h3>
      <div className={style.slideshow}>
        <div
          className={style.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((imageurl, index) => (
            <img className={style.slide} src={imageurl} alt="laptop image" />
          ))}
        </div>
      </div>
      <div className={style.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`${style.slideshowDot} ${
              index === idx ? style.active : "hi"
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

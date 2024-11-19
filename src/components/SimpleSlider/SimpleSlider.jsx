import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SimpleSlider.module.scss';
import './SimpleSlider.css';
import Slider from "react-slick";
import { useRef, useState } from "react";

export default function SimpleSlider(props) {

  let list_slides = props.list_slides;
  let baseUrl = props.baseUrl;
  
  let sliderRef = useRef(Number(0));
  const [updateCount, setUpdateCount] = useState(1);

  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <img onClick={onClick} className={styles.prevArrow} src={baseUrl + 'prevArrow.png'} alt="prev-arrow" />
    );
  }

  function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <img onClick={onClick} className={styles.nextArrow} src={baseUrl + 'nextArrow.png'} alt="next-arrow" />
    );
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 50,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (evt) => checkCount(evt) ,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  function checkCount(evt){
    setUpdateCount((prev) => prev = evt+1);
  }

  function slickGoTo(evt){
    sliderRef.slickGoTo(evt.target.value);
  }

  return (
    <div className={styles.SimpleSlider}>
      <p className={styles.slideIndex}>{updateCount}/{list_slides.length} </p>
      <input
        className={styles.input}
        onChange={(evt) => slickGoTo(evt)}
        value={updateCount}
        type="range"
        min={0}
        max={list_slides.length}
      />
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {
          list_slides.map((slide) =>
            <div key={slide} className={styles.sliderCard}>
              <img src={baseUrl + '067-discount.png'} className={styles.sliderCardImg} alt="картинка 404 ошибки" />
              <p className={styles.sliderCardText}>
                Индивидуальные скидки в зависимости от объема покупки
              </p>
            </div>
          )
        }
      </Slider>
    </div>
  );
}

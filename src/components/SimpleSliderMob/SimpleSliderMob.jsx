import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SimpleSliderMob.module.scss';
import './SimpleSliderMob.css';
import Slider from "react-slick";
import { useRef, useState } from "react";

export default function SimpleSliderMob(props) {

  let list_slides = props.list_slides;
  let baseUrl = props.baseUrl;
//   let number_slide_random = Math.floor(Math.random() * (list_slides.length - 0) + 0);
  
  let sliderRef = useRef(Number(0));
  const [slideIndex, setSlideIndex] = useState(1);
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (evt) => checkCount(evt) ,
    beforeChange: (next) => setSlideIndex(next),
  };
  function checkCount(evt){
    setUpdateCount(evt+1);
  }

  function slickGoTo(evt){
    console.log(evt.target.value);
    sliderRef.slickGoTo(evt.target.value);
  }

  console.log(sliderRef);

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
          list_slides.map((index, slide) =>
            <div key={slide} className={styles.sliderCard}>
              <img src={baseUrl + '067-discount.png'} className={styles.sliderCardImg} alt="картинка 404 ошибки" />
              <p className={styles.sliderCardText}>
                Индивидуальные скидки в зависимости от объема покупки
              </p>
              {/* {index} */}
            </div>
          )
        }
      </Slider>
    </div>
  );
}

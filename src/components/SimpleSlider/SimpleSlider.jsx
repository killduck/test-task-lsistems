import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SimpleSlider.module.scss';
import './SimpleSlider.css';
import Slider from "react-slick";
import { useState } from "react";

export default function SimpleSlider(props) {

  let list_slides = props.list_slides;
  let baseUrl = props.baseUrl;
  
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
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (evt) => checkCount(evt) ,
    variableWidth: true,
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

  function makeProgress(){
    if(list_slides.length !== 0){
      let result = (100 / list_slides.length) * updateCount;
      return `${result}%`;
    }
    return '0%';
  }
  return (
    <div className={styles.SimpleSlider}>
      <p className={styles.slideIndex}>{updateCount}/{list_slides.length} </p>
      <div 
        className={styles.progressBar} 
        style={{ background: `linear-gradient(to right, #1946BA ${makeProgress()} , #DEDEDE 0%)`}}
      />
      <Slider
        {...settings}
      >
        {
          list_slides.map((slide) =>
            <div key={slide} className={styles.sliderCard} style={{ width: '295px'}}>
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

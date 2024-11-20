import SimpleSlider from '../SimpleSlider/SimpleSlider';
import styles from './LittleBitAboutUs.module.scss';

export default function LittleBitAboutUs(props){

  let list_slides = [
    {"name": "1.png"},
    {"name": "2.png"},
    {"name": "3.png"},
    {"name": "4.png"},
  ];

  return (
    <div className={styles.LittleBitAboutUsWrap}>
      
      <div className={styles.descriptionWrap}>
        <h2 className={styles.descriptionTitle}>Немного о нас</h2>
        <p className={styles.descriptionText}>
          ООО "Эльбрусская прохлада"- отптовые продажи безалкогольных напитков от производителя.Широкий ассортимент лимонадов,минеральной воды,разных сементов.Артезианская питьевая вода,добывается из скважины глубиной 230 м. Автоматизированная система розлива исключает любые загрязнения в процессе производства, а отсутствие поблизости крупных предприятий и сельхозугодий гарантирует чистоту добываемой воды. 
        </p>
      </div>

      <div className={styles.sliderWrap}>
        {list_slides.length > 0 &&
          <SimpleSlider
            className={styles.simpleSlider}
            list_slides={list_slides}
            baseUrl={'/test/'}
          />
        }
      </div>

    </div>
  )
};

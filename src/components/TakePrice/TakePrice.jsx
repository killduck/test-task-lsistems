import Form from '../Form/Form';
import styles from './TakePrice.module.scss';

export default function TakePrice(props){
  return (
    <div className={styles.takePrice}>

      <div className={styles.logoWrap}>
        <div className={styles.logoBackground}>
          <img src={'test/Group.png'} className={styles.logoImg} alt="логотип" />
          <h3 className={styles.logoTitle}>Получить оптовый прайс</h3>
          <span className={styles.logoText}>Оставьте заявку и получите прайс на почту</span>
        </div>
      </div>

      <Form />

    </div>
  )
};



import LittleBitAboutUs from '../components/LittleBitAboutUs/LittleBitAboutUs';
import TakePrice from '../components/TakePrice/TakePrice';
import styles from './Default.module.scss';

export default function Default(props){
  return (
    <div className={styles.default}>
   
      <LittleBitAboutUs></LittleBitAboutUs>

      <TakePrice></TakePrice>
      
      {props.children}

    </div>
  )
};


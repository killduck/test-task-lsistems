import { useState } from 'react';
import styles from './Form.module.scss';

export default function Form(props){

  let [form, setForm] = useState({ username: null, email: null });
  const [fieldName, setFieldName] = useState("");
  const [fieldEmail, setFieldEmail] = useState("");

  const [invalidValueName, setInvalidValueName] = useState('');
  const [invalidValueEmail, setInvalidValueEmail] = useState('');

  function writeName(evt) {
    setFieldName((prev) => prev = evt);
  }
  
  function writeEmail(evt) {
    setFieldEmail((prev) => prev =  evt);
  }

  function check_name(re_name) {
    if (re_name.test(fieldName) && fieldName.length >= 2) {
      setForm(form = {username: fieldName, email: null });
    }
    else {
      setInvalidValueName('linear-gradient(to right, #fff , #f00 100%)');
    }
  }

  function check_email(re_email) {
    if (re_email.test(fieldEmail) && fieldEmail.length >= 5) {
      setForm(form = {username: fieldName, email: fieldEmail });
    }
    else {
      setInvalidValueEmail('linear-gradient(to right, #fff , #f00 100%)');
    }
  }

  function sendForm(){
    const re_name = /^\S{2,}$/;
    const re_email = /@/;

    if(fieldName){
      check_name(re_name);
    }
    if (fieldEmail) {
      check_email(re_email);
    }

    if (form.username && form.email) {
      console.log('тут делаем реквест');
      setFieldName("");
      setFieldEmail("");
      setInvalidValueName("");
      setInvalidValueEmail("");
      setForm({ username: null, email: null });
    }
  }

  return (
    <div className={styles.formWrap}>
      <form action="/take_data" method="post" id="form-price" className={styles.form} name="form-price">
        <div className={styles.inputName}>
          <input
            id="username"
            type="text" 
            name="username"
            placeholder="Имя"
            required="required"
            value={(fieldName) ? fieldName : ""}
            onChange={(evt) => writeName(evt.target.value)}
            style={{background: invalidValueName}}
          ></input>
        </div>

        <div className={styles.inputEmail}>
          <input
            id="useremail"
            type="text" 
            name="useremail"
            placeholder="E-mail"
            required="required"
            value={(fieldEmail) ? fieldEmail : ""}
            onChange={(evt) => writeEmail(evt.target.value)}
            style={{background: invalidValueEmail}}
          ></input>
        </div>

        <div className={styles.formSubmit}>
          <button 
            id="form_submit" 
            type="button"
            name="form-submit"
            className={''} 
            onClick={sendForm}
          >
            Отправить
          </button>
        </div>
      
    </form>
    </div>
  )
};

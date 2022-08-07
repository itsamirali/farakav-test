import { useState } from "react";
import MyDatePicker from "./CusotmComponents/DatePicker/MyDatePicker";
import InputAndLabel from "./CusotmComponents/InputAndLabel/InputAndLabel";
import styles from "./Register.module.css";

const Register = () => {
  const [date, setDate] = useState(undefined);
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>ثبت نام در مسابقه</h2>
      <form className={styles.formStyles} onSubmit={submitHandler}>
        <InputAndLabel
          label="نام و نام خانوادگی"
          inputId="fullName"
          type="text"
          placeholder="مثلا: محسن احمدی"
        />
        <InputAndLabel
          label="ایمیل"
          inputId="email"
          type="email"
          placeholder="مثلا: test@test.com"
        />
        <MyDatePicker
          setDate={setDate}
          date={date}
          label="تاریخ تولد"
        />
        <InputAndLabel
          label="شماره همراه"
          inputId="phoneNumber"
          type="text"
          placeholder="مثلا: ۰۹۱۲۱۲۳۴۵۶۷"
        />
        <div className={styles.submitContainer}>
        <input className={styles.submitBtnStyle} type="submit" value="ثبت نام" />
        </div>
      </form>
    </div>
  );
};

export default Register;

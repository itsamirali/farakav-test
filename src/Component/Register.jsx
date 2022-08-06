import React from "react";
import InputAndLabel from "./CusotmComponents/InputAndLabel/InputAndLabel";
import JalaliDatePicker from "./CusotmComponents/JalaliDatePicker/JalaliDatePicker";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>ثبت نام در مسابقه</h2>
      <form className={styles.formStyles}>
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
        <JalaliDatePicker />
        <InputAndLabel
          label="شماره همراه"
          inputId="phoneNumber"
          type="text"
          placeholder="مثلا: ۰۹۱۲۱۲۳۴۵۶۷"
        />
      </form>
    </div>
  );
};

export default Register;

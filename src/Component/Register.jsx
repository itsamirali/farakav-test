import { useEffect, useState } from "react";
import MyDatePicker from "./CusotmComponents/DatePicker/MyDatePicker";
import InputAndLabel from "./CusotmComponents/InputAndLabel/InputAndLabel";
import Modal from "./CusotmComponents/Modal/Modal";
import styles from "./Register.module.css";
import cx from "classnames";

const Register = () => {
  const [fullName, setFullNmae] = useState({ error: false, myValue: "" });
  const [email, setEmail] = useState({ error: false, myValue: "" });
  const [phoneNum, setPhonNum] = useState({ error: false, myValue: "" });
  const [date, setDate] = useState(undefined);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRegisteringDone, setIsRegisteringDone] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!fullName?.error && !email?.error && !phoneNum?.error && date !== "") {
      setIsRegistered(true);
    }
  };

  useEffect(() => {
    if (fullName.myValue?.length < 4) {
      setFullNmae((old) => ({ ...old, error: true }));
      setIsRegistered(false);
    } else {
      setFullNmae((old) => ({ ...old, error: false }));
    }
    if (!validateEmail(email.myValue)) {
      setEmail((old) => ({ ...old, error: true }));
      setIsRegistered(false);
    } else {
      setEmail((old) => ({ ...old, error: false }));
    }
    if (
      phoneNum.myValue?.length !== 11 ||
      !phoneNum.myValue?.startsWith("09")
    ) {
      setPhonNum((old) => ({ ...old, error: true }));
      setIsRegistered(false);
    } else {
      setPhonNum((old) => ({ ...old, error: false }));
    }
  }, [fullName?.myValue, email?.myValue, phoneNum?.myValue]);

  return (
    <>
      {!isRegisteringDone && (
        <>
          <div className={styles.formContainer}>
            {isRegistered && (
              <Modal
                title="تایتل"
                message="! ثبت نام شما با موفقیت انجام شد"
                setShow={setIsRegistered}
                onSubmit={setIsRegisteringDone}
              />
            )}
            <>
              <h2 className={styles.formTitle}>ثبت نام در مسابقه</h2>
              <form className={styles.formStyles} onSubmit={submitHandler}>
                <InputAndLabel
                  label="نام و نام خانوادگی"
                  inputId="fullName"
                  type="text"
                  placeholder="مثلا: محسن احمدی"
                  setValue={setFullNmae}
                  value={fullName}
                />
                <InputAndLabel
                  label="ایمیل"
                  inputId="email"
                  type="email"
                  placeholder="مثلا: test@test.com"
                  setValue={setEmail}
                  value={email}
                />
                <MyDatePicker
                  setDate={setDate}
                  date={date}
                  label="تاریخ تولد"
                />
                <InputAndLabel
                  label="شماره همراه"
                  inputId="phoneNumber"
                  type="number"
                  placeholder="مثلا: ۰۹۱۲۱۲۳۴۵۶۷"
                  setValue={setPhonNum}
                  value={phoneNum}
                />
                <div className={styles.submitContainer}>
                  {!fullName?.myValue?.length < 1 &&
                  !email?.myValue?.length < 1 &&
                  !phoneNum?.myValue?.length < 1 ? (
                    <input
                      data-testid="buttonTestId"
                      className={styles.submitBtnStyle}
                      type="submit"
                      value="ثبت نام"
                    />
                  ) : (
                    <span
                      data-testid="buttonTestId"
                      className={cx(
                        styles.submitBtnStyle,
                        styles.disableBtnStyles
                      )}
                    >
                      ثبت نام
                    </span>
                  )}
                </div>
              </form>
            </>
          </div>
        </>
      )}
    </>
  );
};

export default Register;

import React from "react";
import styles from "./InputAndLabel.module.css";
import cx from "classnames"

const InputAndLabel = ({ label, inputId, type, placeholder, value, setValue }) => {
  return (
    <>
      <label className={styles.labelStyles} htmlFor={inputId}>
        {label}
      </label>
      <input
        className={cx(styles.inputStyles, value.error ? styles.errStyles : "")}
        type={type}
        id={inputId}
        placeholder={placeholder}
        value={value.myValue ? value.myValue : ""}
        onChange={(e) => setValue({...value, myValue: e.target.value})}
      />
    </>
  );
};

export default InputAndLabel;

import React from "react";
import styles from "./InputAndLabel.module.css";

const InputAndLabel = ({ label, inputId, type, placeholder }) => {
  return (
    <>
      <label className={styles.labelStyles} htmlFor={inputId}>
        {label}
      </label>
      <input
        className={styles.inputStyles}
        type={type}
        id={inputId}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputAndLabel;

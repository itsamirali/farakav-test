import React from "react";
import styles from "./MyDatePicker.module.css";
import { DatePicker } from "jalali-react-datepicker";
var moment = require("moment");

const MyDatePicker = ({ setDate, date = moment(), label }) => {
  return (
    <DatePicker
      className={styles.datePicker}
      value={date}
      onClickSubmitButton={({ date }) => {
        setDate(date);
      }}
      label={label}
      timePicker={false}
    />
  );
};

export default MyDatePicker;

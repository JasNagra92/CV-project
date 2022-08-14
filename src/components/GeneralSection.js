import React, { useState } from "react";
import Name from "./NameInput";
import Email from "./EmailInput";
import Phone from "./PhoneInput";
import styles from "../styles/GeneralSection.module.css";

const General = () => {
  const [generalInfo, setgeneralInfo] = useState({
    name: "Full Name",
    email: "",
    phoneNumber: "",
  });

  const Update = (e) => {
    setgeneralInfo({
      ...generalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.general}>
      <div className={styles.name}>
        <Name UpdateProps={Update} nameProp={generalInfo.name} />
      </div>
      <div className={styles.email}>
        <Email UpdateProps={Update} emailProp={generalInfo.email} />
      </div>
      <div className={styles.phone}>
        <Phone UpdateProps={Update} phoneProp={generalInfo.phoneNumber} />
      </div>
    </div>
  );
};
export default General;

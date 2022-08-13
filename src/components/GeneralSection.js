import React from "react";
import Name from "./NameInput";
import Email from "./EmailInput";
import Phone from "./PhoneInput";
import styles from "../styles/GeneralSection.module.css"

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Full Name",
      email: "",
      phoneNumber: "",
    };
  }
  Update = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className={styles.general}>
        <div className={styles.name}>
          <Name UpdateProps={this.Update} nameProp={this.state.name} />
        </div>
        <div className={styles.email}>
          <Email UpdateProps={this.Update} emailProp={this.state.email}/>
        </div>
        <div className={styles.phone}>
          <Phone UpdateProps={this.Update} phoneProp={this.state.phoneNumber}/>
        </div>
      </div>
    );
  }
}
export default General;

import React from "react";
import Name from "./NameInput";
import Email from "./EmailInput";
import Phone from "./PhoneInput";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      <div>
        <Name UpdateProps={this.Update} nameProp={this.state.name} />
        <Email UpdateProps={this.Update} emailProp={this.state.email}/>
        <Phone UpdateProps={this.Update} phoneProp={this.state.phoneNumber}  />
      </div>
    );
  }
}
export default General;

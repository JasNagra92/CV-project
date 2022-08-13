import React from "react";
import {AiTwotoneMail} from "react-icons/ai"

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      editable: !this.state.editable,
    });
  };

  render() {
    const { UpdateProps } = this.props;
    let editMode = {};
    let viewMode = {};

    if (this.state.editable) {
      editMode.display = "block";
      viewMode.display = "none";
    } else {
      viewMode.display = "block";
      editMode.display = "none";
    }

    return (
      <div>
        <form style={viewMode} onSubmit={(e) => this.handleSubmit(e)}>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={this.props.email}
            onChange={(e) => UpdateProps(e)}
          />
        </form>
        <p style={editMode} onDoubleClick={(e) => this.handleSubmit(e)}>
          <AiTwotoneMail/>Email: {this.props.emailProp}
        </p>
      </div>
    );
  }
}
export default Email;

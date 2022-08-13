import React from "react";
import {AiFillPhone} from 'react-icons/ai'

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: true,
    };
  }

  handleDone = (e) => {
    if (e.key === "Enter") {
      this.setState({
        editable: false,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        editable: !this.state.editable
    })
  };

  render() {
    const { UpdateProps } = this.props;
    let editMode = {};
    let viewMode = {};

    if (this.state.editable) {
      editMode.display = "block";
      viewMode.display = "none";
    } else {
      editMode.display = "none";
      viewMode.display = "block";
    }

    return (
      <div>
        <form style={editMode} onSubmit={(e) => this.handleSubmit(e)}>
          <label>Phone Number: </label>
          <input
            type="text"
            name="phoneNumber"
            value={this.props.phoneNumber}
            onChange={(e) => UpdateProps(e)}
          />
        </form>
        <p 
        style={viewMode}
        onDoubleClick={(e) => this.handleSubmit(e)}
        ><AiFillPhone />Phone Number: {this.props.phoneProp}</p>
      </div>
    );
  }
}
export default Phone;

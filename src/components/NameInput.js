import React from "react";

class Name extends React.Component {
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
        <h1 onClick={(e) => this.handleSubmit(e)} style={viewMode}>
          {this.props.nameProp}
        </h1>

        <form style={editMode} onSubmit={(e) => this.handleSubmit(e)}>
          <label>Full Name: </label>
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={(e) => UpdateProps(e)}
          />
        </form>
      </div>
    );
  }
}
export default Name;

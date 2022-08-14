import React from "react";
import styles from "../styles/Experience.module.css";

class JobHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  showEdit = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };

  render() {
    const editMode = {};
    const viewMode = {};
    if (this.state.editable) {
      editMode.display = "block";
      viewMode.display = "none";
    } else {
      editMode.display = "none";
      viewMode.display = "block";
    }

    const { company, jobTitle, startDate, endDate, responsibilites, id } =
      this.props.JobHistoryItem;
    const { handleEditProps, hideButtons } = this.props;

    if (hideButtons) {
      editMode.display = "none";
    }

    return (
      <div>
        <li>
          <h3 style={viewMode}>{company}</h3>
          <input
            type="text"
            value={company}
            name="company"
            onChange={(e) => handleEditProps(e, id)}
            style={editMode}
          />
          <h4 style={viewMode}>{jobTitle}</h4>
          <input
            type="text"
            value={jobTitle}
            name="jobTitle"
            onChange={(e) => handleEditProps(e, id)}
            style={editMode}
          />
          <p style={viewMode}>{responsibilites}</p>
          <input
            type="text"
            value={responsibilites}
            name="responsibilites"
            onChange={(e) => handleEditProps(e, id)}
            style={editMode}
          />
          <p style={viewMode} className={styles.date}>
            {startDate} - {endDate}
          </p>
          <input
            type="text"
            value={startDate}
            name="startDate"
            onChange={(e) => handleEditProps(e, id)}
            style={editMode}
          />
          <input
            type="text"
            value={endDate}
            name="endDate"
            onChange={(e) => handleEditProps(e, id)}
            style={editMode}
          />
        </li>
        <button style={viewMode} onClick={() => this.showEdit()}>
          Edit
        </button>
        <button style={editMode} onClick={() => this.showEdit()}>
          Submit Edit
        </button>
      </div>
    );
  }
}
export default JobHistoryItem;

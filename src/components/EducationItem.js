import React from "react";
import styles from '../styles/EducationSection.module.css'

class educationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }
  render() {
    const { educationItem, handleEditProps } = this.props;
    const editMode = {};
    const viewMode = {};
    if (this.state.editable) {
      editMode.display = "block";
      viewMode.display = "none";
    } else {
      editMode.display = "none";
      viewMode.display = "block";
    }
    const setEdit = () => {
      this.setState({
        editable: !this.state.editable,
      });
    };
    return (
      <div>
        <li>
          <h2 style={viewMode}>{educationItem.school}</h2>
          <input
            type="text"
            value={educationItem.school}
            name="school"
            onChange={(e) => handleEditProps(e, educationItem.id)}
            style={editMode}
          />
          <p style={viewMode}>{educationItem.subject}</p>
          <input
            type="text"
            value={educationItem.subject}
            name="subject"
            onChange={(e) => handleEditProps(e, educationItem.id)}
            style={editMode}
          />
          <p style={viewMode} className={styles.date}>
            {educationItem.startDate} - {educationItem.endDate}
          </p>
          <input
            type="text"
            value={educationItem.startDate}
            name="startDate"
            onChange={(e) => handleEditProps(e, educationItem.id)}
            style={editMode}
          />
          <input
            type="text"
            value={educationItem.endDate}
            name="endDate"
            onChange={(e) => handleEditProps(e, educationItem.id)}
            style={editMode}
          />
          <button style={viewMode} onClick={setEdit}>
            Edit
          </button>
          <button style={editMode} onClick={setEdit}>
            Submit Edit
          </button>
        </li>
      </div>
    );
  }
}
export default educationItem;

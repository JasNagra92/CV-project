import React, { useState } from "react";
import styles from "../styles/EducationSection.module.css";

const EducationItem = (props) => {
  const [editable, setEditable] = useState(false);

  const { handleEditProps } = props;
  const { school, subject, startDate, endDate, id } = props.educationItem;
  const editMode = {};
  const viewMode = {};
  if (editable) {
    editMode.display = "block";
    viewMode.display = "none";
  } else {
    editMode.display = "none";
    viewMode.display = "block";
  }
  const setEdit = () => {
    setEditable(!editable);
  };
  return (
    <div>
      <li>
        <h2 style={viewMode}>{school}</h2>
        <input
          type="text"
          value={school}
          name="school"
          onChange={(e) => handleEditProps(e, id)}
          style={editMode}
        />
        <p style={viewMode}>{subject}</p>
        <input
          type="text"
          value={subject}
          name="subject"
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
        <button style={viewMode} onClick={setEdit}>
          Edit
        </button>
        <button style={editMode} onClick={setEdit}>
          Submit Edit
        </button>
      </li>
    </div>
  );
};
export default EducationItem;

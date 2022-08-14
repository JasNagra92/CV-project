import React, { useState } from "react";
import styles from "../styles/Experience.module.css";

const JobHistoryItem = (props) => {
  const [editable, setEditable] = useState(false);

  const showEdit = () => {
    setEditable(!editable);
  };

  const editMode = {};
  const viewMode = {};
  if (editable) {
    editMode.display = "block";
    viewMode.display = "none";
  } else {
    editMode.display = "none";
    viewMode.display = "block";
  }

  const { company, jobTitle, startDate, endDate, responsibilites, id } =
    props.JobHistoryItem;
  const { handleEditProps, hideButtons } = props;

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
      <button style={viewMode} onClick={showEdit}>
        Edit
      </button>
      <button style={editMode} onClick={showEdit}>
        Submit Edit
      </button>
    </div>
  );
};
export default JobHistoryItem;

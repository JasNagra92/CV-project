import React, { useState } from "react";
import styles from "../styles/EducationSection.module.css";
import EducationItem from "./EducationItem";
import uniqid from "uniqid";

const Education = (props) => {
  const [EducationState, setEducationState] = useState({
    education: [],
    school: "",
    subject: "",
    startDate: "",
    endDate: "",
    editable: false,
  });

  const handleEdit = (e, id) => {
    setEducationState({
      ...EducationState,
      education: EducationState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [e.target.name]: e.target.value };
        }
        return educationItem;
      }),
    });
  };
  const handleInput = (e) => {
    setEducationState({
      ...EducationState,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    let newEducation = {
      school: EducationState.school,
      subject: EducationState.subject,
      startDate: EducationState.startDate,
      endDate: EducationState.endDate,
      id: uniqid(),
    };
    setEducationState({
      education: [...EducationState.education, newEducation],
      school: "",
      subject: "",
      startDate: "",
      endDate: "",
      editable: false,
    });
  };
  const showForm = () => {
    setEducationState({
      ...EducationState,
      editable: !EducationState.editable,
    });
  };

  const editMode = {};
  const viewMode = {};
  if (EducationState.editable) {
    editMode.display = "flex";
  } else {
    editMode.display = "none";
  }

  let { hideButtons } = props;

  if (hideButtons) {
    viewMode.display = "none";
  } else {
    viewMode.display = "block";
  }

  return (
    <div className={styles.container}>
      <ul>
        {EducationState.education.map((educationItem) => {
          return (
            <EducationItem
              key={educationItem.id}
              educationItem={educationItem}
              handleEditProps={handleEdit}
            />
          );
        })}
      </ul>
      <form style={editMode} className={styles.form}>
        <div>
          <label>School Name: </label>
          <input
            type="text"
            onChange={handleInput}
            value={EducationState.school}
            name="school"
          />
        </div>

        <div>
          <label>Field of Study: </label>
          <input
            type="text"
            onChange={handleInput}
            value={EducationState.subject}
            name="subject"
          />
        </div>

        <div>
          <label>Start Date: </label>
          <input
            type="text"
            onChange={handleInput}
            value={EducationState.startDate}
            name="startDate"
          />
        </div>

        <div>
          <label>End Date: </label>
          <input
            type="text"
            onChange={handleInput}
            value={EducationState.endDate}
            name="endDate"
          />
        </div>
        <button onClick={handleAdd}>Add</button>
      </form>
      <button style={viewMode} onClick={showForm}>
        Add Education
      </button>
    </div>
  );
};
export default Education;

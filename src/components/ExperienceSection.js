import React, { useState } from "react";
import uniqid from "uniqid";
import styles from "../styles/Experience.module.css";
import JobHistoryItem from "./JobHistoryItem";

const Experience = (props) => {
  const [JobState, setJobState] = useState({
    jobs: [],
    editable: false,
    currentJob: {
      company: "",
      jobTitle: "",
      responsibilites: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    },
  });

  const handleInput = (e) => {
    setJobState({
      ...JobState,
      currentJob: { ...JobState.currentJob, [e.target.name]: e.target.value },
    });
  };

  const handleEdit = (e, id) => {
    setJobState({
      ...JobState,
      jobs: JobState.jobs.map((job) => {
        if (job.id === id) {
          return { ...job, [e.target.name]: e.target.value };
        } else {
          return job;
        }
      }),
    });
  };

  const handleSubmit = () => {
    setJobState({
      jobs: [...JobState.jobs, JobState.currentJob],
      editable: false,
      currentJob: {
        company: "",
        jobTitle: "",
        responsibilites: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
    });
  };

  const showForm = () => {
    setJobState({
      ...JobState,
      editable: !this.state.editable,
    });
  };

  const editMode = {};
  const viewMode = {};
  if (JobState.editable) {
    editMode.display = "flex";
    viewMode.display = "none";
  } else {
    editMode.display = "none";
    viewMode.display = "flex";
  }
  const { hideButtons } = props;
  if (hideButtons) {
    viewMode.display = "none";
  }

  return (
    <div>
      <ul>
        {JobState.jobs.map((job) => {
          return (
            <JobHistoryItem
              key={job.id}
              JobHistoryItem={job}
              handleEditProps={handleEdit}
              hideButtons={hideButtons}
            />
          );
        })}
      </ul>
      <form style={editMode} className={styles.container}>
        <div>
          <label>Company Name: </label>
          <input
            type="text"
            name="company"
            value={JobState.currentJob.company}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Job Title: </label>
          <input
            type="text"
            name="jobTitle"
            value={JobState.currentJob.jobTitle}
            onChange={handleInput}
          />
        </div>

        <div style={{ display: "flex" }}>
          <label>Responsibilites: </label>
          <textarea
            name="responsibilites"
            value={JobState.currentJob.responsibilites}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Start Date: </label>
          <input
            type="text"
            onChange={handleInput}
            value={JobState.currentJob.startDate}
            name="startDate"
          />
        </div>

        <div>
          <label>End Date: </label>
          <input
            type="text"
            onChange={handleInput}
            value={JobState.currentJob.endDate}
            name="endDate"
          />
        </div>
      </form>
      <button style={editMode} onClick={handleSubmit}>
        Submit
      </button>
      <button style={viewMode} onClick={showForm}>
        Add Job
      </button>
    </div>
  );
};
export default Experience;

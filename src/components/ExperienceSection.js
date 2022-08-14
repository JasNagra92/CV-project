import React from "react";
import uniqid from "uniqid";
import styles from "../styles/Experience.module.css";
import JobHistoryItem from './JobHistoryItem'

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleInput = (e) => {
    this.setState({
      currentJob: { ...this.state.currentJob, [e.target.name]: e.target.value },
    });
  };

  handleEdit = (e, id) => {
    this.setState({
        jobs: this.state.jobs.map(job => {
            if (job.id === id){
                return {...job,
                [e.target.name]:e.target.value}
            } else {return job}
        })
    })
  } 

  handleSubmit = () => {
    this.setState({
      jobs: [...this.state.jobs, this.state.currentJob],
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

  showForm = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };

  render() {
    const editMode = {};
    const viewMode = {};
    if (this.state.editable) {
      editMode.display = "flex";
      viewMode.display = 'none'
    } else {
      editMode.display = "none";
      viewMode.display = 'flex'
    }
    const {hideButtons} = this.props;
    if (hideButtons){
        viewMode.display = 'none'
    } 

    return (
      <div>
        <ul>
          {this.state.jobs.map((job) => {
            return (
              <JobHistoryItem 
                key={job.id}
                JobHistoryItem={job}
                handleEditProps={this.handleEdit}
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
              value={this.state.currentJob.company}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <label>Job Title: </label>
            <input
              type="text"
              name="jobTitle"
              value={this.state.currentJob.jobTitle}
              onChange={this.handleInput}
            />
          </div>

          <div style={{display:'flex'}}>
            <label>Responsibilites: </label>
            <textarea
              name="responsibilites"
              value={this.state.currentJob.responsibilites}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <label>Start Date: </label>
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.currentJob.startDate}
              name="startDate"
            />
          </div>

          <div>
            <label>End Date: </label>
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.currentJob.endDate}
              name="endDate"
            />
          </div>
        </form>
        <button style={editMode} onClick={this.handleSubmit}>Submit</button>
        <button style={viewMode} onClick={this.showForm}>Add Job</button>
      </div>
    );
  }
}
export default Experience;

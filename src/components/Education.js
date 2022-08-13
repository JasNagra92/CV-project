import React from 'react';
import styles from '../styles/EducationSection.module.css';
import EducationItem from './EducationItem';
import uniqid from 'uniqid';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
      school: '',
      subject: '',
      startDate: '',
      endDate: '',
      editable: false,
    };
  }
  handleEdit = (e, id) => {
    this.setState({
      education: this.state.education.map((educationItem) => {
        console.log(id);
        if (educationItem.id === id) {
          return { ...educationItem, [e.target.name]: e.target.value };
        } else {
          return educationItem;
        }
      }),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  showForm = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };
  handleAdd = (e) => {
    e.preventDefault();
    let newEducation = {
      school: this.state.school,
      subject: this.state.subject,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      id: uniqid(),
    };
    this.setState({
      education: [...this.state.education, newEducation],
      school: '',
      subject: '',
      startDate: '',
      endDate: '',
      editable: false,
    });
  };
  render() {
    const editMode = {};
    if (this.state.editable) {
      editMode.display = 'flex';
    } else {
      editMode.display = 'none';
    }

    return (
      <div>
        <ul>
          {this.state.education.map((educationItem) => {
            return (
              <EducationItem
                key={this.state.school}
                EducationItem={educationItem}
                handleEditProps={this.handleEdit}
              />
            );
          })}
        </ul>
        <form
          style={editMode}
          className={styles.form}
          onSubmit={() => this.handleSubmit}
        >
          <div>
            <label>School Name: </label>
            <input
              type="text"
              onChange={(e) => this.handleInput(e)}
              value={this.state.school}
              name="school"
            />
          </div>

          <div>
            <label>Field of Study: </label>
            <input
              type="text"
              onChange={(e) => this.handleInput(e)}
              value={this.state.subject}
              name="subject"
            />
          </div>

          <div>
            <label>Start Date: </label>
            <input
              type="text"
              onChange={(e) => this.handleInput(e)}
              value={this.state.startDate}
              name="startDate"
            />
          </div>

          <div>
            <label>End Date: </label>
            <input
              type="text"
              onChange={(e) => this.handleInput(e)}
              value={this.state.endDate}
              name="endDate"
            />
          </div>
          <button onClick={(e) => this.handleAdd(e)}>Add</button>
        </form>
        <button onClick={() => this.showForm()}>Add Education</button>
      </div>
    );
  }
}
export default Education;

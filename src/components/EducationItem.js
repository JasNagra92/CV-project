import React from 'react';

class EducationItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editable:true
        }
    }
  render() {
    const { EducationItem, handleEditProps } = this.props;
    const editMode = {}
    if (this.state.editable){
        editMode.display = 'block'
    } else {editMode.display = 'none'}
    return (
      <div>
        <li>
            <h2>{EducationItem.school}</h2>
            <input
             type="text"
             value={EducationItem.school}
             name='school'
             onChange={(e)=>handleEditProps(e, EducationItem.id)}
             style={editMode}
              />
            <p>{EducationItem.subject}</p>
            <p>{EducationItem.startDate} - {EducationItem.endDate}</p>
            <button onClick={()=>handleEditProps}>Edit</button>
        </li>
      </div>
    );
  }
}
export default EducationItem;

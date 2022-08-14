import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";

const Phone = (props) => {
  const [editable, setEditable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  const { UpdateProps, phoneProp } = props;
  let editMode = {};
  let viewMode = {};

  if (editable) {
    editMode.display = "block";
    viewMode.display = "none";
  } else {
    editMode.display = "none";
    viewMode.display = "block";
  }

  return (
    <div>
      <form style={viewMode} onSubmit={handleSubmit}>
        <label>Phone Number: </label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneProp}
          onChange={UpdateProps}
        />
      </form>
      <p style={editMode} onClick={handleSubmit}>
        <AiFillPhone />
        Phone Number: {phoneProp}
      </p>
    </div>
  );
};
export default Phone;

import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";

const Email = (props) => {
  const [editable, setEditable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  const { UpdateProps, emailProp } = props;
  let editMode = {};
  let viewMode = {};

  if (editable) {
    editMode.display = "block";
    viewMode.display = "none";
  } else {
    viewMode.display = "block";
    editMode.display = "none";
  }

  return (
    <div>
      <form style={viewMode} onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="text" name="email" value={emailProp} onChange={UpdateProps} />
      </form>
      <p style={editMode} onClick={handleSubmit}>
        <AiTwotoneMail />
        Email: {emailProp}
      </p>
    </div>
  );
};
export default Email;

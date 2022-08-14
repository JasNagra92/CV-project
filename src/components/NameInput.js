import React, { useState } from "react";

const Name = (props) => {
  const [editable, setEditable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  const { UpdateProps, nameProp } = props;
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
      <h1 onClick={handleSubmit} style={viewMode}>
        {nameProp}
      </h1>

      <form style={editMode} onSubmit={handleSubmit}>
        <label>Full Name: </label>
        <input
          type="text"
          name="name"
          value={nameProp}
          onChange={(e) => UpdateProps(e)}
        />
      </form>
    </div>
  );
};
export default Name;

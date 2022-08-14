import React, { useState } from "react";
import General from "./GeneralSection";
import Education from "./Education";
import Experience from "./ExperienceSection";

const App = () => {
  const [hideAllButtons, sethideAllButtons] = useState(false);

  const toggleHide = () => {
    sethideAllButtons(!hideAllButtons);
  };
  return (
    <div>
      <General />
      <Education hideButtons={hideAllButtons} />
      <Experience hideButtons={hideAllButtons} />
      <button onClick={toggleHide}>Hide All Buttons</button>
    </div>
  );
};
export default App;
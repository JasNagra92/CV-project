import React from "react";
import General from "./GeneralSection";
import Education from "./Education";

class App extends React.Component{

    render(){
        return(
            <div>
                <General />
                <Education />
            </div>
        )
    }
}
export default App
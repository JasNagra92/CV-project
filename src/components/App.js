import React from "react";
import General from "./GeneralSection";
import Education from "./Education";
import Experience from "./ExperienceSection";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hideAllButtons: false
        }
    }
    toggleHide = () =>  {
        this.setState({
            hideAllButtons: !this.state.hideAllButtons
        })
    }
    render(){
        return(
            <div>
                <General />
                <Education hideButtons={this.state.hideAllButtons} />
                <Experience hideButtons={this.state.hideAllButtons} />
                <button onClick={() => this.toggleHide()}>Hide All Buttons</button>
            </div>
        )
    }
}
export default App
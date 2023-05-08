import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            feedback: props.feedback
        }
    }
    render(){
    return <h1>{this.state.feedback ? this.state.feedback : ""}</h1>;
    }
};

export default Test;
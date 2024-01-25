import React from "react";
class StateComponent extends React.Component{
    //var can't be declared inside a class
    constructor(){
        super() //-----> acts as constructor for both parent&child class(statecomponent & classcomponents) 
        //State is defined inside a constructor
        this.state = {
            name:"KEC",
            course:"MERN"
        }
    }
    changeState=(params) =>{
        console.log("Kongu Engineering College")//"UseState" should be used when we come to hooks
    } //------>need to use arrow function to create a function inside a constructor(this is the reason industry is using functionalcomponent than classComponent)
        
    
    render(){
        return(
            <div>
                <h2>This is State Component</h2>
                <h3> Hello, {this.state.name}  <br></br>Welcome to {this.state.course} class</h3>
                <h4>I am changing the state of the {this.state.name} to {this.changeState()}</h4>
                <button onMouseOver={this.changeStategit}>Click me to change the state</button>
            </div>
        )
    }
}
export default StateComponent;


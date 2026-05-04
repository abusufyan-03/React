import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {

    constructor(props){
        super(props);
        console.log('parent Construtor')
    }

    componentDidMount(){
        console.log("Parent Component did Mount")
    }
    render(){
        console.log('parent render')
        return (
        <div className="">
            <h1>About Us </h1>
            <UserClass name={"first"} />
            {/* <UserClass name={"second"} location={"Leaf village (class)"}/> */}
        </div>
    )
    }
    
}

/* const About = () =>{
    return (
        <div className="">
            <h1>About Us </h1>
            <User />
            <UserClass name={"sasuke (class)"} location={"Leaf village (class)"}/>
        </div>
    )
} */

export default About;
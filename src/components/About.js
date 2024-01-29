import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent constructor");
  }

  
  componentDidMount(){
    console.log("parent ComponentDid Mount")
      }

  render(){
     console.log("parent render");
    return(
      <div>
           <h1> hello , here is About us page</h1>
           <h2> here data of restaurant are present </h2>
           <UserClass name={"SP Tripathi"} Location={"SudamaPuri"} Gmail={"Satya123.com"} city={"Ghaziabad"}/>
           <UserClass name={"Shivam"} Location={"antu"} Gmail={"Shivam123.com"} city={"banglore"}/>
           

      </div>
    )
  }
}

export default About ;


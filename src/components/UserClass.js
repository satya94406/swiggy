import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:3,
            count2:5
        }
    }

    render(){
        const{name,Location,Gmail,city}=this.props;
        const{count,count2}=this.state;

        return(   
            <div>
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Increase</button>
                <h1>Count:{count2}</h1>

                <button onClick={()=>{
                    this.setState({
                        count2:this.state.count2+5,
                    })
                }}>Increase</button>
                <h3>Name:{ " "+name}</h3>
                <h3>Location:{Location}</h3>
                <h3>Gmail:{Gmail}</h3>
                <h3>City:{city}</h3>
            </div>
        )
    }
}
export default UserClass ;
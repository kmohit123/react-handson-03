// import { render } from "@testing-library/react";
import React from 'react'
import { Component } from "react";
class DisplayFune extends Component{
    constructor(props){
        super(props);
        console.log(this.props.value)
    }
    render() {
        return(
            <>
            
             <h1 className='hading'>EMPLOYEE FEEDBACK DATA</h1>
             <div className='allop'>
             {this.props.value.map((item, index) => {
                
                return (
                <>
                    <span>
                    Name :{item.name} || Dept : {item.dept} || Rating : {item.rating}
                    </span>
                    {/* <button onClick={this.props.toggleFune}>Go Back</button> */}
                </>
                )
             })}
             </div>
               <button onClick={this.props.toggleFune}>Go Back</button>
            </>
        )
    }
}
   
export default DisplayFune;
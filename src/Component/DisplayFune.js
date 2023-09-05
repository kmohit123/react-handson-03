// import { render } from "@testing-library/react";
import React from 'react'
import '../App.css'
import { Component } from 'react'
class DisplayFune extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.value)
  }
  render() {
    return (
      <>
        <div className="cantener">
            <h1 className="hading">EMPLOYEE FEEDBACK DATA</h1>
          <div className="allop">
            {this.props.value.map((item, index) => {
              return (
                <>
                  <span>
                    Name :{item.name} || Dept : {item.dept} || Rating :{' '}
                    {item.rating}
                  </span>
                  {/* <button onClick={this.props.toggleFune}>Go Back</button> */}
                </>
              )
            })}
          </div>
          <center><button onClick={this.props.toggleFune} className='pp'>Go Back</button></center>
        </div>
        
      </>
    )
  }
}

export default DisplayFune

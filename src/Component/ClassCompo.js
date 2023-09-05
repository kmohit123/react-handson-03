import React from 'react'
import { Component } from 'react'
import '../App.css'
import DisplayFune from './DisplayFune';
class ClassCompo extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Dept: '',
      clicked: true,
      EmpDeta: []
    }
  }
  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  toggleFunction = () => {
    this.setState({clicked: !this.state.clicked})
  }
  clickHandle = (e) => {
    e.preventDefault()
    let newObj = {
      name: this.state.Name,
      dept: this.state.Dept,
      rating: this.state.Rating,
    }
    this.state.EmpDeta.push(newObj);
    this.setState({ 
       EmpDeta: this.state.EmpDeta,
       Name: '',
       clicked: false
    })
    console.log(this.state.EmpDeta)
  }
  render() {
    return (
      <>
       <div className="allform">
       {this.state.clicked 
       ?
          <form className="form">
            <h1 className='hading'>EMPLOYEE FEEDBACK FORM</h1>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={this.state.Name}
              placeholder="Enter Name"
              required
              onChange={this.changeHandle}
            />
            <br />
            <br />

            <label htmlFor="dept">Depatment : </label>
            <input
              type="text"
              id="dept"
              name="Dept"
              value={this.state.Dept}
              placeholder="Enter Dept"
              required
              onChange={this.changeHandle}
            />
            <br />
            <br />

            <label htmlFor="rating">Rating : </label>
            <input
              type="number"
              id="rating"
              name="Rating"
              value={this.state.Rating}
              placeholder="Enter Rating"
              required
              onChange={this.changeHandle}
            />
            <br />
            <br />

            <button onClick={this.clickHandle}>Submit</button>
          </form>
          :
           <DisplayFune value = {this.state.EmpDeta} toggleFune = {this.toggleFunction}/>
        }
        </div>
      </>
        
    )
  }
}
export default ClassCompo;

//import logo from './logo.svg';
//import './App.css';
import Faker from 'faker'
import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.username = this.props.name
    this.likeFunction = this.likeFunction.bind(this)
    this.likes=4;
    this.age=this.props.FakerAge
    //state letrehozas kovetkezik
    this.state={
      likes:4,
      weather: 'acceptable'
    }
  }

  /*
  likeFunction = () => {
    console.log('Like function')
    this.username = 'kiralykisasszony'
  }
  */

  likeFunction() {
    this.username = 'kiralykisasszony'
    console.log('Like function called')
    //this.setState({likes: this.state.likes+1})
    this.setState((prevState)=>{
      return{
        likes: prevState.likes+1
      }

    })
  }

  render() {
    console.log('render was called');
    return (
      <div>
        <p>
          Hello, my name is {this.username}, I am {this.props.age} years old
        </p>
        <br></br>
        <img src={this.props.fakerImg} alt = 'FakerImg'></img>
        <button style={{color:'blue',backgroundColor:'white',fontSize:'25px'}} onClick={this.likeFunction}>I like it</button>
        <div>Likes: {this.state.likes}</div>
        <div>Weather: {this.state.weather}</div>
        <br></br>
      </div>
    );
  }
  componentWillMount()
  {
    console.log('ComponentWillMount was called');
  }
  componentDidMount()
  {
    console.log('ComponentDidMount was called');
  }
  componentWillUpdate()
  {
    console.log('ComponentWillUpdate was called')
  }
  componentDidUpdate()//ez meghivodik
  {
    console.log('DidUpdate called');
  }
}

export default Avatar;

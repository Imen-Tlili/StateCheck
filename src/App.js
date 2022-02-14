import React from 'react';
import Profile from './Component/Profile';
import './App.css';

class App extends React.Component{
  constructor(){
  super()
  this.state={
       show: false
  }
  }

  handleShow=()=> this.setState({show : !this.state.show})

  render(){
    return (
      <div>
        <h1 className='main'>Welcome to my profil</h1>
      <button className='main' onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>

      { this.state.show && <Profile/> }
       

      </div>
    )
  }
}
  

export default App;

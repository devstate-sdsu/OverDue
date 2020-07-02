import React, { Component } from 'react';
import Header from './Components/Header';
import FirstComp from './Components/FirstComp';
import './App.css'

class App extends Component {


  render() {
    return (
      <div className= "App">
          <Header/>
          <FirstComp/>
      </div>
    );
  }
}

export default App;
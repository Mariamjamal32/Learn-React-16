import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  something = 'Mariam'
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App! </h1>
        <p>It is really working!! </p>
        <Person name="Max" age="28"/>
        <Person name={this.something} age="25"> I am a girl. </Person>
        
      </div>
    );
  }
}

export default App;

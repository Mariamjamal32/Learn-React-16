import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Manu",
        age: 26
      }
    ],
    otherState: "other state"
  }

  switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name = "Maximillian"
    console.log(this.state.otherState)
    this.setState({
      persons: [
        {
          name: newName,
          age: 29
        },
        {
          name: "Manu",
          age: 26
        }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 29
        },
        {
          name: event.target.value,
          age: 26
        }
      ]
    })
  }

  render() {
    const style ={
      font : 'inherit',
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am a react App! </h1>
        <p>It is really working!! </p>
        <button style={style} 
          onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <Person
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, 'Maxi!!!')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}> I am a girl. </Person>
        
      </div>
    );
  }
}

export default App;

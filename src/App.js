import {Component} from "react";
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state ={
    people:[
      {name:'Mike', age:25,prof:"Programmer"},
      {name:'John', age:35,prof:"Disaigner"},
    ],
  };

  changeName = () =>{
    const people = [...this.state.people];
    const person = {...this.state.people[0]};
    person.name = "Sam";
    people[0] = person;

    this.setState({people});
  };
  increaseAge = () =>{
    const people = this.state.people.map(person =>{
      return{
        ...person,
        age:person.age + 1,
      };
    })
    this.setState({people});
  }
  render(){
  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={this.changeName}>Change name</button>
      <button onClick={this.increaseAge}>increase age</button>
      {/* <img src="img/avatar.png" alt="" /> */}
      <div className="wrapper">
        <Person 
        name={this.state.people[0].name}
        age={this.state.people[0].age}>
        {this.state.people[0].prof}
        </Person>
        <Person 
        name={this.state.people[1].name}
        age={this.state.people[1].age}>
          {this.state.people[1].prof}
        </Person>
      </div>

    </div>
  );
}
}

export default App;

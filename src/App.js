import './App.css';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {/* <img src="img/avatar.png" alt="" /> */}
      <div className="wrapper">
        <Person
          name="Mike"
          age="25"
        />
        <Person name="John" age="18" />
      </div>

    </div>
  );
}

export default App;

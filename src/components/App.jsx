import './App.css';

const Welcome = ({ name, age, city }) => {
  return (
    <div>
      <p>Hello, {name}</p>
      <p>You have {age} years old</p>
      <p>You live in {city}</p>
    </div>
  );
};

export const App = () => {
  return (
    <div className="App">
      <Welcome name="Krzysztof" age="37" city="Siedlce" />
    </div>
  );
};

export default App;

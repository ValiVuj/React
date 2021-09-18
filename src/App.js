import logo from './logo.svg';
import './App.css';
import CurrentDate from './components/getCurrentDate';
import CurrentId from "./components/getId";
import UserInfo from './components/UserInfo';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ciao Dzimba</h1>
        <p>
          Hello world
        </p>
        <CurrentId />
        <CurrentDate />
        <UserInfo />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

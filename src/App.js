import logo from './logo.svg';
import './App.css';
import * as dayjs  from "dayjs";
import { nanoid } from "nanoid";

console.log(dayjs().format());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ciao Dzimba</h1>
        <p>
          Hello world
        </p>
        <p>how you doin today is {dayjs().format("MMMM/DD/YYYY, HH:mm:ss")}</p>
        <p>Your unique ID is {nanoid()}</p>
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

import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

function App() {

  useEffect( () => {

    let url = "https://api.themoviedb.org/3/list/1?api_key=264bb09ec4d858065cfb8860838a32ff&page=1"

      axios.get(url).then((data)=>{
        console.log(data)
      })

  } )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

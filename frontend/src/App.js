import './App.css';
import React from 'react'

function App() {
  const [data, setData] = React.useState([{name: 'my', date: 'start'}])

  const onClick = () => {
    fetch('http://real-world-docker.local/api/user')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data) {
        console.log(data);
        setData(data)
        }
      });
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >          
        </a>
        <button onClick={onClick}> get value</button>
          {data.map((item, i) => <p key={i}>{item.name}-{item.date}</p> )}
      </header>
    </div>
  );
}

export default App;

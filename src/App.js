import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      total:77
    }
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.total}</h1>
        <button onClick={()=>{this.setState({total:this.state.total+1})}}>+</button>
        <button onClick={()=>{this.setState({total:this.state.total-1})}}>-</button>
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
  
}

export default App;

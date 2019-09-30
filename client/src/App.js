import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getTrees();
  }

  getTrees = () => {
    fetch('http://localhost:7000/trees')
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        return this.setState({ data: res });
      })
  }

  render() {
    const { data } = this.state;
    console.log('HERE IS SOME STUFF', data);
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
}

export default App;

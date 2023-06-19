import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    // I used .bind to access this inside the handlePClick function
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'Júnior',
      counter: 0,
    };
  }

  handlePClick() {
    this.setState({ name: 'Pleno' })
  }

  // Using arrow function I don't need to resort to .bind
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { name, counter } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Counter +1
          </a>
        </header>
      </div>
    );
  }
}

export default App;

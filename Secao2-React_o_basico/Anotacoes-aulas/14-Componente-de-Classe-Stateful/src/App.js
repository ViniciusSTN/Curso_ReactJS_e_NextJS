import { Component } from 'react';


class App extends Component {
  state = {
    name: 'Vinicius',
    counter: 0,
  };

  // usar arrow function para não perder o this
  handlePClick = () => {
    this.setState({name: 'Joao'});
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name } = this.state;
    const { counter } = this.state;

    return (
    <div className="App">
      <header className="App-header">
        <p onClick={this.handlePClick}>
          {name} {counter}
        </p>
      </header>
    </div>
  );
  }
}

export default App;

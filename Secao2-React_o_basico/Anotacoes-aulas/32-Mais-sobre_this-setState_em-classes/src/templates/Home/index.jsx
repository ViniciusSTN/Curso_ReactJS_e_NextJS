import { Component } from 'react';

import './styles.css';

export class Home extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    // this.setState({ counter: this.state.counter + 1 });
    // console.log(this.state.counter); // ao fazer isso -e mostrado no console um número anterior -> explicação no sobre.txt

    // para usar o estado atualizado, é preciso executar uma função de callback
    // o setState pode receber essa função de callBack
    // this.setState({ counter: this.state.counter + 1 },
    //   () => {
    //     console.log(this.state.counter);
    //   }
    // );

    // é uma boa pratica usar prevState e prevProps para garantir que pegerá o estado anterior
    this.setState(
      (prevState, prevProps) => {
        return { counter: prevState.counter + 1 }
      },
      () => {
        console.log(this.state.counter);
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

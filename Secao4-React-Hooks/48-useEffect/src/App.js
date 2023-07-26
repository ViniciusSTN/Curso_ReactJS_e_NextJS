import { useEffect, useState } from 'react';
import './App.css';

const eventFn = () => {
  console.log('h1 clicado2');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidMount
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  // componentDidUpdate
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidUpdate com dependencia
  // toda vez que o estado de counter for atualizado, useEffect será chamado
  // todo elemento de estado que seja usado dentro da função deve ser passado como dependência de useEffect
  // useEffect(() => {
  //   console.log('contador mudou para: ', counter);
  // }, [counter]);

  // qualquer estado das dependencias informadas, quando atualizado, será chamado a função useEffect
  // useEffect(() => {
  //   console.log('contador 1: ', counter, 'Contador 2:', counter2);
  // }, [counter, counter2]);

  // useEffect(() => {
  //   console.log('Contador 1: ', counter, 'Contador 2:', counter2);
  //   // se uma função de setState for chamada dentro de useEffect e o estado atualizado ser uma dependencia de useEffect, haverá um loop infinito
  //   // setCounter2(counter2 + 1);

  //   setCounter2(10); // nesse caso não da loop infinito, pois o estado foi setado sem depender do estado anterior
  // }, [counter, counter2]);

  useEffect(() => {
    // toda vez que o componente for montado, será atribuido mais um event listener,, gerando lixo, pois executará várias vezes
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUmount -> limpar lixo
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      <h1>
        C1: {counter} | C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>C1+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>C2+</button>
    </div>
  );
}

export default App;

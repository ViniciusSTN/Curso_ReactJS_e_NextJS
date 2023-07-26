import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './App.css';

// button está sendo renderizado novamente sem necessidade, pois nada nele é alterado quando sofre update
// memo -> memoriza o componente e só atualiza se algo mudar nele
// obs: não é uma garantia, se props mudar, o componente atualiza
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Componente filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  // evita que a função seja recriada em cada renderização, guardando na memória e otimizando o desempenho
  // obs: não é uma garantia, para isso nenhuma dependencia deve ser alterada
  // nesse caso se tivessemos passado counter como dependencia e dentro de seCounter usar o counter para somar o número, isso atualizará a dependencia e a função será criada novamente no proxima renderização, ocasionando em perda de eficiência
  // mas se uma dependencia tiver sido passada e não atualizada, a função não será recriada ao re-renderizar o componente
  const incrementCounter = useCallback((num) => {
    setCounter((prevState) => prevState + num);
  }, []);

  console.log('Componente pai renderizou');

  return (
    <div className="App">
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;

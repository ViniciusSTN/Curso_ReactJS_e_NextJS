import P from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import './App.css';

const Button = ({ incrementButton }) => {
  console.log('Componente filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((prevState) => prevState + num);
  }, []);

  console.log('Componente pai renderizou');

  /* mesma coisa do codigo anterior */
  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <h1>C1: {counter}</h1>

      {btn}
    </div>
  );
}

export default App;

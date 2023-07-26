import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    // setReverse(!reverse);

    // pode receber uma função de callback (é aconselhavel)
    setReverse((prevReverse) => !prevReverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <button type="button" onClick={handleClick}>
          Toggle spin
        </button>
      </header>
    </div>
  );
}

export default App;

import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo que está no contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = () => {
  return (
    <div className="App">
      <H1 />
      <P />
    </div>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);

  // destructuring dentro de destructuring para pegar o titulo e counter do estado global
  const {
    contextState: { title, counter }, // theContext.contextState.title & counter
  } = theContext;
  return (
    <h1>
      {title} | {counter}
    </h1>
  );
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() =>
        // é necessário atualizar todos os valores de contextState
        setContextState((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }))
      }
    >
      {body}
    </p>
  ); // theContext.contextState.body
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;

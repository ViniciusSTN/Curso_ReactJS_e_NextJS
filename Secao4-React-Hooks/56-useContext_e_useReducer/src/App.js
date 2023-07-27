import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
export const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar titulo');
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef(null);

  return (
    <>
      <h1
        onClick={() =>
          // é possível encapsular em uma função changeTitle(payload) por exemplo para facilitar o uso do componente
          context.dispatch({
            type: actions.CHANGE_TITLE,
            payload: inputRef.current.value,
          })
        }
      >
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;

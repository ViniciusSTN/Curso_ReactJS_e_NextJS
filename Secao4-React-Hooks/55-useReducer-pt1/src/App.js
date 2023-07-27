import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'mudar': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }

    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('Nenhuma action encontrada');
  return { ...state };
};

function App() {
  // dispatch é usado para disparar ações
  // normalmente no dispatch é passado type e payload
  // type -> tipo da ação que será comparada no seitch (action.type)
  // payload -> dados
  // exemplo de uso: adicionar um produto no carrinho de compras -> type: adicionarCarrinho, payload: idDoProduto
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'mudar',
            payload: new Date().toLocaleDateString('pt-br'),
          })
        }
      >
        mudar
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>inverter</button>
      <button onClick={() => dispatch({ type: 'qualquercoisa' })}>
        nenhuma ação
      </button>
    </div>
  );
}

export default App;

import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    console.log('EFFECT', new Date().toLocaleString());
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [state.result, state.error, state.status, run];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [result, error, status, reFetchData] = useAsync(fetchData, true);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }

  if (status === 'pending') {
    return <pre>Loading...</pre>;
  }

  if (status === 'error') {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (status === 'settled') {
    return (
      <>
        <button onClick={handleClick}>Executar</button>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </>
    );
  }

  return <p></p>;
};

export default Home;

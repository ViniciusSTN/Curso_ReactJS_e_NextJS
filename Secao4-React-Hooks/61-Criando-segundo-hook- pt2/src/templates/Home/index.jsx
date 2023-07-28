import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    // url pode ser um objeto com uma url
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false; // evitar possiveis erros caso o usuário saia da pagina enquanto estiver no meio de uma requisição, pois a requisição continuará sendo feita mesmo que o usuário esteja em uma outra página e ocasionará em um erro pois o react tentará atualizar um componente que não existe na tela
    console.log('EFFECT', new Date().toLocaleString());
    console.log(optionsRef.current.headers);

    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (err) {
        if (!wait) {
          setLoading(false);
        }
        throw err;
      }
    };

    fetchData();

    return () => {
      wait = true;
    };
  }, [shouldLoad]);

  return [result, loading];
};

function Home() {
  const [postId, setPostId] = useState('');

  // {} === {}  -> false, por isso quando passa um objeto como parâmetro gera um loop pois o estado alteraria varias vezes, para corrigir isso -> useRef(url) e useRef(options)
  // o problema é que se mudar a headers por exemplo, a referencia não mudará entre as renderizações, pois terá sido criado uma referência em memória do primeiro valor
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        abc: '1',
      },
    },
  );

  // useEffect não poderia vir depois de condicionais com return para funcionar adequadamente
  useEffect(() => {
    console.log('Id do post: ', postId);
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <p onClick={() => handleClick(p.id)} key={p.id}>
              {p.title}
            </p>
          ))
        ) : (
          <p onClick={() => handleClick('')}>{result.title}</p>
        )}
      </div>
    );
  }
}

export default Home;

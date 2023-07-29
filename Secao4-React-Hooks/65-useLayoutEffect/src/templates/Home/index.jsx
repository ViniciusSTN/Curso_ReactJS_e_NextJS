import { useLayoutEffect, useRef, useState } from 'react';

const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  // trocar por useEffect e ver a diferença
  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 1000); // trava o navegador por 1s
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{
          marginTop: '30px',
          height: '300px',
          width: '200px',
          overflowY: 'scroll',
        }}
      >
        {counted.map((c) => {
          return <p key={c}>{c}</p>;
        })}
      </div>
    </>
  );
};

export default Home;

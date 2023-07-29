import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  // trocar por useEffect e ver a diferença
  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 1000); // trava o navegador por 1s
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
};

export default Home;

// passar ref como parâmetro para componente filho, recebe um componente
export const DisplayCounted = forwardRef(function DisplayCounted(
  { counted }, // eslint-disable-line
  ref,
) {
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div
      ref={divRef}
      style={{
        marginTop: '30px',
        height: '300px',
        width: '200px',
        overflowY: 'scroll',
      }}
    >
      {/* eslint-disable-next-line */}
      {counted.map((c) => {
        return (
          <p onClick={handleClick} key={c}>
            {c} + {rand}
          </p>
        );
      })}
    </div>
  );
});

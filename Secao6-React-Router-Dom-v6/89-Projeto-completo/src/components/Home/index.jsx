import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();
  const { state } = location; // no componente Redirect foi enviado um state em navigate

  return (
    <div>
      <h1>Home</h1>
      <p>{state}</p>
    </div>
  );
};

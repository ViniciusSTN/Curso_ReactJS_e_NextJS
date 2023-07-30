import { useCounterContext } from '../../contexts/CounterContext';

const Home = () => {
  const [state, dispatch] = useCounterContext();

  return <h1>Oi</h1>;
};

export default Home;

import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading />

      <div>
        <Button onButtonClick={() => actions.increase()}>Increase</Button>
      </div>
    </div>
  );
};

export default Home;

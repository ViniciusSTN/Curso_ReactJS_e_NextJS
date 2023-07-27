import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setState,
  } = theContext;
  return (
    <p
      onClick={() =>
        setState((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }))
      }
    >
      {body}
    </p>
  );
};

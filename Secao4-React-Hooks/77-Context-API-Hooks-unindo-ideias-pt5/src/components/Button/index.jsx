import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = ({ children, onButtonClick }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
};

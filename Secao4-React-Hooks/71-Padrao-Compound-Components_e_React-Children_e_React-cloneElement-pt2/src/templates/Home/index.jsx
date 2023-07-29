/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOffContext = createContext();

// Compound Components
const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};
const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);

  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

const P = ({ children }) => <p {...s}>{children}</p>;

const Home = () => {
  return (
    <TurnOnOff>
      <div>
        <p>Oi</p>
        <div>
          <TurnedOn>
            <P>Aqui as coisas que vão acontecer quando tiver on</P>
          </TurnedOn>
        </div>
        <TurnedOff>
          <P>Aqui as coisas do OFF</P>
        </TurnedOff>
        <TurnButton {...s} />
      </div>
    </TurnOnOff>
  );
};

export default Home;

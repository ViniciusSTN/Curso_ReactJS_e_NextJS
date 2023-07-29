import { Children, cloneElement } from 'react';

const s = {
  style: {
    fontSize: '60px',
    color: '#f00',
  },
};

// componente pai que passa props para filhos
const Parent = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s });
    return newChild;
  });
};

const Home = () => {
  return (
    <Parent>
      <p>Oi</p>
      <p>Oi 2</p>
    </Parent>
  );
};

export default Home;

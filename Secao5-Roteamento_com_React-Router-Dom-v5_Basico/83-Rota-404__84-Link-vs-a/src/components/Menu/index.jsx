import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <Link to="/">Home</Link>
      <a href="/">Home (a)</a>
      <Link to="/abc">Abc</Link>
      <a href="/abc">Abc (a)</a>
    </nav>
  );
};

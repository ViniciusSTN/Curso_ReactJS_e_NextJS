import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  console.log('Pai renderizou');

  // componente renderiza duas vezes porque é fetch é assincrono
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  // quando clicar no h1, o input recebe o valor do titulo e fica com focus
  // recomendavel usar useRef ao invés de querySelector
  useEffect(() => {
    input.current.focus();
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <p>
        <input
          ref={input} // passando a referência
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleClick} />
          ))
        ) : (
          <p>Carregando...</p>
        );
      }, [posts])}
    </div>
  );
}

export default App;

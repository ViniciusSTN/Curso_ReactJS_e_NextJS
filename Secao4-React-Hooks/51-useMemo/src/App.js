import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div className="post">
      <h1>{post.title}</h1>
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
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou');

  // componente renderiza duas vezes porque é fetch é assincrono
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      {/* como o estado de value está sendo atualizado a cada tecla digitada, o componente todo está sendo renderizado novamente */}
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {/* Se não usar useMemo, os posts todos serão carregados novamente a cada vez que o estado de value for atualizado, nesse caso não tem necessidade */}
      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Carregando...</p>
        );
      }, [posts])}
    </div>
  );
}

export default App;

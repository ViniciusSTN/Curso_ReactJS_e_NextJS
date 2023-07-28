import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

function Home() {
  const [postId, setPostId] = useState('');

  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        abc: '1',
      },
    },
  );

  useEffect(() => {
    console.log('Id do post: ', postId);
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <p onClick={() => handleClick(p.id)} key={p.id}>
              {p.title}
            </p>
          ))
        ) : (
          <p onClick={() => handleClick('')}>{result.title}</p>
        )}
      </div>
    );
  }
}

export default Home;

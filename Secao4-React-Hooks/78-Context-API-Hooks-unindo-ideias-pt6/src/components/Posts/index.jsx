import { useContext, useEffect, useRef } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/ExempleProvider/action';
import { CounterContext } from '../../contexts/ExempleProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>{counterState.counter}</h1>

      <button onClick={() => incrementCounter(counterDispatch)}>Counter +</button>

      <button onClick={() => decrementCounter(counterDispatch)}>Counter -</button>

      <h1>Posts</h1>
      {postsState.loading && <p>Carregando...</p>}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

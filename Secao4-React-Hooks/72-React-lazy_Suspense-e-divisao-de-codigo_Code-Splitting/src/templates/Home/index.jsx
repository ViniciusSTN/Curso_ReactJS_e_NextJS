import { Suspense, lazy, useState } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => import('./lazy-component');

const LazyComponent = lazy(loadComponent);

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};

export default Home;

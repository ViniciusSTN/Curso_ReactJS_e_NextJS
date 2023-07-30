import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(location); // o que mais usa é location.pathname
  console.log(history);

  useEffect(() => {
    setTimeout(function () {
      history.push('/'); // muito usado para redirecionar
    }, 3000);
  }, [history]);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};

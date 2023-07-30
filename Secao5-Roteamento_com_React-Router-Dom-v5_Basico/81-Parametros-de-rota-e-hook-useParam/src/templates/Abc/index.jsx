import { useParams } from 'react-router-dom';

export const Abc = () => {
  // retorna o objeto params
  const { slug, id } = useParams();

  console.log(slug, id);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};

import { useParams, useSearchParams } from 'react-router-dom';

export const Posts = () => {
  const params = useParams();
  console.log(params);

  const { id } = params;
  const [qs, setQs] = useSearchParams();

  // testar: http://localhost:3000/posts/10?page=100&segundo=valor

  return (
    <div>
      <h1>
        {/* é possivel usar get em qs e informar qual a query string, será retornado o valor nesse caso retorna 2 */}
        Post | {`Param: ${id}`} | {`Query string: ${qs.get('segundo')}`}
      </h1>
    </div>
  );
};

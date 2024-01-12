import P from 'prop-types';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

// getStaticProps
export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPages('');
  } catch (err) {
    console.log(err);
  }

  if (!data || data.length !== 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};

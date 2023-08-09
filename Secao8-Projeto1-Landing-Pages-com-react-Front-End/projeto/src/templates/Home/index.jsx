import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';

function App() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages?populate=deep&pagination[pageSize]=1&sort[0]=id:desc',
        );
        const json = await data.json();
        const pageData = mapData(json);

        setData(() => pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    if (isMounted.current) load();

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...mockBase} />;
}

export default App;

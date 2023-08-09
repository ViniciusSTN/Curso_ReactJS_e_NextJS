import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { Base } from '../Base';
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

  const { menu, sections, footer, slug } = data;
  const { links, text, link, srcImg } = menu;

  console.log(sections);

  return (
    <Base links={links} footer={footer} logoData={{ text, link, srcImg }}>
      {sections.map((section, index) => {
        const { component } = section;
        console.log(component);

        const key = `${slug}-${index}`;

        // if (component === 'section.sections-two-columns') {
        //   return <GridTwoColumns key={key} {...section} />;
        // }

        // if (component === 'section.section-grid-text') {
        //   return <GridTwoColumns key={key} {...section} />;
        // }

        // if (component === 'section.section-content') {
        //   return <GridTwoColumns key={key} {...section} />;
        // }

        return <GridTwoColumns key={key} {...section} />;
      })}
    </Base>
  );
}

export default App;

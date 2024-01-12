import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';

import config from '../../config';

import P from 'prop-types';
import Head from 'next/head';

function Home({ data }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
  //   const slug = pathname ? pathname : config.defaultSlug;

  //   const load = async () => {
  //     try {
  //       const data = await fetch(config.url + slug);
  //       const json = await data.json();
  //       const pageData = mapData(json);
  //       setData(pageData[0]);
  //     } catch (e) {
  //       setData(undefined);
  //     }
  //   };

  //   load();
  // }, [location]);

  // useEffect(() => {
  //   if (data === undefined) {
  //     document.title = `Página não encontrada | ${config.siteName}`;
  //   }

  //   if (data && !data.slug) {
  //     document.title = `Carregando... | ${config.siteName}`;
  //   }

  //   if (data && data.title) {
  //     document.title = `${data.title} | ${config.siteName}`;
  //   }
  // }, [data]);

  // if (data && !data.slug) {
  //   return <Loading />;
  // }

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  const fullTitle = `${title} | ${config.siteName}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return <GridTwoColumns key={key} {...section} />;
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }
        })}
      </Base>
    </>
  );
}

export default Home;

Home.propTypes = {
  data: P.array,
};

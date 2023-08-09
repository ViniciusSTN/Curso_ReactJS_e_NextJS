import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = {}) => {
  return pagesData.data.map((data) => {
    const {
      footer_text: footer = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data.attributes;

    return {
      footer,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

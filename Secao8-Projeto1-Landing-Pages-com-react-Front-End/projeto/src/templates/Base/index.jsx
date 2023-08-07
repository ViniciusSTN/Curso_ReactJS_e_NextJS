import P from 'prop-types';
import * as Styled from './styles';

import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Menu } from '../../components/Menu';

export const Base = ({ links = [], logoData, footer, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer>{footer}</Footer>
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footer: P.string.isRequired,
};

import P from 'prop-types';
import { LogoLink } from '../LogoLink';
import { SectionContainer } from '../SectionContainer';
import { NavLinks } from '../NavLinks';
import * as Styled from './styles';

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <SectionContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </SectionContainer>
      </Styled.MenuContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, colordark, as, size, uppercase }) => {
  return (
    <Styled.Title
      colordark={colordark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.defaultProps = {
  colordark: true,
  uppercase: false,
  as: 'h1',
  size: 'big',
};

Heading.propTypes = {
  children: P.node.isRequired,
  colordark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['medium', 'big', 'xlarge', 'xhuge']),
  uppercase: P.bool,
};

import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

// test('renders learn react link', () => {
//   renderTheme(<Home />);
// const { debug } = renderTheme(<Home />);
// const headingContainer = screen.getByRole('heading', {
//   name: 'Hello',
// }).parentElement;
// expect(headingContainer).toHaveStyle({
//   background: theme.colors.primaryBg,
// });
// expect(headingContainer).toMatchSnapshot();
// });

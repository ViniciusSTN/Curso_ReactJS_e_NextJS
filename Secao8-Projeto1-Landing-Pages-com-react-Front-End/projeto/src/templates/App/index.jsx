import { GridText } from '../../components/GridText';
import mock from '../../components/GridText/mock';
import * as Styled from './styles';

function App() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <GridText {...mock} />
      </Styled.Wrapper>
    </div>
  );
}

export default App;

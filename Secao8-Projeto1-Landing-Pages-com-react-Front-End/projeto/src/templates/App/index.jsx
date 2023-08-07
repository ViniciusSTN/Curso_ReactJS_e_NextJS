import { GridText } from '../../components/GridText';
import mock from '../../components/GridText/mock';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import * as Styled from './styles';

function App() {
  return <Base {...mockBase} />;
}

export default App;

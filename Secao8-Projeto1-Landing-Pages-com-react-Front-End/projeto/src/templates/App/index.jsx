import {
  Container,
  Container2,
  Container3,
  Container4,
  H2,
} from '../../styles/global-styles';
import * as Styled from './styles';

function App() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <h1>Hello</h1>
        <Container>
          <H2>Lorem ipsum</H2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga,
          natus pariatur porro dolorum itaque iste nemo, deleniti, tempora quod
          illo quos. Reprehenderit recusandae, illo porro nulla similique earum
          consectetur!
        </Container>
        <Container2 padd="10px">
          <H2>Lorem ipsum</H2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quam
          accusamus autem fugit optio alias harum nam ex, sit quasi eveniet
          magni maxime unde nobis cum sed in, expedita ab!
        </Container2>
        <Container3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ullam reprehenderit facilis mollitia ex eveniet a pariatur aut
          voluptates ea consequatur sequi expedita, perspiciatis possimus
          fugiat, inventore veniam numquam velit!
        </Container3>
        <Container4>
          <H2>Lorem ipsum</H2>
          <div>
            <H2>Lorem ipsum</H2>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          commodi aliquid amet! Suscipit magnam ipsam iusto facilis quis animi
          quas sunt, maxime reiciendis atque nemo alias velit aliquam aspernatur
          corrupti!
        </Container4>
      </Styled.Wrapper>
    </div>
  );
}

export default App;

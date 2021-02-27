import React from 'react';

import { Container, Info, Name } from './styles';

const CardProfile: React.FC = () => (
  <Container>
    <img src="http://github.com/miguel5g.png" alt="User" />

    <Name>Miguel Ângelo</Name>

    <Info>
      <span>Email</span>
      <strong>miguelcg958@gmail.com</strong>
    </Info>

    <Info>
      <span>Idade</span>
      <strong>18 anos</strong>
    </Info>

    <Info>
      <span>Discord</span>
      <strong>Guel#3451</strong>
    </Info>

    <Info>
      <span>Endereço</span>
      <strong>Caruaru-PE, Brasil</strong>
    </Info>
  </Container>
);

export default CardProfile;

import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

import { Button, Container, Title } from './styles';

const Links: React.FC = () => (
  <Container>
    <Title>Links</Title>
    <div>
      <Button href="https://www.linkedin.com/in/miguel5g/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
        LinkedIn
      </Button>
      <Button href="https://github.com/miguel5g" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        Github
      </Button>
      <Button href="https://twitter.com/guel5g" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
        Twitter
      </Button>
    </div>
  </Container>
);

export default Links;

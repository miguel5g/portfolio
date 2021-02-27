import styled from 'styled-components';

import Box from '../Box';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px;

  border-radius: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;

  font-family: 'Comfortaa', cursive;
  font-size: 1.6rem;  
  font-weight: 400;
  text-align: center;
`;

export const Resume = styled.p`
  font-size: 1.3rem;  
  font-weight: 300;
`;

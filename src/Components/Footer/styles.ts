import styled from 'styled-components';

import Box from '../Box';

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 20px;
  padding: 20px;

  color: ${({ theme }) => theme.colors.title};
  font-family: 'Comfortaa', cursive;
  font-size: 1.3rem;  
  font-weight: 600;
`;

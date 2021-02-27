import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.title};
  font-family: 'Comfortaa', cursive;
  font-size: 2rem;  
  font-weight: 600;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;  
  font-weight: 300;
`;

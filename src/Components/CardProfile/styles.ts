import styled from 'styled-components';

import Box from '../Box';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px;

  border-radius: 10px;

  & img {
    width: 164px;
    height: 164px;

    border-radius: 50%;
  }
`;

export const Name = styled.h1`
  margin: 10px 0 20px;

  color: ${({ theme }) => theme.colors.title};
  font-family: 'Comfortaa', cursive;
  font-size: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 15px;

  & span {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  & strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

import styled from 'styled-components';

import Box from '../Box';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px;

  border-radius: 10px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 926px) {
    width: 100%;
    max-width: 500px
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;

  font-family: 'Comfortaa', cursive;
  font-size: 1.6rem;  
  font-weight: 400;
  text-align: center;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;

  padding: 10px 20px;
  margin: 7px;

  border: none;
  border-radius: 25px;
  background: #E5E5E5;
  box-shadow: -7px -7px 26px rgba(255, 255, 255, 1),
              7px 7px 28px rgba(13, 39, 80, 0.26);

  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;
  font-weight: 400;

  transition: all 0.2s, color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.colors.title};

    background: #F5F5F5;
  }

  &:active {
    color: ${({ theme }) => theme.colors.textLight};

    box-shadow: inset -7px -7px 16px rgba(255, 255, 255, 1),
                inset 7px 7px 18px rgba(13, 39, 80, 0.26),
                -7px -7px 26px rgba(255, 255, 255, 1),
                7px 7px 28px rgba(13, 39, 80, 0.26);
  }

  & > svg {
    margin-right: 5px;
  }
`;

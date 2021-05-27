import styled from 'styled-components';
import Box from '../Box';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 60px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.title};
  font-family: 'Comfortaa', cursive;
  font-size: 2rem;  
  font-weight: 600;

  z-index: 1;

  @media (max-width: 926px) {
    text-align: center;
  }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  flex: 1;

  margin: 0 auto;

  @media (max-width: 926px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Project = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 10px;

  & img {
    width: 100%;
    height: 100%;

    border-radius: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    object-fit: cover;
  }

  & > div {
    display: flex;
  }

  @media (max-width: 926px) {
    align-items: center;

    width: 100%;
    max-width: 500px
  }
`;

export const ProjectTitle = styled.strong`
  margin: 10px;
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.3rem;  
  font-weight: 300;

  z-index: 1;
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;

  padding: 10px 20px;
  margin: 0 10px;
  margin-bottom: 10px;

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

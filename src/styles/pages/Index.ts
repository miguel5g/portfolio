import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > main {
    width: 100%;
    max-width: 960px;
    padding: 30px 60px;
  }

  @media (max-width: 926px) {
    & > main {
      padding: 10px 20px;
    }
  }
`;

export const UserContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  & section:not(:first-child) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 60px;
  }

  @media (max-width: 926px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & section, & section:not(:first-child) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

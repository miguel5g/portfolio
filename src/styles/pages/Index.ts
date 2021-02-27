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
`;

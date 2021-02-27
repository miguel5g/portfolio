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

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  width: 72px;
  height: 72px;
  margin-right: 20px;
  margin-bottom: 20px;

  background: url(${({ tech }: { tech: string }) => tech}) no-repeat center;
  background-size: 100% 100%;
`;

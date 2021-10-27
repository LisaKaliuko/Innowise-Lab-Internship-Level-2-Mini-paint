import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin: 15px 0px;
  padding: 5px 10px;
  font-size: 20px;
  background-color: ${(props) => props.theme.buttonsPanel.bg};
  border: 3px solid ${(props) => props.theme.buttonsPanel.border};
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.buttonsPanel.bgHover};
    color: ${(props) => props.theme.buttonsPanel.textHover};
    transition: 0.4s;
  }
`;

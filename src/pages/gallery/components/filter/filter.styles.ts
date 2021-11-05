import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  font-size: 16px;
  margin: 10px;
  padding: 7px;
  border: 2px solid ${(props) => props.theme.gallery.selectBorder};
  border-radius: 10px;
`;

export const Button = styled.button`
  margin: 15px 0px;
  padding: 5px 20px;
  font-size: 20px;
  background-color: ${(props) => props.theme.gallery.buttonBg};
  border: 2px solid ${(props) => props.theme.gallery.buttonBorder};
  border-radius: 15px;

  &:hover {
    background-color: ${(props) => props.theme.gallery.buttonBgHover};
    color: ${(props) => props.theme.gallery.textHover};
    transition: 0.4s;
  }
`;

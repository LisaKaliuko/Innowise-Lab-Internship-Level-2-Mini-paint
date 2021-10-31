import styled from 'styled-components';

export const Menu = styled.nav`
  background-color: ${(props) => props.theme.header.bg};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px 0px;

  a {
    color: ${(props) => props.theme.header.text};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.header.textHover};
    }
  }
`;

export const Title = styled.div`
  a {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const Links = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const LinkItem = styled.li`
  margin: 0px 10px;

  a {
    font-size: 22px;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 23%;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${(props) => props.theme.header.radioBgColor};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${(props) => props.theme.header.toggleColor};
    transition: 0.3s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.header.creativeRadioBgColor};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.3s;
    }
  }
`;

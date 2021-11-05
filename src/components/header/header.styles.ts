import styled from 'styled-components';

import { DEVICES } from '@src/shared/constants/devices-sizes.constants';

export const Menu = styled.nav`
  background: ${(props) => props.theme.header.bg};
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
    display: none;
    font-size: 30px;
    font-weight: 700;

    @media ${DEVICES.tablet} {
      display: inline-block;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const LinkItem = styled.li`
  margin: 0px 10px;

  a {
    font-size: 16px;

    @media ${DEVICES.tablet} {
      font-size: 22px;
    }
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.header.text};
  font-size: 14px;

  span {
    margin-bottom: 5px;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  display: inline-block;
  width: 42px;
  height: 25px;
  border-radius: 15px;
  background: ${(props) => props.theme.header.radioBgColor};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    margin: 3px;
    background: ${(props) => props.theme.header.toggleColor};
    transition: 0.3s;
  }
`;

export const CheckBox = styled.input`
  display: none;

  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.header.creativeRadioBgColor};

    &::after {
      margin-left: 20px;
      transition: 0.3s;
    }
  }
`;

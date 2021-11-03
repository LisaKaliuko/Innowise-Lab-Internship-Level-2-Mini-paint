import styled from 'styled-components';

import { DEVICES } from '@src/shared/constants/devices-sizes.constants';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media ${DEVICES.laptopL} {
    width: 15%;
  }
`;

export const Button = styled.button`
  margin: 15px;
  padding: 5px 10px;
  font-size: 20px;
  width: 140px;
  background-color: ${(props) => props.theme.buttonsPanel.bg};
  border: 3px solid ${(props) => props.theme.buttonsPanel.border};
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.buttonsPanel.bgHover};
    color: ${(props) => props.theme.buttonsPanel.textHover};
    transition: 0.4s;
  }
`;

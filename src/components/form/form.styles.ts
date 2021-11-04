import styled from 'styled-components';

import { DEVICES } from '@src/shared/constants/devices-sizes.constants';

export const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 30px auto auto auto;
`;

export const Form = styled.form`
  width: 90%;
  margin: 10px auto;
  padding: 35px 0px;
  box-shadow: 0 0 10px ${(props) => props.theme.form.shadow};
  border-radius: 10px;
  text-align: center;

  @media ${DEVICES.tablet} {
    width: 55%;
  }

  @media ${DEVICES.laptop} {
    width: 45%;
    padding: 50px 0px;
  }

  @media ${DEVICES.laptopL} {
    width: 35%;
  }

  p {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0px;
  font-size: 30px;

  @media ${DEVICES.laptop} {
    font-size: 40px;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  width: 70%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.form.input};
  border-radius: 10px;
`;

export const Warning = styled.p`
  color: ${(props) => props.theme.warning.text};
  margin: 0px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.form.button};
  width: 75%;
  margin: 7px 0px;
  padding: 7px 25px;
  font-size: 20px;
  color: ${(props) => props.theme.form.buttonText};
  border: 0px;
  border-radius: 7px;

  &:hover {
    background-color: ${(props) => props.theme.form.buttonHover};
    transition: 0.4s;
  }
`;

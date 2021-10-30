import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Form = styled.form`
  width: 30%;
  margin: 30px auto;
  padding: 50px 0px;
  box-shadow: 0 0 10px ${(props) => props.theme.form.shadow};
  border-radius: 10px;
  text-align: center;

  p {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0px;
  font-size: 40px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 25px auto;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 5px 10px;
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

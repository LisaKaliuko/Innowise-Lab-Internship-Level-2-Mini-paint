import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, register } from '@actions/auth.actions';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectAuthErrors } from '@selectors/auth.selectors';
import {
  Container,
  Form,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  Warning,
} from './form.styles';

interface FormComponentProps {
  formType: {
    title: string;
    text: string;
    link: string;
    linkName: string;
  };
}

const FormComponent: FC<FormComponentProps> = ({ formType }): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useTypedSelector(selectAuthErrors);
  const { title, text, link, linkName } = formType;
  const dispatch = useDispatch();

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const enterUser = (e: FormEvent) => {
    e.preventDefault();

    if (title === 'Login') {
      dispatch(login({ email, password }));
    } else if (title === 'Registration') {
      dispatch(register({ email, password }));
    }

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={enterUser}>
        <Title>{title}</Title>
        <p>
          {text}
          <Link to={link}>{linkName}</Link>
        </p>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />
        </InputGroup>
        <Warning>
          {title === 'Login' && errors?.loginError ? errors.loginError : ''}
          {title === 'Registration' && errors?.registerError
            ? errors.registerError
            : ''}
        </Warning>
        <Button type="submit">{title}</Button>
      </Form>
    </Container>
  );
};

export default FormComponent;

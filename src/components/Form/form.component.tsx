import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, register } from '../../core/actions/auth.actions';
import { useTypedSelector } from '../../core/hooks/use.typed.selector';
import { selectAuthErrors } from '../../core/selectors/selectors';
import {
  Form,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  Warning,
} from './styles';

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
    <Form onSubmit={enterUser}>
      <Title>{title}</Title>
      <p>
        {text}
        <Link to={link}>{linkName}</Link>
      </p>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" value={email} onChange={changeEmail} />
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
        {title === 'Login' && errors?.loginError ? errors.loginError : null}
        {title === 'Registration' && errors?.registerError
          ? errors.registerError
          : null}
      </Warning>
      <Button type="submit">{title}</Button>
    </Form>
  );
};

export default FormComponent;

import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { login, register as registration } from '@actions/auth.actions';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectAuthErrors } from '@selectors/auth.selectors';
import { Container, Form, Title, Input, Button, Warning } from './form.styles';

interface FormComponentProps {
  formType: {
    title: string;
    text: string;
    link: string;
    linkName: string;
  };
}

interface FormData {
  email: string;
  password: string;
}

const FormComponent: FC<FormComponentProps> = ({ formType }): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();
  const errors = useTypedSelector(selectAuthErrors);
  const { title, text, link, linkName } = formType;
  const dispatch = useDispatch();

  const enterUser: SubmitHandler<FormData> = (data): void => {
    if (title === 'Login') {
      dispatch(login({ ...data }));
    } else if (title === 'Registration') {
      dispatch(registration({ ...data }));
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(enterUser)}>
        <Title>{title}</Title>
        <p>
          {text}
          <Link to={link}>{linkName}</Link>
        </p>
        <Input
          {...register('email', {
            required: true,
          })}
          placeholder="Email"
        />
        <Input
          type="password"
          {...register('password', {
            required: true,
          })}
          placeholder="Password"
        />
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

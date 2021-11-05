import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { login, register as registration } from '@actions/auth.actions';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectAuthErrors } from '@selectors/auth.selectors';
import {
  Container,
  Form,
  Title,
  Text,
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

interface FormData {
  email: string;
  password: string;
}

const FormComponent: FC<FormComponentProps> = ({ formType }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const serverErrors = useTypedSelector(selectAuthErrors);
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
        <Text>
          {text}
          <Link to={link}>{linkName}</Link>
        </Text>
        <Input
          {...register('email', {
            required: true,
          })}
          placeholder="Email"
        />
        {errors.email && <Warning>Your email is required</Warning>}
        <Input
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/g,
          })}
          placeholder="Password"
        />
        {errors.password?.type === 'required' && (
          <Warning>Your password is required</Warning>
        )}
        {errors.password?.type === 'minLength' && (
          <Warning>Your password must be larger then 7 characters</Warning>
        )}
        {errors.password?.type === 'pattern' && (
          <Warning>
            Your password must have at least one number, one capital letter and
            one lowercase letter
          </Warning>
        )}
        <Warning>
          {title === 'Login' && serverErrors?.loginError
            ? serverErrors.loginError
            : ''}
          {title === 'Registration' && serverErrors?.registerError
            ? serverErrors.registerError
            : ''}
        </Warning>
        <Button type="submit">{title}</Button>
      </Form>
    </Container>
  );
};

export default FormComponent;

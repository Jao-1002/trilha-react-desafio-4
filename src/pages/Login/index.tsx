import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";


import { Container, LoginContainer, Column, Spacing, Title } from "./styles";

import { defaultValues, IFormLogin } from './types'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email('E-mail invalido').required('Campo obrigatorio'),
  password: yup.string().min(6, 'No minimo 6 caracteres').required('Campo obrigatorio'),
}).required();

const Login = () => {


  const { control, formState:{ errors, isValid } } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
  })
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" errorMessage={errors?.email?.message as string}
            placeholder="Email" control={ control }
          />
          <Spacing />
          <Input errorMessage={errors?.password?.message as string} type="password"
            name="password"
            placeholder="Senha" control={ control } 
          />
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;

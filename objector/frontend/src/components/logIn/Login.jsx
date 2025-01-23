"use client";
import { useForm } from "react-hook-form";
import { useLogin } from "./functions/index";
import { useModal } from "../context/context";
import { onSubmit } from "./functions/onSubmit";
import {
  LoginModal,
  LoginModalWrapper,
  CloseButton,
  Form,
  SubmitButton,
  ErrorText,
  SuccessText,
  FormName,
  FormInput,
} from "./styles";

export default function Login() {
  const { isLogInModalOpen, closeLogInModal } = useModal();
  const { register, handleSubmit, reset } = useForm();
  const { handleLogin, loginError, loginSuccess } = useLogin(closeLogInModal);

  if (!isLogInModalOpen) return null;

  return (
    <LoginModal>
      <LoginModalWrapper>
        <CloseButton onClick={closeLogInModal}>×</CloseButton>
        <FormName>Login</FormName>
        <Form
          onSubmit={handleSubmit((data) => onSubmit(data, handleLogin, reset))}
        >
          <FormInput
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          <FormInput
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
        {loginError && <ErrorText>User is not exist</ErrorText>}
        {loginSuccess && (
          <SuccessText>Congrats you are successfully logged in</SuccessText>
        )}
      </LoginModalWrapper>
    </LoginModal>
  );
}

"use client";
import { useForm } from "react-hook-form";
import { useLogin } from "../../_Utils/useLogin";
import { useModal } from "../context";
import { onSubmit } from "../../_Utils/onSubmit";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../validation";
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
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
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <FormInput
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
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

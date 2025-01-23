"use client";
import { useState } from "react";
import { useModal } from "../context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validation/index";
import { useAddUser } from "../../_Utils/addUser";
import { handleSignup } from "../../_Utils/handleSignUp";
import {
  Modal,
  ModalWrapper,
  CloseButton,
  Form,
  SubmitButton,
  ErrorText,
  FormName,
  FormInput,
  SuccessMessage,
} from "./styles";

const Signup = () => {
  const { isSignUpModalOpen, closeSignUpModal } = useModal();
  const { addUser } = useAddUser();
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const handleCloseModal = () => {
    setSuccessMessage("");
    closeSignUpModal();
    reset();
  };

  if (!isSignUpModalOpen) return null;

  return (
    <Modal>
      <ModalWrapper>
        <CloseButton onClick={handleCloseModal}>×</CloseButton>
        <FormName>SIGNUP</FormName>

        <Form
          onSubmit={handleSubmit((data) =>
            handleSignup(
              data,
              addUser,
              handleCloseModal,
              reset,
              setSuccessMessage
            )
          )}
        >
          <FormInput
            placeholder="User name"
            type="text"
            id="userName"
            {...register("userName")}
          />
          {errors.userName && <ErrorText>{errors.userName.message}</ErrorText>}

          <FormInput
            placeholder="email"
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

          <FormInput
            placeholder="password"
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

          <SubmitButton type="submit">Submit</SubmitButton>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </Form>
      </ModalWrapper>
    </Modal>
  );
};

export default Signup;

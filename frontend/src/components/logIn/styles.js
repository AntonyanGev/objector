import styled from "styled-components";

export const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const FormName = styled.h2`
  margin-block: 0.5rem;
`;

export const LoginModalWrapper = styled.div`
  background: #020e2a;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 25rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: red;
`;

export const Form = styled.form`
  display: grid;
  gap: 0.625rem;
`;

export const FormInput = styled.input`
  padding: 0.625rem;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 0.625rem;
  background-color: #0070f3;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export const ErrorText = styled.p`
  color: red;
`;

export const SuccessText = styled.p`
  color: green;
`;

import styled from "styled-components";

export const Modal = styled.div`
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

export const ModalWrapper = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

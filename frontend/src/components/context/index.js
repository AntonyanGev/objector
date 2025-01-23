"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLogInModalOpen, setLogInModalOpen] = useState(false);

  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);

  const openLogInModal = () => setLogInModalOpen(true);
  const closeLogInModal = () => setLogInModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isSignUpModalOpen,
        openSignUpModal,
        closeSignUpModal,
        isLogInModalOpen,
        openLogInModal,
        closeLogInModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

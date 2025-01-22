"use client";
import {
  MainContainer,
  Description,
  SignUpButton,
  PhoneButton,
  ButtonContainer,
  TextContainer,
  MobileImageContainer,
  TextAndButtonsContainer,
  DesktopImageContainer,
  EllipseImage,
  LogoImage,
  ObjectContent,
  Title,
  PhoneIcon,
  MobileImage,
  LogInButton,
} from "./styles";
import { useModal } from "../context/context";

const Main = () => {
  const { openSignUpModal, openLogInModal } = useModal();

  return (
    <MainContainer>
      <TextAndButtonsContainer>
        <TextContainer>
          <Title>CREATE 3D AI GENERATED</Title>
          <ObjectContent>OBJECT</ObjectContent>
        </TextContainer>
        <MobileImageContainer>
          <MobileImage src="images/monologomobile.png" alt="monogram" />
        </MobileImageContainer>
        <Description>
          LOREM IMPUSM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
          EISMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNE ALIQUE.
        </Description>
        <ButtonContainer>
          <SignUpButton onClick={openSignUpModal}>SIGNUP</SignUpButton>
          <LogInButton onClick={openLogInModal}>LOGIN</LogInButton>
          <PhoneButton>
            <PhoneIcon src="images/Phone.png" alt="phone" />
          </PhoneButton>
        </ButtonContainer>
      </TextAndButtonsContainer>
      <DesktopImageContainer>
        <LogoImage src="images/Logo2.png" alt="monogram" />
      </DesktopImageContainer>
    </MainContainer>
  );
};

export default Main;

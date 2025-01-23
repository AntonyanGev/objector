"use client";
import styled from "styled-components";
import { media } from "../brakePoint/mediaQuery";

export const MainContainer = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  padding: 0 1rem;

  ${media(
    "md",
    `
    margin-top: 4.2rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 6rem;
   `
  )};
`;

export const TextAndButtonsContainer = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;

  ${media(
    "md",
    `
   text-align: start;
    align-items: flex-start;
   `
  )};
`;

export const TextContainer = styled.div`
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 400;
`;

export const ObjectContent = styled.h1`
  font-size: clamp(2.5rem, 5vw, 6.375rem);
  font-weight: 600;
  margin: 0;
`;

export const Title = styled.p`
  font-size: clamp(0.8rem, 1.2vw, 1.5rem);
  margin: 0;
  text-align: center;

  ${media(
    "md",
    `
text-align: start;
   `
  )};
`;

export const Description = styled.div`
  color: rgba(255, 255, 255, 0.75);
  padding: 1rem;
  font-size: clamp(0.8rem, 1vw, 1rem);
  font-weight: 300;
  line-height: 1.5rem;
  text-align: center;
  max-width: 34.875rem;
  margin: 0 auto;

  ${media(
    "md",
    `
  padding: 0;
    text-align: start;
   `
  )};
`;

export const MobileImageContainer = styled.div`
  margin: 1.25rem 0;

  ${media(
    "md",
    `
display: none;
   `
  )};
`;

export const MobileImage = styled.img`
  width: 100%;
`;

export const DesktopImageContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  ${media(
    "md",
    `
display: flex;
   `
  )};
`;

export const LogoImage = styled.img`
  max-width: 100%;
  width: clamp(15rem, 50%, 29rem);
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 0.5rem;
  justify-content: center;

  ${media(
    "md",
    `
   justify-content: flex-start;
   `
  )};
`;

export const SignUpButton = styled.button`
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: clamp(0.8rem, 1vw, 1rem);
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
`;

export const LogInButton = styled.button`
  background-color: #fff;
  padding: 1rem 1rem;
  border-radius: 2rem;
  font-size: clamp(0.8rem, 1vw, 1rem);
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
`;

export const PhoneButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;

export const PhoneIcon = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
`;

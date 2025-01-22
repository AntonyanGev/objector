"use client";
import styled from "styled-components";
import { media } from "../brakePoint/mediaQuery";

export const MainContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow-x: hidden;
  align-items: center;

  ${media(
    "md",
    `
     margin-top: 4.1875rem;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;

    margin-left: 6rem;
    margin-right: 6rem;
  `
  )};
`;

export const TextAndButtonsContainer = styled.div`
  max-width: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
  ${media(
    "md",
    `
    text-align: start;
  `
  )};
`;

export const TextContainer = styled.div`
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 400;
`;

export const ObjectContent = styled.h1`
  font-size: 4.375rem;
  align-items: center;
  font-weight: 500;
  margin: 0;

  ${media(
    "md",
    `
    font-size: 5.375rem;
    font-weight: 600;
  `
  )};

  ${media(
    "xl",
    `
   font-size: 9.375rem;
  `
  )};
`;

export const Title = styled.p`
  font-size: 1rem;
  margin: 0;
  text-align: center;
  ${media(
    "md",
    `
    text-align: end;
  `
  )};
`;
export const Description = styled.div`
  color: rgba(255, 255, 255, 0.75);
  padding: 1rem 2.7rem;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5rem;
  text-align: center;
  ${media(
    "sm",
    `
    max-width: 23.875rem;
    display: flex;
    padding: 0;
    text-align: start;
    justify-content: center;
    width: 100%;
  `
  )};

  ${media(
    "md",
    `
    max-width: 20.875rem;
  `
  )};
  ${media(
    "xl",
    `
  max-width: 34.875rem;
  `
  )};
`;

export const MobileImageContainer = styled.div`
  margin: 1.25rem 0;
  ${media(
    "md",
    `
   display: none;
    margin: 0 auto;
  `
  )};
`;

export const MobileImage = styled.img`
  display: block;
  width: 100%;

  ${media(
    "md",
    `
   display: none;
  `
  )};
`;

export const DesktopImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const LogoImage = styled.img`
  display: none;
  position: relative;
  z-index: 1;
  max-width: 100%;

  ${media(
    "md",
    `
   display: block;
    max-width: 29rem;
    width: 100%;
  `
  )};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 0.5rem;

  ${media(
    "md",
    `
   max-width: 21.375rem;
   width:100%
  
  `
  )};

  ${media(
    "xl",
    `
 max-width: 34.875rem;
  `
  )};
`;

export const SignUpButton = styled.button`
  background-color: #fff;
  padding: 1.2rem 4rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
`;

export const LogInButton = styled.button`
  background-color: #fff;
  padding: 0.2rem 1rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
`;

export const PhoneButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const PhoneIcon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  object-fit: cover;
`;

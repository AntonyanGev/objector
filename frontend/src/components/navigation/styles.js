"use client";
import styled from "styled-components";
import Link from "next/link";
import { media } from "../brakePoint/mediaQuery";

export const NavList = styled.li`
  display: none;
  list-style: none;
  ${media(
    "md",
    `
display: block;
  `
  )};
`;

export const StyledLink = styled.p`
  color: white;
  text-decoration: none;
  transition: ease 0.5s;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    font-size: 1.2rem;
  }
`;

export const NavContainer = styled.nav`
  max-width: 99.625rem;
  width: 90%;
  margin-top: 2.5rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 1.9375rem;
  padding-inline: 0.2rem;
  padding-block: 0.3rem;

  ${media(
    "md",
    `
    background-color: rgba(255, 255, 255, 0.15);
  `
  )};
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SingnUP = styled.button`
  display: none;
  ${media(
    "md",
    `
    font-size: 0.8125rem;
    display: block;
    max-width: 8.25rem;
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 2.125rem;
    padding-inline: 1.5rem;
    padding-block: 0.5rem;
    cursor: pointer;
    border: none;
    &:hover {
      color: white;
      background-color: #020e2a;
    }
  `
  )};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const LogIn = styled.h1`
  display: none;

  ${media(
    "md",
    `
      font-size: 1rem;
    font-weight: 500;
    display: block;
    align-self: center;
    width: 100%;
    color: white;
    cursor: pointer;
    border: none;
  `
  )};
`;

export const Logo = styled.img`
  width: 5.3rem;
  margin-left: 1.875rem;

  ${media(
    "md",
    `
  width: 7.4375rem;
  `
  )};
`;

export const Menu = styled.div``;
export const ButtonsWrapper = styled.div`
  border-radius: 1.125rem;
`;
export const MenuButton = styled.img`
  padding-inline: 1.5rem;
  padding-block: 0.5rem;
  display: block;
  cursor: pointer;

  ${media(
    "md",
    `
 display: none;
  `
  )};
`;

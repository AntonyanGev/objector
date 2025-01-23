import styled from "styled-components";
import Link from "next/link";

import { media } from "../../brakePoint/mediaQuery";

export const MenuWrapper = styled.div`
  margin-top: 5rem;
  padding-top: 1rem;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #020e2a;
  border-radius: 0.1rem;
  padding-inline: 1.25rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 60%;
  height: 100svh;
  text-align: start;
  transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};

  a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 0.3rem 0;
    font-size: 1rem;
  }

  ${media(
    "md",
    `
    display: none;
  `
  )};
`;

export const MenuItems = styled(Link)`
  font-size: 1rem;
  transition: ease 0.5s;
  &:hover {
    font-size: 1.3rem;
  }
`;

export const Img = styled.img``;
export const Wrapper = styled.div``;

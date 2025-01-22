"use client";
import { useState } from "react";
import { NavLink } from "../navLists/NavList";
import {
  NavList,
  StyledLink,
  NavContainer,
  NavLinksWrapper,
  SingnUP,
  Logo,
  ButtonsWrapper,
  MenuButton,
  LogIn,
  ButtonsContainer,
} from "./styles";
import BurgerMenu from "../navLists/menuList/index";
import { useModal } from "../context/context";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { openSignUpModal, openLogInModal } = useModal();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <NavContainer>
      {NavLink.map(
        (item, index) =>
          item.isImage && (
            <div key={index}>
              <StyledLink href={item.to}>
                <Logo src={item.img} alt="logo" />
              </StyledLink>
            </div>
          )
      )}
      <NavLinksWrapper>
        {NavLink.map(
          (item, index) =>
            !item.isImage && (
              <NavList key={index}>
                <StyledLink>{item.name}</StyledLink>
              </NavList>
            )
        )}
      </NavLinksWrapper>
      <ButtonsWrapper>
        <MenuButton src="images/Menu.png" alt="menu" onClick={toggleMenu} />
        <ButtonsContainer>
          <LogIn onClick={openLogInModal}>LOGIN</LogIn>
          <SingnUP onClick={openSignUpModal}>SIGNUP</SingnUP>
        </ButtonsContainer>
      </ButtonsWrapper>
      <BurgerMenu open={open} toggleMenu={toggleMenu} />
    </NavContainer>
  );
};

export default Navigation;

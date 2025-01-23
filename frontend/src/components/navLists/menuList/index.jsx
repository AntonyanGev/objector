import { MenuWrapper, Wrapper, MenuItems, MenuItem } from "./styles";
import { NavLink } from "../NavList";

const BurgerMenu = ({ open, toggleMenu }) => {
  return (
    <MenuWrapper open={open}>
      {NavLink.map((link, index) => (
        <Wrapper key={index}>
          <MenuItems href={link.to} onClick={toggleMenu}>
            {link.name}
          </MenuItems>
        </Wrapper>
      ))}
    </MenuWrapper>
  );
};

export default BurgerMenu;

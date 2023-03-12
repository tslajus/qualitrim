import { useState } from "react";
import { HamburgerButton, Button } from "@/components";

type Props = {
  links: React.ReactNode;
  button: string;
};

function NavMobile({ links, button }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="menu-btn-container" onClick={toggleMenu}>
        <HamburgerButton isMenuOpen={isMenuOpen} />
      </div>

      {isMenuOpen && (
        <div className="header__mobile">
          <div className="header__mobile-links">{links}</div>
          <Button>{button}</Button>
        </div>
      )}
    </>
  );
}

export default NavMobile;

import { useState } from "react";
import { scrollToId } from "@/utils";
import { HamburgerButton, Button } from "@/components";

type Props = {
  links: React.ReactNode;
  button: ScrollBtn;
};

function NavMobile({ links, button }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="menu-btn-container" onClick={toggleMenu}>
        <HamburgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {isMenuOpen && (
        <nav className="header__mobile">
          <div className="header__mobile-links">{links}</div>
          <Button onClick={() => scrollToId(button.scrollTo)}>
            {button.text}
          </Button>
        </nav>
      )}
    </>
  );
}

export default NavMobile;

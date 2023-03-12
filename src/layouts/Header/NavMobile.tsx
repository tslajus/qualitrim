import data from "@/data/navData.json";
import { useState } from "react";
import { HamburgerButton, Button } from "@/components";

type Props = {
  links: React.ReactNode;
};

function NavMobile({ links }: Props) {
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
          <Button>{data.CTA}</Button>
        </div>
      )}
    </>
  );
}

export default NavMobile;

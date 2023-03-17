import { useState, useRef, useEffect } from "react";
import { scrollToId } from "@/utils";
import { HamburgerButton, Button } from "@/components";

type Props = {
  links: React.ReactNode;
  button: ScrollBtn;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavMobile({ links, button, isMenuOpen, setIsMenuOpen }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      !menuRef.current?.contains(target) &&
      !buttonRef.current?.contains(target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="menu-btn-container" ref={buttonRef} onClick={toggleMenu}>
        <HamburgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {isMenuOpen && (
        <nav className="header__mobile" ref={menuRef}>
          <div className="header__mobile-links">{links}</div>

          <Button onClick={() => handleLinkClick(button.scrollTo)}>
            {button.text}
          </Button>
        </nav>
      )}
    </>
  );
}

export default NavMobile;

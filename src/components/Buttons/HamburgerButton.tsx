type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

function HamburgerButton({ isMenuOpen, toggleMenu }: Props) {
  return (
    <button
      className="menu-btn"
      aria-expanded={isMenuOpen}
      aria-label="Toggle Menu"
      onClick={toggleMenu}
    >
      <div
        className={`menu-btn__hamburger ${
          isMenuOpen && "menu-btn__hamburger--open"
        }`}
      ></div>
    </button>
  );
}

export default HamburgerButton;

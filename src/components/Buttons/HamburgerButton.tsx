type Props = { isMenuOpen: boolean };

function HamburgerButton({ isMenuOpen }: Props) {
  return (
    <div className="menu-btn">
      <div
        className={`menu-btn__hamburger ${
          isMenuOpen && "menu-btn__hamburger--open"
        }`}
      ></div>
    </div>
  );
}

export default HamburgerButton;

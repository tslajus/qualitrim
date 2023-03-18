import data from "@/data/navData.json";
import { useState, useContext } from "react";
import { PageContext } from "@/context/PageContext";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { useOnTopState, scrollToId, onEnterViewport } from "@/utils";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Logo } from "@/components";

function Header() {
  const { selectedSection, setSelectedSection } = useContext(PageContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = data.navLinks;

  const handleLinkClick = (id: string) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };
  const renderedLinks = navLinks.map((link: Link) => (
    <button
      onClick={() => handleLinkClick(link.id)}
      key={link.id}
      className={`link ${link.id === selectedSection && "link--active"}`}
    >
      {link.name}
    </button>
  ));

  const ids = [...navLinks.map((navLink) => navLink.id), "contact-us"];
  ids.forEach((id) => onEnterViewport(id, () => setSelectedSection(id)));

  const tabLand = portSize.tabLand;
  const isSmallScreen = useMediaQuery(tabLand);
  const onTop = useOnTopState();

  const renderedNav = isSmallScreen ? (
    <NavMobile
      links={renderedLinks}
      button={data.CTA}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
  ) : (
    <NavDesktop links={renderedLinks} button={data.CTA} />
  );

  return (
    <header className={`header ${!onTop ? "header--on-scroll" : ""}`}>
      <Logo />
      {renderedNav}
    </header>
  );
}

export default Header;

import data from "@/data/navData.json";
import { useState } from "react";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { useOnTopState, scrollToId, onEnterViewport } from "@/utils";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Logo } from "@/components";

function Header() {
  const [selectedSection, setSelectedSection] = useState("home");

  const navLinks = data.navLinks;
  const renderedLinks = navLinks.map((link: Link) => (
    <div
      onClick={() => scrollToId(link.id)}
      key={link.id}
      className={`link ${link.id === selectedSection && "link--active"}`}
    >
      {link.name}
    </div>
  ));

  const ids = [...navLinks.map((navLink) => navLink.id), "contact-us"];
  ids.forEach((id) => onEnterViewport(id, () => setSelectedSection(id)));

  const tabLand = portSize.tabLand;
  const isSmallScreen = useMediaQuery(tabLand);
  const onTop = useOnTopState();

  const renderedNav = isSmallScreen ? (
    <NavMobile links={renderedLinks} button={data.CTA} />
  ) : (
    <NavDesktop links={renderedLinks} button={data.CTA} />
  );

  return (
    <div className={`header ${!onTop ? "header--on-scroll" : ""}`}>
      <Logo />
      {renderedNav}
    </div>
  );
}

export default Header;

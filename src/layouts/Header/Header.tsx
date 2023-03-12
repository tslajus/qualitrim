import data from "@/data/navData.json";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { useOnTopState } from "@/utils";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Logo } from "@/components";

function Header() {
  const tabLand = portSize.tabLand;
  const navLinks = data.navLinks;

  const isSmallScreen = useMediaQuery(tabLand);
  const onTop = useOnTopState();

  const renderedLinks = navLinks.map((link: Link) => (
    <div key={link.id} className="link">
      {link.name}
    </div>
  ));

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

import data from "@/data/navData.json";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { useOnTopState, scrollToId } from "@/utils";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Logo } from "@/components";

const navLinks = data.navLinks;

const renderedLinks = navLinks.map((link: Link) => (
  <div onClick={() => scrollToId(link.id)} key={link.id} className="link">
    {link.name}
  </div>
));

function Header() {
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

export { renderedLinks };
export default Header;

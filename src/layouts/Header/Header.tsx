import data from "@/data/navData.json";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { useOnTopState } from "@/utils";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Logo } from "@/components";

type Props = {};

function Header({}: Props) {
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
    <NavMobile links={renderedLinks} />
  ) : (
    <NavDesktop links={renderedLinks} />
  );

  return (
    <div className={`header ${!onTop ? "header--on-scroll" : ""}`}>
      <div className="header__inner">
        <Logo />

        {renderedNav}
      </div>
    </div>
  );
}

export default Header;

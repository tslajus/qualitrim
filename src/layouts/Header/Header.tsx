import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Logo } from "@/components";
import { useMediaQuery, usePageContext } from "@/hooks";

type Props = {};

function Header({}: Props) {
  const { tabLand } = usePageContext("portSize");
  const navLinks = usePageContext("navLinks");

  const isSmallScreen = useMediaQuery(tabLand);

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
    <div className="header">
      <div className="header__inner">
        <div className="logo">
          <Logo />
        </div>
        {renderedNav}
      </div>
    </div>
  );
}

export default Header;
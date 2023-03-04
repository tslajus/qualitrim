import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useMediaQuery, usePageContext } from "@/hooks";

type Props = {};

function Header({}: Props) {
  const { tabLand } = usePageContext("portSize");

  const isSmallScreen = useMediaQuery(tabLand);
  const renderedHeader = isSmallScreen ? <HeaderMobile /> : <HeaderDesktop />;

  return renderedHeader;
}

export default Header;

import { useMediaQuery } from "@/hooks";
import { usePageContext } from "@/hooks";

type Props = {};

function HomeIllustration({}: Props) {
  const { mobile, tabPort, tabLand, desktopSmall, desktopBig } =
    usePageContext("portSize");
  const isMobile = useMediaQuery(mobile);
  const isTabPort = useMediaQuery(tabPort);
  const isTabLand = useMediaQuery(tabLand);
  const isDesktopSmall = useMediaQuery(desktopSmall);
  const isDesktopBIg = useMediaQuery(desktopBig);

  const renderedImg = (
    <img src="src\assets\home\home_img_720.png" alt="bearded man" />
  );

  return <div className="home__asset">{renderedImg}</div>;
}

export default HomeIllustration;

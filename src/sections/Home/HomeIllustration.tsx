import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";

type Props = {};

function HomeIllustration({}: Props) {
  const isMobile = portSize.mobile;
  const isTabPort = portSize.tabPort;
  const isTabLand = portSize.tabLand;
  const isDesktopSmall = portSize.desktopSmall;
  const isDesktopBIg = portSize.desktopBig;

  const renderedImg = (
    <img src="src\assets\home\home_img_720.png" alt="bearded man" />
  );

  return <div className="home__asset">{renderedImg}</div>;
}

export default HomeIllustration;

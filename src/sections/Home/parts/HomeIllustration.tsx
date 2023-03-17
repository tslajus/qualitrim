import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";

function HomeIllustration() {
  const isDesktopBig = useMediaQuery(portSize.desktopBig);

  const renderedImg = (
    <img
      src={`src/assets/home/home_img_${isDesktopBig ? "720" : "1080"}.png`}
      alt="bearded man"
    />
  );

  return <div className="home__asset">{renderedImg}</div>;
}

export default HomeIllustration;

import data from "@/data/navData.json";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import FooterBrand from "./parts/FooterBrand";
import FooterContacts from "./parts/FooterContacts";
import FooterNav from "./parts/FooterNav";

function Footer() {
  const isSmallScreen = useMediaQuery(portSize.desktopBig);
  const isMobile = useMediaQuery(portSize.tabPort);

  return (
    <footer className="footer">
      <FooterBrand data={data} />
      {!isMobile && <FooterContacts data={data} />}

      {!isSmallScreen && <FooterNav data={data} />}
    </footer>
  );
}

export default Footer;

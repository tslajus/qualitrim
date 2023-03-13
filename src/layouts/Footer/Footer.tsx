import data from "@/data/navData.json";
import FooterBrand from "./parts/FooterBrand";
import FooterContacts from "./parts/FooterContacts";
import FooterNav from "./parts/FooterNav";

function Footer() {
  return (
    <div className="footer">
      <FooterBrand data={data} />
      <FooterContacts data={data} />
      <FooterNav data={data} />
    </div>
  );
}

export default Footer;

import FooterContacts from "./FooterContacts";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import {
  AiFillFacebook as IconFB,
  AiFillInstagram as IconInsta,
  AiFillLinkedin as IconLinkedIn,
  AiFillTwitterCircle as IconTwitter,
  AiFillYoutube as IconYoutube,
} from "react-icons/ai";
import { Logo } from "@/components";

function FooterBrand({ data }: NavData) {
  const isSmallScren = useMediaQuery(portSize.tabPort);
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer__brand paragraph paragraph--light color--primary">
      <div className="footer__social">
        <Logo />

        <div className="footer__icons">
          <a href="#">
            <IconFB /> <span className="sr-only">Facebook</span>
          </a>

          <a href="#">
            <IconInsta />
            <span className="sr-only">Instagram</span>
          </a>

          <a href="#">
            <IconTwitter />
            <span className="sr-only">Twitter</span>
          </a>

          <a href="#">
            <IconLinkedIn /> <span className="sr-only">LinkedIn</span>
          </a>

          <a href="#">
            <IconYoutube /> <span className="sr-only">Youtube</span>
          </a>
        </div>
      </div>

      {isSmallScren ? (
        <FooterContacts data={data} />
      ) : (
        <p className="paragraph paragraph--light color--primary">
          {data.tagline}
        </p>
      )}

      <span>{`© ${currentYear} ${data.name} All Rights Reserved.`}</span>
    </div>
  );
}

export default FooterBrand;

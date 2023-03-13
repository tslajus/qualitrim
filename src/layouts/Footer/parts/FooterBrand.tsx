import {
  AiFillFacebook as IconFB,
  AiFillInstagram as IconInsta,
  AiFillLinkedin as IconLinkedIn,
  AiFillTwitterCircle as IconTwitter,
  AiFillYoutube as IconYoutube,
} from "react-icons/ai";
import { Logo } from "@/components";

function FooterBrand({ data }: NavData) {
  return (
    <div className="footer__brand paragraph paragraph--light color--primary">
      <div className="footer__social">
        <Logo />
        <div className="footer__icons">
          <IconFB />
          <IconInsta />
          <IconTwitter />
          <IconLinkedIn />
          <IconYoutube />
        </div>
      </div>
      <span className="paragraph paragraph--light color--primary">
        {data.tagline}
      </span>
      <span>{`© ${data.name} All Rights Reserved.`}</span>
    </div>
  );
}

export default FooterBrand;

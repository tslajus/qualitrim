import data from "@/data/navData.json";
import {
  AiFillFacebook as IconFB,
  AiFillInstagram as IconInsta,
  AiFillLinkedin as IconLinkedIn,
  AiFillTwitterCircle as IconTwitter,
  AiFillYoutube as IconYoutube,
} from "react-icons/ai";
import { Logo } from "@/components";

type Props = {};

function Footer({}: Props) {
  const renderedLinks = data.navLinks.map((link: Link) => {
    return (
      <div key={link.id} className="link">
        {link.name}
      </div>
    );
  });

  return (
    <div className="footer paragraph paragraph--light color--primary">
      <div className="footer__brand">
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

      <div className="footer__contacts paragraph paragraph--light color--primary">
        <span className="link link--no-hover">{data.contacts.heading}</span>
        <span>{data.contacts.adress}</span>
        <div className="footer__contacts--links ">
          <a href={`tel:${data.contacts.number}`}>{data.contacts.number}</a>
          <a href={`mailto:${data.contacts.email}`}>{data.contacts.email}</a>
        </div>
      </div>

      <div className="footer__navigation">{renderedLinks}</div>
    </div>
  );
}

export default Footer;

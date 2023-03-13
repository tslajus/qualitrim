import { scrollToId } from "@/utils";

function FooterNav({ data }: NavData) {
  const renderedLinks = data.navLinks.map((link: Link) => {
    return (
      <div
        onClick={() => {
          scrollToId(link.id);
        }}
        key={link.id}
        className="link"
      >
        {link.name}
      </div>
    );
  });

  return <div className="footer__navigation ">{renderedLinks}</div>;
}

export default FooterNav;

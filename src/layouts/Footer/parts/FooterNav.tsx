import { scrollToId } from "@/utils";

function FooterNav({ data }: NavData) {
  const renderedLinks = data.navLinks.map((link: Link) => {
    return (
      <button
        onClick={() => {
          scrollToId(link.id);
        }}
        key={link.id}
        className="link"
      >
        {link.name}
      </button>
    );
  });

  return <nav className="footer__navigation ">{renderedLinks}</nav>;
}

export default FooterNav;

import { usePageContext } from "@/hooks";
import { Button } from "@/components";
type Props = {
  links: React.ReactNode;
};

function NavDesktop({ links }: Props) {
  const navLinks = usePageContext("navLinks");

  return (
    <div className="header__desktop">
      <div className="header__desktop-links">{links}</div>
      <Button>Get in touch</Button>
    </div>
  );
}

export default NavDesktop;

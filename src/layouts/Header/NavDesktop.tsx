import { usePageContext } from "@/hooks";
import { Button } from "@/components";
import data from "@/data/navData.json";

type Props = {
  links: React.ReactNode;
};

function NavDesktop({ links }: Props) {
  const navLinks = usePageContext("navLinks");

  return (
    <div className="header__desktop">
      <div className="header__desktop-links">{links}</div>
      <Button>{data.CTA}</Button>
    </div>
  );
}

export default NavDesktop;

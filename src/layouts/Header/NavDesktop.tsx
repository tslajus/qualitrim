import data from "@/data/navData.json";
import { Button } from "@/components";

type Props = {
  links: React.ReactNode;
};

function NavDesktop({ links }: Props) {
  return (
    <div className="header__desktop">
      <div className="header__desktop-links">{links}</div>
      <Button>{data.CTA}</Button>
    </div>
  );
}

export default NavDesktop;

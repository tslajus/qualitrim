import { Button } from "@/components";

type Props = {
  links: React.ReactNode;
  button: string;
};

function NavDesktop({ links, button }: Props) {
  return (
    <div className="header__desktop">
      <div className="header__desktop-links">{links}</div>
      <Button>{button}</Button>
    </div>
  );
}

export default NavDesktop;

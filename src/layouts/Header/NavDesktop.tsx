import { Button } from "@/components";
import { scrollToId } from "@/utils";

type Props = {
  links: React.ReactNode;
  button: ScrollBtn;
};

function NavDesktop({ links, button }: Props) {
  return (
    <div className="header__desktop">
      <div className="header__desktop-links">{links}</div>
      <Button onClick={() => scrollToId(button.scrollTo)}>{button.text}</Button>
    </div>
  );
}

export default NavDesktop;

import { usePageContext } from "@/hooks";

type Props = {};

function HeaderDesktop({}: Props) {
  const navLinks = usePageContext("navLinks");

  return <div className="header_container">HeaderDesktop</div>;
}

export default HeaderDesktop;

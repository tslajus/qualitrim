import { usePageContext } from "@/hooks";

type Props = {};

function HeaderMobile({}: Props) {
  const navLinks = usePageContext("navLinks");
  return <div>HeaderMobile</div>;
}

export default HeaderMobile;

import { makeUpperCase } from "@/utils";
import data from "@/data/navData.json";

type Props = {};

const logo = makeUpperCase(data.name);

function Logo({}: Props) {
  return <div className="logo">{logo} </div>;
}

export default Logo;

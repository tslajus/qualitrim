import { makeUpperCase } from "@/utils";
import data from "@/data/navData.json";

const logo = makeUpperCase(data.name);

function Logo() {
  return <div className="logo">{logo} </div>;
}

export default Logo;

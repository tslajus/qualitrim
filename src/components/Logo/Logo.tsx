import { makeUpperCase } from "@/utils";
import data from "@/data/navData.json";

type Props = {};

const logo = makeUpperCase(data.logo);

function Logo({}: Props) {
  return <div>{logo} </div>;
}

export default Logo;

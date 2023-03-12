import data from "@/data/navData.json";
import { makeUpperCase, scrollToId } from "@/utils";

const logo = makeUpperCase(data.name);

function Logo() {
  return (
    <div onClick={() => scrollToId("home")} className="logo">
      {logo}
    </div>
  );
}

export default Logo;

import data from "@/data/homeData.json";
import HomeTextBox from "./parts/HomeTextBox";
import HomeIllustration from "./parts/HomeIllustration";

function Home() {
  return (
    <div className="home">
      <HomeTextBox data={data} />
      <HomeIllustration />
    </div>
  );
}

export default Home;

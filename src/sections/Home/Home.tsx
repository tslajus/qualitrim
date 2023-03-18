import data from "@/data/homeData.json";
import HomeTextBox from "./parts/HomeTextBox";
import HomeIllustration from "./parts/HomeIllustration";

function Home() {
  return (
    <section id="home" className="home">
      <HomeTextBox data={data} />

      <HomeIllustration />
    </section>
  );
}

export default Home;

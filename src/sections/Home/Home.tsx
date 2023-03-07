import HomeTextBox from "./HomeTextBox";
import HomeIllustration from "./HomeIllustration";

type Props = {};

function Home({}: Props) {
  return (
    <div className="home">
      <div className="home__container">
        <HomeTextBox />
        <HomeIllustration />
      </div>
    </div>
  );
}

export default Home;

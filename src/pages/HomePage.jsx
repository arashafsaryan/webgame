import GameTrailers from "../components/GameTrailers";
import Header from "../components/Header";
import LatestArticles from "../components/LatestArticles";
import NewGame from "../components/NewGame";
import Review from "../components/Review";

const HomePage = () => {
  return (
    <>
      <Header />
      <NewGame />
      <LatestArticles />
      <Review />
      <GameTrailers />
    </>
  );
};

export default HomePage;

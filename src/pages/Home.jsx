import PageTransition from "../components/PageTransition";
import Video from "../components/Video";

const Home = () => {
  return (
    <PageTransition>
      <div className="relative without">
        <Video />
      </div>
    </PageTransition>
  );
};

export default Home;

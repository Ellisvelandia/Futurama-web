import PageTransition from "../components/PageTransition";
import Video from "../components/Video";

const Home = () => {
  return (
    <PageTransition>
      <div className="relative without">
        <div
          className="w-full h-full object-fill flex__center"
          style={{ background: "rgba(0,0,0,0.40)" }}
        >
          <Video />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;

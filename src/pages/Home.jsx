import BannerContent from "../Components/BannerContent";
import BannerImg from "../Components/BannerImg";
import Skills from "./Skills";
import About from "./About";

const Home = () => {
  return (
    <div className="min-h-[70vh] px-6">
      {/* hero section */}
      <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-12 lg:gap-80 my-8 ">
        <BannerContent />
        <BannerImg />
      </div>
      {/* About me */}
      <About />
      {/* skills */}
      <Skills/>
    </div>
  );
};

export default Home;

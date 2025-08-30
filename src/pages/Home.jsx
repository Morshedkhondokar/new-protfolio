import BannerContent from "../Components/BannerContent";
import BannerImg from "../Components/BannerImg";

const Home = () => {
  return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-12 lg:gap-80 my-8">
            <BannerContent />
            <BannerImg />
        </div>
        </div>
  );
};

export default Home;

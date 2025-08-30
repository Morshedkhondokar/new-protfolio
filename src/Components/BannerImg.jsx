const BannerImg = () => {
  return (
    <div 
    className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden flex items-center 
    justify-center bg-gray-200 shadow-lg  float-shadow border-2 border-[#cc1150]"
    >
      <img
        src="/images/bannerImg.png"
        alt="Morshed"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BannerImg;

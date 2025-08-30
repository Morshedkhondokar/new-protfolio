import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-3">
      {/* Facebook */}
      <div
        data-aos="fade-up"
        className="p-2 border-2 border-[#cc1150] text-[#cc1150] rounded-full 
        hover:bg-[#cc1150] hover:text-white 
        hover:shadow-[0_0_12px_#cc1150] 
        transform hover:scale-110 
        transition-all duration-300 cursor-pointer"
      >
        <FaFacebookF size={16} />
      </div>

      {/* Instagram */}
      <div
        data-aos="fade-down"
        className="p-2 border-2 border-[#cc1150] text-[#cc1150] rounded-full 
        hover:bg-[#cc1150] hover:text-white 
        hover:shadow-[0_0_12px_#cc1150] 
        transform hover:scale-110 
        transition-all duration-300 cursor-pointer"
      >
        <FaInstagram size={16} />
      </div>

      {/* Github */}
      <div
        data-aos="fade-right"
        className="p-2 border-2 border-[#cc1150] text-[#cc1150] rounded-full 
        hover:bg-[#cc1150] hover:text-white 
        hover:shadow-[0_0_12px_#cc1150] 
        transform hover:scale-110 
        transition-all duration-300 cursor-pointer"
      >
        <FaGithub size={16} />
      </div>

      {/* LinkedIn */}
      <div
        data-aos="fade-left"
        className="p-2 border-2 border-[#cc1150] text-[#cc1150] rounded-full 
        hover:bg-[#cc1150] hover:text-white 
        hover:shadow-[0_0_12px_#cc1150] 
        transform hover:scale-110 
        transition-all duration-300 cursor-pointer"
      >
        <FaLinkedinIn size={16} />
      </div>
    </div>
  );
};

export default SocialIcons;

import { Typewriter } from "react-simple-typewriter";
import "animate.css";
import SocialIcons from "./SocialIcons";


const BannerContent = () => {
  return (
    <div className="space-y-6 max-w-md lg:mt-12">
      {/* Greeting */}
      <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold">
        Hi, I’m <span className="text-[#cc1150] md:ml-2 ">Morshed</span>
      </h1>

      {/* Typing animation for role */}
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-xl md:text-3xl font-semibold mt-2 text-[#cc1150]"
      >
        <Typewriter
          words={[
            "Front-End Web Developer...",
            "React Developer...",
            "Building Modern Web Apps...",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Short Description */}
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-gray-600 dark:text-gray-300"
      >
        I build responsive and interactive web applications with React and
        Tailwind CSS, focusing on clean design and smooth user experience.
      </p>

      {/* CTA Buttons */}
      <div data-aos="fade-up" data-aos-delay="600" className="flex gap-4 flex-wrap">
        <button className="btnIo2 bg-[#cc1150]">View Projects</button>
        <button className="btnIo border-[#cc1150] text-[#cc1150] bg-base-200">Download CV</button>
      </div>
      {/* social icons */}
      <div className="">
        <SocialIcons/>
      </div>
    </div>
  );
};

export default BannerContent;

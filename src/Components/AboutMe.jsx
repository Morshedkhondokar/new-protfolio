const AboutMe = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse  md:justify-between items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-[#cc1150] border-b-2 rounded-2xl pb-1.5 w-48 text-center ">About Me</h2>
          <p className="text-[#b1b5bc] text-lg leading-relaxed md:leading-loose ">
            I am a passionate Front-End Web Developer specializing in React and
            Tailwind CSS. I build modern, responsive, and interactive web
            applications focusing on clean design and smooth user experience.
            I love creating visually appealing interfaces and seamless user
            experiences. My goal is to bring creative ideas to life and provide
            users with an enjoyable browsing experience.
          </p>

          <div className="flex gap-4 flex-wrap">
            {/* <button className="btnIo2 bg-[#cc1150]">My Work</button> */}
            <button className="btnIo border-[#cc1150] text-[#cc1150] bg-white">
              Contact Me
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className="lg:w-1/2 flex justify-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl  overflow-hidden flex items-center justify-center shadow-lg border-2 border-[#cc1150] float-shadow">
            <img
              src="/images/bannerImg.png"
              alt="About Morshed"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

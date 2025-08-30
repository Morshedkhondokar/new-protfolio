

const ContactForm = () => {

    const handleSubmit =(e)=>{
        e.preventDefault();
        e.target.reset()
    }
  return (
    <section className="py-16  lg:px-20 text-white" id="contact">
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Left Side - Form */}
        <div
          data-aos="fade-right"
          className="flex-1 bg-gray-800 w-full p-8 rounded-xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:shadow-lg focus:shadow-[#cc1150] focus:border-[#cc1150]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:shadow-lg focus:shadow-[#cc1150] focus:border-[#cc1150]"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:shadow-lg focus:shadow-[#cc1150] focus:border-[#cc1150]"
            ></textarea>
            <button className="mt-2 p-3 bg-[#cc1150]  font-semibold rounded-md cursor-pointer">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Text */}
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#cc1150] text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 leading-relaxed px-1.5 text-center">
            Need a skilled web developer for a modern, responsive web app? I’m
            available for hire and ready to bring your ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

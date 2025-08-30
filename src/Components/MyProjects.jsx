import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    desc: "A modern online store with product listing, cart, and checkout features using React and Context API.",
    img: "/images/projects1.png", 
    live: "https://merry-lokum-887fc6.netlify.app/",
  },
 {
    id: 2,
    title: "Cricket Website - Buy Player",
    desc: "A cricket web app to browse and buy players, built with React and Tailwind CSS for a smooth UI.",
    img: "/images/project2.png", 
    live: "http://BuyCricketPlayer.surge.sh",
  },
  {
    id: 3,
    title: "Pet Adoption App",
    desc: "A pet adoption app fetching data from API with search and filter options for a smooth user experience.",
    img: "/images/projects3.png",
    live: "https://morshedkhondokar.github.io/Assignment-6/",
  },
];

const MyProjects = () => {
  return (
    <section className="py-16 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold  mb-6 text-[#cc1150]
           border-b-2 rounded-2xl pb-1.5 w-56 mx-auto"
        >
          My Projects
        </h2>
        <p 
          data-aos="fade-up" 
          className="text-[#b1b5bc] mt-4 max-w-2xl mx-auto"
        >
          Here are some of my recent projects showcasing my skills in building modern and user-friendly web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="zoom-in"
            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Project Image */}
           <div className="p-2 ">
             <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl"
            />
           </div>
            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#cc1150]">
                {project.title}
              </h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Live Button */}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#cc1150] text-white font-semibold hover:bg-[#a50e40] transition"
              >
                <ExternalLink size={18} /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;

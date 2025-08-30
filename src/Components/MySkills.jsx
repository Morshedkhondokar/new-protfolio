import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E34F26] text-5xl" />,
    aos: "fade-up",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#1572B6] text-5xl" />,
    aos: "fade-up",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-[#F7DF1E] text-5xl" />,
    aos: "fade-up",
  },
  {
    name: "React",
    icon: <FaReact className="text-[#61DBFB] text-5xl" />,
    aos: "fade-up",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8] text-5xl" />,
    aos: "fade-up",
  },
  {
    name: "Git/GitHub",
    icon: <FaGitAlt className="text-[#F05032] text-5xl" />,
    aos: "fade-up",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28] text-5xl" />,
    aos: "fade-up",
  },
];

const MySkills = () => {
  return (
    <section className="py-16  " id="skills">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold  mb-6 text-[#cc1150]
           border-b-2 rounded-2xl pb-1.5 w-48 mx-auto"
        >
          My Skills
        </h2>
        <p
          data-aos="fade-up"
          className="text-[#b1b5bc] text-lg leading-relaxed lg:px-34  text-center mb-12"
        >
          I specialize in modern web development technologies and frameworks. My
          focus is on building responsive, user-friendly, and high-performance
          web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos={skill.aos}
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition"
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-700">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;

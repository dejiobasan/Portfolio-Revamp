import { Link } from "react-router-dom";
import EcommerceImage from "../Images/Ecommerce.png";
import pft from "../Images/personalFinanceTracker.png";
import afb from "../Images/afb.png";
import coophub from "../Images/coophub.png";
import fms from "../Images/fms.png";
import heza from "../Images/heza.png";
import mrtb from "../Images/mrtb.png";
import sara from "../Images/sara.png";
import shecan from "../Images/shecan.png";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Health Zone Africa",
      image: heza,
      tags: ["NextJS", "Tailwind", "TypeScript"],
      link: "",
    },
    {
      title: "Fraud Management System",
      image: fms,
      tags: ["React", "TypeScript"],
      link: "https://github.com/FMS-Frontend/fms",
    },
    {
      title: "Alat for Business",
      image: afb,
      tags: ["React", "tailwindCSS", "JavaScript"],
      link: "https://business.alat.ng/",
    },
    {
      title: "CoopHub",
      image: coophub,
      tags: ["NextJS", "tailwindCSS", "TypeScript"],
      link: "https://coophub.alat.ng/",
    },
    {
      title: "E-commerce Application",
      image: EcommerceImage,
      tags: ["React", "NodeJS", "TypeScript", "MongoDB"],
      link: "https://rhos-essence-and-more.vercel.app/",
    },
    {
      title: "Personal Finance Tracker",
      image: pft,
      tags: ["React", "NodeJS", "TypeScript", "MongoDB"],
      link: "https://personal-finance-tracker-gules-pi.vercel.app/",
    },
    {
      title: "MRTB License Renewal Portal",
      image: mrtb,
      tags: ["Nextjs", "TypeScript", "Framer Motion"],
      link: "https://mrtb-license-renewal-automation-sys.vercel.app/",
    },
    {
      title: "SARA BY WEMA",
      image: sara,
      tags: ["Nextjs", "TypeScript", "Framer Motion"],
      link: "https://sara.wemabank.com/",
    },
    {
      title: "SheCan",
      image: shecan,
      tags: ["Nextjs", "TypeScript", "Framer Motion"],
      link: "https://wema-shecan.alat.ng/",
    },
  ];

  const backendProjects = [
    {
      title: "FX Trading Platform API",
      description:
        "Robust backend APIs built for a foreign exchange trading platform.",
      tags: ["NestJS", "TypeORM", "PostgreSQL"],
    },
    {
      title: "Expense Tracker API",
      description:
        "Backend RESTful APIs built for a personal expense tracking application.",
      tags: ["NodeJS", "MongoDB"],
    },
    {
      title: "Expense Split API",
      description:
        "Backend APIs built to facilitate splitting expenses among friends securely.",
      tags: ["NestJS", "PostgreSQL", "Prisma"],
    },
    {
      title: "E-commerce API",
      description: "Backend APIs built for an e-commerce application.",
      tags: ["NodeJS", "MongoDB", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">
        Frontend & Fullstack Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold mt-20 mb-12">Backend Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {backendProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300 p-8 flex flex-col text-left"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

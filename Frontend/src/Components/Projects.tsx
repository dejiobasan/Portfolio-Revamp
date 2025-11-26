import { Link } from "react-router-dom";
import portfolioImage from "../Images/Portfolio.png"
import EcommerceImage from "../Images/Ecommerce.png"
import pft from "../Images/personalFinanceTracker.png"
import ees from "../Images/EES.png"
import ets from "../Images/exerciseTracker.png"
import tsflow from "../Images/TensorFlow.png"


const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: portfolioImage,
      tags: ["React", "Tailwind", "TypeScript"],
      link: "https://deji-obs-portfolio.vercel.app/"
    },
    {
      title: "E-commerce Application",
      image: EcommerceImage,
      tags: ["React", "NodeJS", "TypeScript", "MongoDB"],
      link: "https://rhos-essence-and-more.vercel.app/"
    },
    {
      title: "Personal Finance Tracker",
      image: pft,
      tags: ["React", "NodeJS", "TypeScript", "MongoDB"],
      link: "https://personal-finance-tracker-gules-pi.vercel.app/"
    },
    {
      title: "Exam Eligibilty System",
      image: ees,
      tags: ["HTML", "CSS", "JavaScript", "NodeJs", "Python"],
      link: "https://github.com/dejiobasan/ExamEligibilitySystem"
    },
    {
      title: "Exercise Tracker",
      image: ets,
      tags: ["React", "tailwindCSS", "JavaScript", "NodeJs", "MongoDB"],
      link: "https://github.com/dejiobasan/Exercise-Tracker"
    },
    {
      title: "React-TensorFlow",
      image: tsflow,
      tags: ["React", "TensorFlow"],
      link: "https://github.com/dejiobasan/React-TensorFlow"
    },
  ];
  return (
    <section id="projects"  className="py-20 text-center">
      <h2 className="text-4xl font-bold">My Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-md">{tag}</span>
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
    </section>
  );
};

export default Projects;

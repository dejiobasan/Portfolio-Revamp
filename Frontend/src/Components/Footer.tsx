import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin } from "lucide-react";
import myImage from "../Images/myImage.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-inherit text-black dark:text-white px-4 md:px-8 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <img src={myImage} alt="Logo" className="h-8 md:h-10 w-auto mr-3" />
          <span className="text-xl font-bold tracking-tight">Deji&#8482;</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link
            to="https://github.com/dejiobasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ayodeji-obasan-gmnse-9096151b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link
            to="https://www.instagram.com/deji_obs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="#about"
            className="text-sm md:text-base font-medium text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm md:text-base font-medium text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm md:text-base font-medium text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            Tools
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <hr className="border-gray-200 dark:border-gray-800 my-6 md:my-8" />
      </div>

      <div className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Deji. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

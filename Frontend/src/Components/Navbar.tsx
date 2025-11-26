import { Link } from "react-router-dom";
import  myImage  from "../Images/myImage.png"
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-blue-800 dark:bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <img src={myImage} alt="Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-2xl font-bold">Deji&#8482;</Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`md:flex space-x-6 absolute md:static bg-blue-800 dark:bg-gray-900 w-full left-0 md:w-auto md:flex-row flex-col items-center transition-all duration-300 ease-in-out ${isOpen ? "top-12" : "-top-60"}`}>
          <li className="cursor-pointer p-2" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer p-2" onClick={() => scrollToSection("skills")}>Skills</li>
          <li className="cursor-pointer p-2" onClick={() => scrollToSection("projects")}>Projects</li>
          <li className="cursor-pointer p-2" onClick={() => scrollToSection("contact")}>Contact</li>
          <li className="p-2"><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
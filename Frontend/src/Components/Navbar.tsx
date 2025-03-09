import { Link } from "react-router-dom";
import  myImage  from "../Images/myImage.png"

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-blue-800 text-white p-4 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <img src={myImage} alt="Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-2xl font-bold">Deji&#8482;</Link>
        </div>
        <ul className="flex space-x-6">
          <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("skills")}>Skills</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
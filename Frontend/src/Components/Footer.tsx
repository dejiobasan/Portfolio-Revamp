import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin } from 'lucide-react';
import  myImage  from "../Images/myImage.png"


const Footer: React.FC = () => {
  return (
    <footer className="bg-inherit text-black m-10 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex items-center">
          <img src={myImage} alt="Logo" className="h-8 mr-2" />
          <span className="text-lg font-bold">Deji&#8482;</span>
        </div>
        <div className="flex space-x-4">
          <Link to="https://github.com/dejiobasan" className="text-black hover:text-gray-500"><Github/></Link>
          <Link to="https://www.linkedin.com/in/ayodeji-obasan-gmnse-9096151b9/" className="text-black hover:text-gray-500"><Linkedin/></Link>
          <Link to="https://www.instagram.com/deji_obs/" className="text-black hover:text-gray-500"><Instagram/></Link>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="text-black hover:text-gray-500">About</a>
          <a href="#projects" className="text-black hover:text-gray-500">Projects</a>
          <a href="#skills" className="text-black hover:text-gray-500">Tools</a>
        </div>
      </div>
      <hr className="border-black my-4" />
      <div className="text-center mt-4 text-sm">© 2025 Deji. All rights reserved.</div>
    </footer>
  );
};

export default Footer
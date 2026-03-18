import { motion } from "framer-motion";
import cvUrl from "../files/SoftwareEngineerCV.pdf";

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="md:text-5xl text-3xl font-bold">
        Hi, I am{" "}
        <span className="text-blue-500 dark:text-blue-400 animate-pulse">
          &lt;Deji /&gt;
        </span>
      </h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-4 text-lg text-justify"
      >
        {" "}
        I'm a goal-driven Software Engineer with years of experience building
        applications and in my spare time I watch alot of Anime.
      </motion.p>
      <span className="space-x-4">
        <button
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold hover:bg-blue-600 transition"
          onClick={() => scrollToSection("projects")}
        >
          View My Work
        </button>
        <button
          className="mt-6 px-6 py-3 border bg-inherit rounded-lg text-blue-500 dark:text-blue-400 dark:border-blue-400 text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          onClick={() => scrollToSection("contact")}
        >
          Get In Touch
        </button>
      </span>
      <a
        className="mt-6 px-6 py-3 border bg-inherit rounded-lg text-blue-500 dark:text-blue-400 dark:border-blue-400 text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
    </motion.section>
  );
};

export default Home;

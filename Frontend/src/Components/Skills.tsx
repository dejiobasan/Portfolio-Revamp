import { motion } from "framer-motion";
const Skills: React.FC = () => {
  const skills = [
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "NodeJS", icon: "devicon-nodejs-plain-wordmark" },
    { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark" },
    { name: "PostGRES", icon: "devicon-postgresql-plain-wordmark" },
    { name: "Python", icon: "devicon-python-plain" },
  ];

  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-4xl font-bold">My Stack</h2>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: -1000 }}
        transition={{ duration: 10, repeat: Infinity }}
        className="mt-8 flex flex-wrap justify-center gap-8"
      >
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <i className={`${skill.icon} text-6xl colored`}></i>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

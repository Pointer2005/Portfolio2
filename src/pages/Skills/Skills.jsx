import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Skills() {
  return (
    <section id="skills" className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-primary text-center drop-shadow-md"
        >
          My Skills
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center text-lg sm:text-xl font-medium text-foreground hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
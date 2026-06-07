import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function Skills() {
  return (
    <section id="skills" className="min-h-[80vh] flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-6xl space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary drop-shadow-md">
            My Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive look at the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-semibold text-foreground border-b border-white/10 pb-4">
                {category.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      variants={itemVariants}
                      key={index}
                      className="group relative flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Inner glow on hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      
                      <Icon className={`w-12 h-12 transition-transform duration-500 group-hover:scale-110 drop-shadow-md ${skill.color}`} />
                      <span className="text-base font-medium text-foreground relative z-10 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
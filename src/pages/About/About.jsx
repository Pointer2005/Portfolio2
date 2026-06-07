import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function About() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "University",
      duration: "2023 - 2027",
      description: "Focusing on software engineering, AI, and data structures.",
    },
    {
      degree: "High School Diploma",
      school: "High School",
      duration: "2021 - 2023",
      description: "Graduated with honors in Science and Mathematics.",
    }
  ];

  const experience = [
    {
      role: "Software Developer Intern",
      company: "Tech Company",
      duration: "Summer 2025",
      description: "Developed and maintained user-facing features using React and Tailwind CSS.",
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2024 - Present",
      description: "Building responsive and dynamic web applications for local businesses.",
    }
  ];

  return (
    <section id="about" className="min-h-[80vh] flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-6xl space-y-24">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div variants={slideIn} className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur-xl opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative p-2 bg-white/5 border-white/10 backdrop-blur-md rounded-[2rem] overflow-hidden">
                <img
                  src={`https://github.com/${siteConfig.githubUsername}.png`}
                  alt={`${siteConfig.name}'s profile`}
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl bg-black/20"
                />
              </Card>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div variants={fadeUp} className="flex flex-col space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary drop-shadow-md">
              About Me
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
              I am {siteConfig.name}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Computer Science student passionate about
                frontend development, AI, and modern web technologies.
              </p>
              <p>
                I enjoy building responsive websites,
                AI projects, and interactive applications
                using React and Node.js. My goal is to craft 
                seamless digital experiences through clean code 
                and innovative solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Education & Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Education */}
          <motion.div variants={fadeUp} className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground flex items-center gap-3 justify-center md:justify-start">
              <span className="text-primary">🎓</span> Education
            </h3>
            <div className="space-y-6">
              {education.map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                      <h4 className="text-xl font-semibold text-foreground">{item.degree}</h4>
                      <Badge variant="secondary" className="whitespace-nowrap">{item.duration}</Badge>
                    </div>
                    <p className="text-primary font-medium">{item.school}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeUp} className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground flex items-center gap-3 justify-center md:justify-start">
              <span className="text-primary">💼</span> Experience
            </h3>
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                      <h4 className="text-xl font-semibold text-foreground">{item.role}</h4>
                      <Badge variant="secondary" className="whitespace-nowrap">{item.duration}</Badge>
                    </div>
                    <p className="text-primary font-medium">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
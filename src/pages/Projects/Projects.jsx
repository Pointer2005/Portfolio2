import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function Projects() {
  return (
    <section id="projects" className="min-h-[80vh] flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-7xl space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary drop-shadow-md">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, side projects, and open-source contributions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div variants={itemVariants} key={index} className="h-full flex">
              <Card className="h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-md hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden group w-full">
                
                {/* Decorative Thumbnail / Gradient */}
                <div className="h-48 w-full bg-gradient-to-br from-primary/20 to-blue-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  {/* Subtle animated shape */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                <CardHeader className="flex-none pt-6">
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col gap-4">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-white/10 hover:bg-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex-none pt-4 pb-6 gap-4">
                  <Button asChild variant="default" size="sm" className="flex-1">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 border-white/20 hover:bg-white/10">
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
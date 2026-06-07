function Projects() {

  const projects = [
    {
      title: "Radar System",
      description: "ESP32 radar simulator project",
    },

    {
      title: "AI Agent",
      description: "AI based fake news detector",
    },

    {
      title: "Portfolio Website",
      description: "Modern React portfolio website",
    },
  ];

  return (
    <section id="projects" className="projects">

      <h1>Projects</h1>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "GitHub",
    "MongoDB",
  ];

  return (
 <section id="skills" className="skills">

      <h1>My Skills</h1>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
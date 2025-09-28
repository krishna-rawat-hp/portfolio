import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek personal website built with React, Tailwind CSS, and Vite.",
    link: "#",
  },
  {
    title: "Microservice Optimizer",
    description:
      "Boosted data transfer from 32 min to 5 min using Spring Boot + PostgreSQL.",
    link: "#",
  },
  {
    title: "Admission Platform (EAB)",
    description:
      "Modern React app with custom validation library and user-friendly UX.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0f0f0f] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-sm text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

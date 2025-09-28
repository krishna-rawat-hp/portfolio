import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-black text-white"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I'm Krishna Kant Rawat, a Full Stack Developer with a passion for
          building fast, accessible, and visually appealing web applications.
          With experience in Java, Spring Boot, React, and more, I love turning
          complex problems into clean, efficient solutions.
        </p>
      </div>
    </section>
  );
};

export default About;

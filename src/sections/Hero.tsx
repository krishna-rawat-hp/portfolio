import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Hello, I'm Krishna.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl">
        A Full Stack Developer crafting digital experiences with Java,
        SpringBoot, Microservices and ReactJS.
      </p>
    </section>
  );
};

export default Hero;

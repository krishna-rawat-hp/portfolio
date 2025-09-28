import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import DownloadResume from "../components/DownloadResume";

const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <DownloadResume />
      </main>
    </div>
  );
};

export default Home;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between p-6 text-white z-50">
      <button
        onClick={() => scrollToSection("hero")}
        className="text-xl font-bold hover:text-blue-400 transition-colors duration-300"
      >
        Krishna Kant Rawat
      </button>
      <ul className="flex gap-6">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:underline"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:underline"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("learn")}
            className="hover:underline"
          >
            Learn
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:underline"
          >
            Contact
          </button>
        </li>
        <li>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

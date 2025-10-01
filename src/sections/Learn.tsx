import React from "react";
import { topics } from "../data/learn/topics";
import TopicTree from "../components/TopicTree";

const Learn: React.FC = () => {
  return (
    <section id="learn" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Learn with Me
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore tutorials, guides, and interview preparation materials
          organized by topics
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {topics.map((topic) => (
            <TopicTree key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learn;

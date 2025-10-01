import React from "react";
import { useNavigate } from "react-router-dom";
import { Topic } from "../data/learn/topics";

interface TopicTreeProps {
  topic: Topic;
}

const TopicTree: React.FC<TopicTreeProps> = ({ topic }) => {
  const navigate = useNavigate();
  const blogs = topic.blogs?.filter((b) => b.type === "blog") || [];
  const interviewQuestions =
    topic.blogs?.filter((b) => b.type === "interview") || [];

  return (
    <div
      className="bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-800 cursor-pointer transform hover:scale-105 transition-all duration-300"
      onClick={() => navigate(`/learn/${topic.id}`)}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{topic.title}</h3>
          {topic.description && (
            <p className="text-gray-400">{topic.description}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        <span className="text-gray-400">
          <span className="text-blue-400">{blogs.length}</span> Blogs
        </span>
        <span className="text-gray-400">
          <span className="text-blue-400">{interviewQuestions.length}</span>{" "}
          Interview Questions
        </span>
      </div>

      {topic.subtopics && topic.subtopics.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Subtopics:</p>
          <div className="flex flex-wrap gap-2">
            {topic.subtopics.map((subtopic) => (
              <span
                key={subtopic.id}
                className="text-sm px-3 py-1 bg-gray-800 rounded-full"
              >
                {subtopic.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicTree;

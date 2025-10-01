import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { topics, Blog } from "../data/learn/topics";
import Navbar from "../components/Navbar";

const TopicDetail: React.FC = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"blogs" | "interview">("blogs");

  const topic = topics.find((t) => t.id === topicId);
  if (!topic) {
    return <div>Topic not found</div>;
  }

  const blogs = topic.blogs?.filter((b) => b.type === "blog") || [];
  const interviewQuestions =
    topic.blogs?.filter((b) => b.type === "interview") || [];

  const renderContent = (items: Blog[]) => (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-200 hover:shadow-lg border border-gray-700"
        >
          <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
          <p className="text-gray-400 mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-600 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {new Date(item.date).toLocaleDateString()}
          </span>
        </div>
      ))}
      {items.length === 0 && (
        <p className="text-gray-500 text-center py-4 col-span-2">
          No content available yet
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <button
          onClick={() => navigate("/learn")}
          className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="mr-2">←</span> Back to Topics
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{topic.title}</h1>
          {topic.description && (
            <p className="text-xl text-gray-400">{topic.description}</p>
          )}
        </div>

        <div className="flex gap-4 mb-8 border-b border-gray-700">
          <button
            className={`px-6 py-3 text-lg ${
              activeTab === "blogs"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("blogs")}
          >
            Blogs ({blogs.length})
          </button>
          <button
            className={`px-6 py-3 text-lg ${
              activeTab === "interview"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("interview")}
          >
            Interview Questions ({interviewQuestions.length})
          </button>
        </div>

        {activeTab === "blogs" && renderContent(blogs)}
        {activeTab === "interview" && renderContent(interviewQuestions)}
      </div>
    </div>
  );
};

export default TopicDetail;

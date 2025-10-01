import { useState } from "react";
import { useParams } from "react-router-dom";
import { topics } from "../data/learn/topics";
import InterviewQuestions from "../components/InterviewQuestions";

const TopicDetail = () => {
  const { topicId, subtopicId } = useParams();
  const [activeTab, setActiveTab] = useState<"overview" | "interview">(
    "overview"
  );

  // Find the topic and subtopic
  const topic = topics.find((t) => t.id === topicId);
  const subtopic = topic?.subtopics?.find((s) => s.id === subtopicId);

  if (!topic || !subtopic) {
    return <div>Topic not found</div>;
  }

  const interviewQuestions = subtopic.blogs?.filter(
    (blog) => blog.type === "interview"
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{subtopic.title}</h1>

      {/* Tab Navigation */}
      <div className="flex border-b mb-6">
        <button
          className={`py-2 px-4 ${
            activeTab === "overview"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "interview"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("interview")}
        >
          Interview Questions
        </button>
      </div>

      {/* Content */}
      {activeTab === "overview" ? (
        <div>
          {/* Add your overview content here */}
          <p>Overview content coming soon...</p>
        </div>
      ) : (
        <div className="space-y-8">
          {interviewQuestions?.map((blog) => (
            <InterviewQuestions key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicDetail;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { topics } from "../data/learn/topics";
import InterviewQuestions from "../components/InterviewQuestions";

const TopicDetail = () => {
  const navigate = useNavigate();
  const { topicId, subtopicId } = useParams();
  const [activeTab, setActiveTab] = useState<"blogs" | "interview">(
    "interview"
  );

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [topicId, subtopicId]);

  // Find the topic and subtopic
  const topic = topics.find((t) => t.id === topicId);
  const subtopic = topic?.subtopics?.find((s) => s.id === subtopicId);

  if (!topic || !subtopic) {
    return <div>Topic not found</div>;
  }

  const blogs = subtopic.blogs?.filter((blog) => blog.type === "blog") || [];
  const interviewQuestions =
    subtopic.blogs?.filter((blog) => blog.type === "interview") || [];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => {
            navigate("/#learn");
            // Ensure smooth scroll to learn section after navigation
            setTimeout(() => {
              document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="mb-6 text-gray-300 hover:text-white flex items-center gap-2 group"
        >
          <svg
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Learn
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {subtopic.title}
          </h1>
          {subtopic.description && (
            <p className="text-gray-200">{subtopic.description}</p>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-gray-900 p-1 rounded-lg w-fit">
          <button
            className={`py-2 px-4 rounded-md transition-all duration-200 flex items-center gap-2
              ${
                activeTab === "blogs"
                  ? "bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20"
                  : "text-gray-200 hover:text-white hover:bg-gray-800"
              }`}
            onClick={() => setActiveTab("blogs")}
          >
            Blogs
            <span
              className={`px-2 py-0.5 rounded-full text-sm ${
                activeTab === "blogs" ? "bg-blue-600" : "bg-gray-800"
              }`}
            >
              {blogs.length}
            </span>
          </button>
          <button
            className={`py-2 px-4 rounded-md transition-all duration-200 flex items-center gap-2
              ${
                activeTab === "interview"
                  ? "bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20"
                  : "text-gray-200 hover:text-white hover:bg-gray-800"
              }`}
            onClick={() => setActiveTab("interview")}
          >
            Interview Questions
            <span
              className={`px-2 py-0.5 rounded-full text-sm ${
                activeTab === "interview" ? "bg-blue-600" : "bg-gray-800"
              }`}
            >
              {interviewQuestions.length}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="mt-6">
          {activeTab === "blogs" ? (
            <div className="space-y-6">
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-200 mb-4">{blog.description}</p>
                    <div className="flex gap-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800 rounded-full text-sm text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-200">No blogs available yet.</p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {interviewQuestions.map((blog) => (
                <InterviewQuestions key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;

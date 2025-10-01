import React from "react";
import { useNavigate } from "react-router-dom";
import { Topic } from "../data/learn/topics";

interface TopicTreeProps {
  topic: Topic;
}

const TopicTree: React.FC<TopicTreeProps> = ({ topic }) => {
  const navigate = useNavigate();

  // Get all blogs and interview questions from topic and its subtopics
  const getAllCounts = (t: Topic) => {
    const topicBlogs = t.blogs?.filter((b) => b.type === "blog").length || 0;
    const topicQuestions =
      t.blogs?.filter((b) => b.type === "interview").length || 0;

    const subtopicCounts = t.subtopics?.reduce(
      (acc, st) => {
        const stBlogs = st.blogs?.filter((b) => b.type === "blog").length || 0;
        const stQuestions =
          st.blogs?.filter((b) => b.type === "interview").length || 0;
        return {
          blogs: acc.blogs + stBlogs,
          questions: acc.questions + stQuestions,
        };
      },
      { blogs: 0, questions: 0 }
    ) || { blogs: 0, questions: 0 };

    return {
      blogs: topicBlogs + subtopicCounts.blogs,
      questions: topicQuestions + subtopicCounts.questions,
    };
  };

  const counts = getAllCounts(topic);

  // Handle click on the main card
  const handleCardClick = () => {
    if (topic.subtopics && topic.subtopics.length > 0) {
      navigate(`/learn/${topic.id}/${topic.subtopics[0].id}`);
    }
  };

  return (
    <div
      className="bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{topic.title}</h3>
          {topic.description && (
            <p className="text-gray-200">{topic.description}</p>
          )}
        </div>
        <div className="flex gap-6 ml-4">
          {counts.blogs > 0 && (
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">
                {counts.blogs}
              </div>
              <div className="text-sm text-gray-200 whitespace-nowrap">
                Blogs
              </div>
            </div>
          )}
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">
              {counts.questions}
            </div>
            <div className="text-sm text-gray-200 whitespace-nowrap">Q&A</div>
          </div>
        </div>
      </div>

      {topic.subtopics && topic.subtopics.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-200 mb-2">Subtopics:</p>
          <div className="flex flex-wrap gap-2">
            {topic.subtopics.map((subtopic) => {
              const subtopicBlogs =
                subtopic.blogs?.filter((b) => b.type === "blog").length || 0;
              const subtopicQuestions =
                subtopic.blogs?.filter((b) => b.type === "interview").length ||
                0;
              return (
                <button
                  key={subtopic.id}
                  onClick={() => navigate(`/learn/${topic.id}/${subtopic.id}`)}
                  className="text-sm px-3 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-gray-200">{subtopic.title}</span>
                  <div className="flex items-center gap-1 ml-1">
                    {subtopicBlogs > 0 && (
                      <>
                        <span className="bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded text-xs">
                          {subtopicBlogs}B
                        </span>
                      </>
                    )}
                    <span className="bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded text-xs">
                      {subtopicQuestions}Q
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicTree;

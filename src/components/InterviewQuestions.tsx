import { Blog } from "../data/learn/topics";

interface InterviewQuestionsProps {
  blog: Blog;
}

const InterviewQuestions: React.FC<InterviewQuestionsProps> = ({ blog }) => {
  // Split content into individual questions and answers
  const questionsAndAnswers = blog.content.split("\n\n").filter(Boolean);

  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-4">{blog.title}</h3>
      <p className="text-gray-200 mb-6">{blog.description}</p>

      <div className="space-y-6">
        {questionsAndAnswers.map((qa, index) => {
          const [question, ...answerParts] = qa.split("\nAnswer: ");
          const answer = answerParts.join("\nAnswer: "); // Rejoin in case answer contains code blocks

          return (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-lg mb-2 text-white">
                {question}
              </p>
              <div className="text-gray-200 whitespace-pre-wrap">{answer}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-800 text-sm rounded-full text-blue-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestions;

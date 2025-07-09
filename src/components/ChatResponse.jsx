import ReactMarkdown from 'react-markdown';

const ChatResponse = ({ response }) => {
  if (!response) return null;

  const { candidates } = response;

  return (
    <div className="max-w-3xl mx-auto my-6">
      {candidates.map((candidate, index) => (
        <div
          key={index}
          className="bg-gray-100 p-5 rounded-lg shadow mb-4"
        >
          <h4 className="text-lg text-gray-700 font-semibold mb-3">Answer {index + 1}</h4>
          <div className="prose max-w-none">
            <ReactMarkdown>{candidate.content.parts[0].text}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatResponse;

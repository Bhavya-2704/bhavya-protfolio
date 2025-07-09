import React, { useState } from 'react';

const ChatInput = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-6">
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Ask a Question</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-lg transition duration-300"
          >
            Ask AI 🤖
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;

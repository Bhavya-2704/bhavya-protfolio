import { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatResponse from './components/ChatResponse';
import { ToastContainer, toast } from 'react-toastify';
import { fetchResponse } from './services/api';
import ClipLoader from "react-spinners/ClipLoader";

function ChatBot() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      toast.error("Failed to get response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center pt-10" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="bg-white/90 rounded-xl shadow-lg max-w-4xl mx-auto p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">AI Powered ChatBot</h1>
          <p className="text-gray-600 mt-2">Ask me anything about tech, AI, or science!</p>
        </header>

        <ChatInput onSubmit={handleQuestionSubmit} />

        {loading && (
          <div className="flex justify-center my-6">
            <ClipLoader size={50} color="#2563eb" />
          </div>
        )}

        <ChatResponse response={response} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default ChatBot;

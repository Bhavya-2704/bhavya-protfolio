import { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import ChatBot from './ChatBot'; // Your existing ChatBot component

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition duration-300"
        aria-label="Open ChatBot"
      >
        <FaComments className="text-2xl" />
      </button>

      {/* ChatBot Panel */}
     {isOpen && (
  <div className="fixed bottom-20 right-6 w-[350px] h-[500px] bg-white shadow-2xl rounded-xl z-50 overflow-hidden border border-gray-300 flex flex-col">
    <div className="flex justify-between items-center p-3 bg-blue-600 text-white">
      <h2 className="text-lg font-semibold">AI ChatBot</h2>
      <button onClick={() => setIsOpen(false)} className="text-white text-xl">&times;</button>
    </div>

    {/* Scrollable content area */}
    <div className="flex-1 overflow-y-auto p-2">
      <ChatBot />
    </div>
  </div>
)}

    </>
  );
};

export default FloatingChatBot;

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

            try {
                emailjs.sendForm(
                    'service_h4a3r3s', 
                    'template_onr6olh', 
                    e.target, 
                    'PMoSrNtuOFsIhgLfC'
                );
                toast.success("Email sent successfully!");
                e.target.reset();
            } catch (error) {
                toast.error("Failed to send email. Please try again.");
            } finally {
                setLoading(false);
            }
        };

    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
                    Contact Me
                </h2>
                <form className="space-y-4" onSubmit={sendEmail}>
                    {/* Name Input */}
                    <div>
                        <label className="block text-base font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="from_name"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-[#01504d]"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-base font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="from_email"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-[#01504d]"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div>
                        <label className="block text-base font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            placeholder="Your Message"
                            name="message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-[#01504d]"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full ${
                            loading ? "bg-gray-400" : "bg-[#01504d] cursor-pointer"
                        } text-white p-3 rounded-xl font-semibold transition`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ChatBot from "../ChatBot";

const About = () => {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-[#f9fafb] to-[#edf2f7]">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center p-10 bg-white rounded-3xl shadow-xl"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl font-extrabold text-[#012322] mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Hi, I'm <span className="font-semibold text-[#2a9776]">Bhavya Gupta</span>, a passionate <span className="text-[#2a9776] font-medium">tech enthusiast</span>. I specialize in crafting efficient, user-centric digital solutions and enjoy solving complex problems with smart, scalable designs. I'm dedicated to building impactful projects that make a difference.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-700 mt-6"
          >
            Let's connect and create something extraordinary together!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4">
            <Phone className="text-[#2a9776] size-7" />
            <p className="text-lg font-medium text-gray-800">+91-9650838927</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4">
            <FaWhatsapp className="text-[#2a9776] size-7" />
            <p className="text-lg font-medium text-gray-800">+91-9650838927</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4">
            <Mail className="text-[#2a9776] size-7" />
            <p className="text-lg font-medium text-gray-800 break-all">
              bhavyagupta10204@gmail.com
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4">
            <MapPin className="text-[#2a9776] size-7" />
            <p className="text-lg font-medium text-gray-800">Ghaziabad, India</p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#ffffff] to-[#ffffff] text-black py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:py-10 sm:px-6 lg:px-8 flex flex-col-reverse gap-5 sm:flex-row lg:items-center lg:justify-between">
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    className="text-center lg:text-left lg:w-1/2"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
                        Hi, I'm <span className="text-[#012322]">Bhavya Gupta</span>
                        <br />
                        Creative Developer & Innovator
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-black-200 max-w-xl mx-auto lg:mx-0">
                        Crafting immersive digital experiences that blend creativity and technology. Let's build the future together.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <Link
                            to="/projects"
                            className="bg-[#012322] text-white py-3 px-8 rounded-full font-semibold text-center"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-white py-3 px-8 rounded-full font-semibold text-center hover:bg-white hover:text-black transition"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end"
                >
                    <img
                        src="BhavyaImage.jpg"
                        alt="archi"
                        className="rounded-full w-full max-w-xs sm:max-w-sm md:max-w-md"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

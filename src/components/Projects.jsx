import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "INVOICELY",
    description:
      "Retail Billing Software",
    image: "project1.jpg",
    link: "https://github.com/Bhavya-2704/INVOICELY-Retail-Billing-Software-",
  },
 
  
];

const Project = () => {
  return (
    <section className="mt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#012322] mb-6">
          Projects
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg rounded-3xl overflow-hidden max-w-xs transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Link
                  to={project.link}
                  className="flex gap-2 mt-5 items-center text-[#01504d] font-semibold hover:underline"
                >
                  View Project
                  <MoveRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

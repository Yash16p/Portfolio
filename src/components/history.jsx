import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    role: "AI/ML Intern",
    location: "Dategain",
    duration: "March 2025 - Present",
    description:
      "Developed an AI-powered BIO generator and prompt generator to enhance user engagement on a dating app, leveragingNLP and deep learning techniques.Implemented EDA, Data Cleaning, Feature Engineering on large-scale datasets.Designed dashboards using Power BI to visualize hiring trends"},
  {
    role: "Frontend Developer",
    location: "Kapliash SSS Pvt. Ltd",
    duration: "May 2024 - July 2024",
    description:
      "Developed, and maintained web applications for NEET and JEE students using HTML, CSS, JavaScript, React.js",
  },
   
  // {
  //   role: "Web Developer",
  //   location: "ISRO(Indian National Space and Aeronautics Agency)",
  //   duration: "Aug 2024 - Sept 2024",
  //   description:
  //     "Developed, and maintained web applications for ISRO by contributing in their all types of websites",
  // },

];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = document.querySelector("#experience-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id="experience-section"
      className="relative max-w-6xl mx-auto min-h-screen pt-20 lg:pt-28 pb-10 sm:pb-14 lg:pb-10"
    >
      <div className="absolute top-0 bottom-0 w-1 bg-blue-500 left-1/2 transform -translate-x-1/2"></div>

      {experiences.map((exp, index) => (
        <div
          className={`flex items-center justify-between w-full mb-10 ${
            index % 2 === 0 ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
          }`}
        >
          <div
            className={`w-4/5 lg:w-1/2 px-4 text-gray-400 mb-4 lg:mb-14 text-sm opacity-0 ${
              isVisible ? `animate-fadeInLeft` : ""
            } ${index % 2 === 0 ? "text-center lg:text-left" : "text-center lg:text-right"}`}
            style={{
              animationDelay: `${index === 0 ? "1s" : index * 0.2 + 1.3}s`,
            }}
          >
            {exp.duration}
          </div>

          <div
            className={`w-16 h-16 bg-blue-500 mb-4 sm:mb-16 text-white rounded-full flex items-center justify-center border-4 border-white z-10 opacity-0 group ${
              isVisible ? `animate-fadeInCircle` : ""
            } hover:bg-white hover:border-blue-500 hover:text-blue-500 transform transition-all duration-300`}
            style={{
              animationDelay: `${index === 0 ? "1s" : index * 0.2 + 1.3}s`,
              marginBottom: "30px", 
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <MapPinIcon className="w-8 h-8" />
          </div>

          <div
            className={`w-4/5 lg:w-1/2 bg-white rounded-lg shadow-lg p-8 relative opacity-0 ${
              isVisible ? `animate-fadeInBox` : ""
            } ${
              index % 2 === 0
                ? "text-center lg:text-left ml-0 lg:ml-0"
                : "text-center lg:text-right mr-0 lg:mr-0"
            } hover:bg-gray-200 hover:scale-105 transform transition-all duration-300 ease-in-out group`}
            style={{
              animationDelay: `${index === 0 ? "0.6s" : index * 0.2 + 0.6}s`,
              marginTop: "20px",
            }}
          >
  
            <div
              className={`absolute w-0 h-0 border-solid border-t-[8px] border-t-transparent border-b-[16px] border-b-transparent ${
                index % 2 === 0
                  ? "border-l-[20px] border-l-white -right-5 top-6 group-hover:border-l-gray-200"
                  : "border-r-[20px] border-r-white -left-5 top-6 group-hover:border-r-gray-200"
              } hidden lg:block`}
            ></div>
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-blue-600 font-semibold">{exp.location}</p>
            <p className="text-gray-600 mt-2">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};


export default Timeline;

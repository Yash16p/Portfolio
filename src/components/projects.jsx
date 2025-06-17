import React from "react";

import image2 from "../assets/trading.jpg";
import kisan from "../assets/ksian.jpg"
import pi from '../assets/ns.jpg'
import np from '../assets/ns.png'




const projects = [

  {
    id: 1,
    name: "KisanSeva: Revolutionizing Farming with AI & IoT",
    description:
     "An innovative app designed to empower farmers with advanced technology. Key features include real-time monitoring of soil conditions, automated irrigation based on machine learning predictions, access to up-to-date agricultural news, a personalized chatbot for farming advice, real-time weather updates, and AI-powered plant disease diagnosis through camera technology. This comprehensive app offers farmers a range of tools to optimize their farming practices and improve yields.",
    image: kisan,
    link: "https://github.com/Yash16p/farmer-help",
    techStack: ["React Native", "Python", "Machine Learning", "FAST API"],
  },

  {
    id: 2,
    name: "Network Security",
    description:
      "Designed and implemented a machine learning pipeline for phishing detection, including data ingestion, validation,transformation, model training, and deployment using deployed Developed modular components for data preprocessing, feature engineering, and model training with reusable configurations.Automated the training pipeline with logging and exception handling to ensure reliability",
    image: pi,
    link: "https://github.com/Yash16p/Network-Security",
    techStack: ["Python", "FastAPI", "MongoDB", "AWS CLI", "Docker", "S3 bucket"],
  },

  {
    id: 3,
    name: "Number Plate Recognition System",
    description:
      "Achieved 97.01% accuracy using, successfully detects and recognizes Indian number plates,CNN architecture with Conv2D,MaxPooling, Dropout, and Dense layers.Uses categorical cross-entropy loss and Adam optimizer",
    image: np,
    link: "https://github.com/Yash16p/Number-Plater-Recoginition-System",
    techStack: ["Python", "Tensorflow with keras", "opencv", "python libraries"],
  },

  {
    id: 4,
    name: "Quant(Trading Project)",
    description:
      "Developed a machine learning model to predict short-term price movements (>0.5% within 5 minutes) with 81.33%accuracy by optimizing a feature set of 20+ technical indicators (RSI, MACD, Bollinger Bands) and engineered interaction features",
    image: image2,
    link: "https://github.com/Yash16p/shopapp",
    techStack: ["Python", "Bayesian Optimization", "XGBoost", "Logistic Regression"],
  },
  // {
  //   id: 3,
  //   name: "AI Image Generator",
  //   description:
  //     "I developed an **AI Image Generator** website using ReactJS and OpenAI's DALLE API. It lets users create stunning AI-generated images based on their prompts in real time, showcasing the fusion of creativity and technology.",
  //   image: image5,
  //   link: "https://github.com/Yash16p/AI-image-Generator",
  //   techStack: ["React", "Tailwind CSS", "Nodejs","DALLE"],
  // },
  // {
  //   id: 4,
  //   name: "Rooftop-Solar-Energy-Potential-Map",
  //   description:
  //     "Developed ResNet50-U-Net and YOLOv8-seg models to extract building footprints from satellite images with 95.21% accuracy. Designed a full prediction pipeline, improving IoU from 0.85 to 0.92 using post-processing techniques. It Calculates rooftop areas for strategic solar panel placement and energy estimation.",
  //   image: image3,
  //   link: "https://github.com/Yash16p/Rooftop-Solar-Energy-Potential-Map",
  //   techStack: ["React", "Tailwind CSS", "ML", "python-flask"],
  // },



];

const ProjectsGrid = () => {
  return (
    <div
      id="projects"
      className="bg-black min-h-screen flex justify-center items-center px-4 py-10"
    >
      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-black rounded-lg p-4 overflow-hidden max-w-xl transform transition-transform duration-300 hover:scale-105 group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-lg opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 opacity-20 transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-lg"></div>
                </div>
              </a>
              <div className="mt-6 text-white text-left">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold hover:underline hover:cursor-pointer"
                >
                  {project.name}
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mt-3">{project.description}</p>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;




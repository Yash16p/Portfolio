import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center mt-10 py-20 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-gray-300 relative overflow-hidden"
    >

      <div className="absolute top-10 left-10 w-36 h-36 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Header */}
      <h4 className="text-blue-500 text-lg tracking-widest mb-4 uppercase">
        Let’s Connect
      </h4>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
        Get In Touch
      </h1>
      <p className="text-center max-w-2xl mb-10 px-4 text-gray-400 text-lg leading-relaxed">
        "Whether it’s about a project, an opportunity, or just to say hello—I’d
        love to hear from you! Let’s create something amazing together."
      </p>
      <a
        href="mailto:yashpandey1626@gmail.com"
        className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
      >
        Reach out
      </a>

    
      <div className="flex items-center justify-center gap-8 mt-12">
        <a
          href="mailto:yashpandey1626@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transition-transform duration-300 text-4xl transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Yash16p"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transition-transform duration-300 text-4xl transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-pandey-a608501a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transition-transform duration-300 text-4xl transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="absolute bottom-0 w-full mt-16">
        <div className="absolute bottom-10 right-10 transform -translate-x-1/2 w-28 h-28 bg-blue-500 opacity-10 blur-3xl rounded-full animate-pulse"></div>

        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute bottom-0"></div>
      </div>
    </section>
  );
};

export default Contact;



import { useState, useEffect, useRef } from "react";
import { FaReact, FaPython, FaGit, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import Popup from "./popup";
import image1 from "../assets/sih.jpg"
import image3 from "../assets/isro.png"
import image5 from "../assets/leetcodelogo.webp"
import image6 from "../assets/Anime.jpg"


const AboutMe = () => {
  const [headingText, setHeadingText] = useState("About Me");
  const [showIcons, setShowIcons] = useState(false); 
  const aboutMeRef = useRef(null);
  const handleMouseEnter = () => {
    setHeadingText("Still exploring myself :))");
  };

  const handleMouseLeave = () => {
    setHeadingText("About Me");
  };

  const [popupData, setPopupData] = useState({
    isOpen: false,
    title: "",
    image: "",
    details: "",
  });


  const openPopup = (title, image, details) => {
    console.log("Opening popup with:", title, image, details);
    setPopupData({
      isOpen: true,
      title,
      image,
      details,
    });
  };

  const closePopup = () => {
    setPopupData({ ...popupData, isOpen: false });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowIcons(true); 
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutMeRef} className="min-h-screen w-full flex flex-col lg:flex-row mt-20 mb-20 items-center justify-between bg-black text-white py-10 px-10">    
    <div className="lg:w-[80%] md:w-[90%] sm:w-full w-full p-8 border border-white rounded-lg shadow-lg">

        <h1
          className="text-2xl sm:text-4xl  font-bold mb-4 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {headingText}
        </h1>

        <p className="text-sm sm:text-md text-blue-500">
          B.Tech in Artifical Intelligence & Data Science  from{" "}
          <span>ADGIPS |  2022-2026</span>
        </p>
        <p className="text-sm sm:text-md mb-8 text-gray-200">
        I am a Data Science enthusiast with experience in AI/ML, data analysis,frontend and backend development. I have worked as a Data Science Intern at Lagoon, where I gained hands-on experience in model development and analytics. I was a finalist at Smart India Hackathon (SIH) 2024 and ranked in the top 12 at the Bhartiya Antriksh Hackathon (ISRO). Passionate about solving real-world problems.
          <br />
          <p className="text-sm sm:text-md mt-2 text-gray-500 font-bold italic border-l-4 border-blue-500 pl-4">
            "I code, I solve, I innovate – and yes, I probably broke something along the
            way."
          </p>
        </p>


        <div>
          <h2 className="text-xl sm:text-3xl mb-6 border-b border-gray-400 pb-2">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AchievementCard
              title="ISRO BAH ‘24 Grand Finalist"
              description="Top 10 among 44,000+ participants"
              onSeeMore={() =>
                openPopup(
                  "ISRO BAH ‘24 Grand Finalist",
                  image3,
                  "I, along with my team, proudly secured a spot in the top 10 of the ISRO BAH (Bhartiya Antriksh Hackathon) among 44,000+ students across India. Our project focused on the 'Generation of Rooftop Solar Energy Potential Map Using Machine Learning/Deep Learning-Based Building Footprint Extraction.' We developed an innovative solution leveraging satellite imagery and advanced AI techniques to accurately identify building footprints and calculate their solar energy potential. This project showcased our expertise in AI, teamwork, and problem-solving, aligning with India's push for renewable energy. It was an incredible learning experience, working on real-world challenges with nationwide recognition!"
                )
              }
            />
            <AchievementCard
              title="SIH ‘24 Grand Finalist"
              description="Grand Finalist among 3+ lakh students"
              onSeeMore={() =>
                openPopup(
                  "SIH ‘24 Grand Finalist",
                  image1,
                  "As Grand Finalists of the Smart India Hackathon (SIH) 2024, our team stood out among 3+ lakh students across India. Our project tackled the Problem Statement: 'Automatic Road Extraction and Alert Generation for New Roads.' We developed an innovative solution leveraging satellite imagery and AI techniques to automatically detect road developments and generate timely alerts. This system aimed to aid infrastructure planning and monitoring by providing accurate geographical insights. Competing on such a prestigious platform was a remarkable experience that honed our technical and collaborative skills while contributing to solving real-world challenges."
                )
              }
            />
           
            {/* <AchievementCard
              title="DSA Achievements"
              description="Solved 100+ problems on LeetCode and achieved significant ranks on CodeChef"
              onSeeMore={() =>
                openPopup(
                  "DSA Achievements",
                  image5,
                  "I have solved over 100 questions in DSA using C++, showcasing my problem-solving skills and deep understanding of data structures and algorithms."
                )
              }
            />
               <AchievementCard
              title="Society website"
              description="Made an E-commerce website for college society(Animeverse)"
              onSeeMore={() =>
                openPopup(
                  "Society Website",
                  image6,
                  "I created a dynamic e-commerce website for our college's Animeverse society. The platform was designed to streamline merchandise sales, featuring user-friendly navigation, secure payment integration, and an appealing UI/UX. This project involved the use of ReactJS for frontend development, Firebase for backend services, and TailwindCSS for styling, ensuring a seamless and engaging shopping experience for users."
                )
              }
            /> */}
            {popupData.isOpen && (
              <Popup
                title={popupData.title}
                image={popupData.image}
                details={popupData.details}
                onClose={closePopup}
              />
            )}
          </div>
        </div>
      </div>
     
      <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 lg:mt-0 lg:w-[20%] lg:flex-col">
  <TechIcon icon={<FaReact />} color="#61DAFB" label="React" size="40px" show={showIcons} delay="0s" />
  <TechIcon icon={<FaPython />} color="#3776AB" label="Python" size="40px" show={showIcons} delay="0.2s" />
  <TechIcon icon={<SiCplusplus />} color="#00599C" label="C++" size="40px" show={showIcons} delay="0.4s" />
  <TechIcon icon={<LuBrainCircuit />} color="#06B6D4" label="Machine Learning" size="40px" show={showIcons} delay="0.6s" />
  {/* <TechIcon icon={<FaFigma />} color="#F24E1E" label="Figma" size="40px" show={showIcons} delay="0.8s" /> */}
  <TechIcon icon={<FaGit />} color="#F05033" label="Git" size="40px" show={showIcons} delay="1s" />
  <TechIcon icon={<SiJavascript />} color="#F7DF1E" label="JavaScript" size="40px" show={showIcons} delay="1.2s" />
</div>




    </div>
  );
};

const AchievementCard = ({ title, description, onSeeMore }) => {
  return (
    <div
      className="p-2 sm:p-4 bg-gray-900 border border-gray-600 rounded-lg 
      transition-all duration-300 cursor-pointer 
      hover:translate-x-[-8px] hover:translate-y-[-8px] hover:bg-black
      hover:border-blue-500 group "
    >
      <h3 className="text-sm sm:text-xl font-semibold text-gray-300 group-hover:text-blue-500">
        {title}
      </h3>
      <p className="text-xs sm:text-md text-gray-300 mt-2">{description}</p>
      <button
        onClick={onSeeMore}
        className="mt-2 text-xs sm:text-sm text-gray-500 hover:underline"
      >
        Click to know more
      </button>
    </div>
  );
};

const TechIcon = ({ icon, color, label, size, show, delay }) => {
  return (
    <div
      className={`flex flex-col items-center text-center cursor-pointer group ${show ? `animate-fadeIn` : ''}`}
      style={{
        animationDelay: delay, 
      }}
    >
      <div
        className="transition-all duration-300"
        style={{
          fontSize: size,
          color: "white",
        }}
      >
        <span
          className="transition-colors duration-300 group-hover:text-[var(--hover-color)]"
          style={{
            "--hover-color": color,
          }}
        >
          {icon}
        </span>
      </div>
      <div className="text-sm mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
        <span className="bg-black text-gray-100 px-2 py-1 rounded">
          {label}
        </span>
      </div>
    </div>
  );
};






export default AboutMe;

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  const getTranslateX = () => {
    const boxes = document.getElementsByClassName("work-box");
    if (!boxes || boxes.length === 0) return 0;
    
    const flex = document.querySelector(".work-flex") as HTMLElement;
    if (!flex) return 0;

    // Use offsetWidth to avoid issues with CSS scale transforms
    const boxWidth = (boxes[0] as HTMLElement).offsetWidth;
    const totalContentWidth = boxWidth * boxes.length;
    
    // Add the flex container's right padding to give some space at the end
    const flexPaddingRight = parseInt(window.getComputedStyle(flex).paddingRight) || 0;
    
    let translateX = totalContentWidth + flexPaddingRight - flex.clientWidth;
    return translateX > 0 ? translateX : 0;
  };

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: () => `+=${getTranslateX()}`, // Use actual scroll width dynamically
      scrub: true,
      pin: true,
      id: "work",
      invalidateOnRefresh: true, // Recalculate on refresh
    },
  });

  timeline.to(".work-flex", {
    x: () => -getTranslateX(),
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Kya Mutual Fund Sahi Hai",
              category: "AI-Powered Advisory & Tracking Portal",
              tools: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Socket.io, Groq API (Llama-4)",
              image: "/images/kya-mutual.png",
              link: "https://mutual-fund-sahi-hai.vercel.app/",
              github: "https://github.com/heavenEyes19/MutualFund-Sahi-Hai",
            },
            {
              name: "BikeRentLelo",
              category: "Smart Vehicle Rental & Delivery Platform",
              tools: "React.js, Node.js, Express.js, MongoDB, Socket.IO, Tailwind CSS, Groq API (LLaMA 3.1)",
              image: "/images/bikerentlelo.png",
              link: "https://bike-rental2.vercel.app/",
              github: "https://github.com/heavenEyes19/BikeRentLelo",
            },
            {
              name: "KrishiBuddy",
              category: "AI-Powered Smart Crop Advisory System",
              tools: "React Native, Node.js, Express.js, PostgreSQL, Python, TensorFlow, Scikit-Learn, Mongo DB",
              link: "",
              github: "",
            },
            {
              name: "Resume IQ",
              category: "AI Powered Resume Screening System",
              tools: "Python, Scikit-learn, NLP, Pandas, NumPy",
              link: "",
              github: "",
            },
            {
              name: "HathGhar",
              category: "E-commerce Marketplace Platform",
              tools: "React.js, Next.js, Tailwind CSS, Node.js, Express.js, PostgreSQL",
              link: "",
              github: "",
            },
            {
              name: "Cyber-Slayer",
              category: "Predictive Cybercrime Intelligence Platform",
              tools: "Next.js, Node.js, PostgreSQL, TensorFlow, AWS",
              link: "",
              github: "",
            },
            {
              name: "Real-time Chatting App",
              category: "Desktop Chat Application",
              tools: "Java Swing, Java AWT, Java Socket Programming",
              link: "",
              github: "",
            },
          ].map((project, index) => (
            <div 
              className="work-box" 
              key={index}
              style={{ display: 'flex' }}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginTop: '20px',
                      fontSize: '16px',
                      color: 'var(--accentColor)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--accentColor)'
                    }}
                  >
                    <FaGithub size={20} /> View on GitHub
                  </a>
                )}
              </div>
              <WorkImage link={project.link} image={project.image || "/images/placeholder.webp"} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

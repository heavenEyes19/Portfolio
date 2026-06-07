import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
            },
            {
              name: "KrishiBuddy",
              category: "AI-Powered Smart Crop Advisory System",
              tools: "React Native, Node.js, Express.js, PostgreSQL, Python, TensorFlow, Scikit-Learn, Mongo DB",
            },
            {
              name: "BikeRentLelo",
              category: "Smart Vehicle Rental & Delivery Platform",
              tools: "React.js, Node.js, Express.js, MongoDB, Socket.IO, Tailwind CSS, Groq API (LLaMA 3.1)",
            },
            {
              name: "Resume IQ",
              category: "AI Powered Resume Screening System",
              tools: "Python, Scikit-learn, NLP, Pandas, NumPy",
            },
            {
              name: "HathGhar",
              category: "E-commerce Marketplace Platform",
              tools: "React.js, Next.js, Tailwind CSS, Node.js, Express.js, PostgreSQL",
            },
            {
              name: "Cyber-Slayer",
              category: "Predictive Cybercrime Intelligence Platform",
              tools: "Next.js, Node.js, PostgreSQL, TensorFlow, AWS",
            },
            {
              name: "Real-time Chatting App",
              category: "Desktop Chat Application",
              tools: "Java Swing, Java AWT, Java Socket Programming",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
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
              </div>
              <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

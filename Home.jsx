import { useState, useEffect } from "react";
import "../styles/Home.css";

// 1. Dono cheezein yahan top par import karein
import profileImg from "./hina.png"; 
import myResume from "./resume.pdf"; // PDF ko import karna zaroori hai

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "I'm a Web Developer",
    "I'm a Problem Solver",
    "I'm a Web Designer",
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    let timer;
    const fullText = texts[textIndex];

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  // 2. Updated Download Function
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = myResume; // Imported file variable yahan use hoga
    link.download = "Hina_Akbar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home-section" id="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="greeting">
              Hi, I'm <span className="highlight">Hina Akbar</span>
            </h1>
            <div className="typing-text">
              <span className="text-change">
                {currentText}
                <span className="cursor">|</span>
              </span>
            </div>
            <p className="description">
              Passionate web developer creating beautiful and functional
              websites with modern technologies and best practices.
            </p>
            <div className="home-buttons">
              <button className="btn primary-btn" onClick={handleDownloadCV}>
                Download CV
              </button>
              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="home-image">
            <div className="image-wrapper">
              <img
                src={profileImg}
                alt="Hina Akbar"
                className="profile-img"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x500/112240/64ffda?text=Hina+Akbar";
                }}
              />
              <div className="top-right-corner"></div>
              <div className="bottom-left-corner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
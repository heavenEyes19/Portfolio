import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Application</h4>
                <h5>Netaji Subhash Engineering College</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Relevant coursework: Data Structures, Database Management Systems, Statistics for Computing, Machine Learning Basics, Software Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application</h4>
                <h5>Kalinga University</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              Relevant coursework: Data Structures, Database Management Systems, Computer Graphics, Software Engineering Concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

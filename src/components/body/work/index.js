import React, { useState } from "react";
import { certificationsData } from "../../../data/certifications";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";
import EducationInfo from "./education";
import NotableActivities from "./notable_activities";
import Experience from "./experience";
function Work() {
  const picClick = () => {
    window.open("https://www.linkedin.com/in/varunsaikrishna/", "_blank");
  };
  const data = certificationsData;

  const [selectedMenu, setSelectedMenu] = useState("education");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="work">
      <Separator />
      <label className="section-title">About Me</label>
      <br /> <br />
      <div className="about">
        <div className="intro-para">
          <p>
            Welcome to my portfolio website! I am a passionate{" "}
            <p1>full stack developer</p1> with expertise in various technologies
            and tools that drive modern web development.
          </p>
          <p>
            My love for full stack development has led me to gain proficiency in
            fields such as <p1>React JS, Node JS, MySQL,</p1> as well as frameworks
            tools like <p1>Webpack, React, Next.js</p1> along with Back-End frameworks
            like <p1>Express, Django </p1>. This broad skill set has allowed me to develop
            projects across diverse domains, showcasing my adaptability and
            versatility.{" "}
          </p>
          <p>
            I invite you to explore my portfolio and witness the results of my
            dedication and enthusiasm for creating innovative solutions in the
            world of software development.
          </p>
        </div>
        <div className="tempclass">
          <div className="about-pic">
            {/* <br /> <br /> <br /> */}
            <img
              src={require("../../../assets/image/vsk.jpg")}
              className="pic"
              onClick={picClick}
            />
          </div>
        </div>
      </div>
      <div className="container-menu">
        <div className="info-menu">
          <div
            className={`menu-item ${selectedMenu === "education" && "active"}`}
            onClick={() => handleMenuClick("education")}
          >
            Education
          </div>
          <div
            className={`menu-item ${selectedMenu === "internship" && "active"}`}
            onClick={() => handleMenuClick("internship")}
          >
            Internship
            <br />
            Experience
          </div>
          <div
            className={`menu-item ${
              selectedMenu === "notable-activities" && "active"
            }`}
            onClick={() => handleMenuClick("notable-activities")}
          >
            Notable
            <br />
            Activities
          </div>
        </div>
        <div className="content">
          {selectedMenu === "education" && <EducationInfo />}
          {selectedMenu === "internship" && <Experience />}
          {selectedMenu === "notable-activities" && <NotableActivities />}
        </div>
      </div>
      <div>
        <h1>Certifications </h1>
      </div>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;

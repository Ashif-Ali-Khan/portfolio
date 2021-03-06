import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/screenheading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" }
  ];

  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 75 },
    { skill: "Django", ratingPercentage: 65 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 75 },
    { skill: "SQL Server", ratingPercentage: 90 },
    { skill: "HTML", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 65 },
    { skill: "Bootstrap", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 75 }
  ];

  const projectsDetails = [
    {
      title: "Near Real-Time Production DATA REST-API",
      duration: { fromDate: "April 2021", toDate: "June 2021" },
      description:
        "GET APIs services push to external partner for real-time data communication.",
      subHeading:
        "Technologies Used: MongoDB, Node JS, Talend Open Studio, NGINX."
    },
    {
      title: "ETL push process for production data",
      duration: { fromDate: "2019", toDate: "present" },
      description:
        "A robust mechanism to push daily production data to external as reporting services.",
      subHeading: "Technologies Used:  Talend Open Studio, SQL Server."
    },
    {
      title: "E&P Data Management Development Project",
      duration: { fromDate: "2016", toDate: "2019" },
      description:
        "Build data integration and GIS web server to maintain E&P technical data.",
      subHeading:
        "Technologies Used: Python, GIS Server, ArcGIS Desktop, PPDM Data Model, .Net DNN Platform."
    }
  ];

  const resumeDetails = [
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"FreeLancer"}
          subHeading={"Full Stack Web Developer"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working on building website.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed end-to-end data management system for G&G technical data
            using GIS Framework and Application
          </span>
          <br />
          <span className="resume-description-text">
            - Developed API and real-time monitoring for production and facility
            data.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed ETL tools to digitize multi-document format into
            semi-automated services and database.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Application SKILLS */

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Like to cycling, basketball and swimming."
      />
      <ResumeHeading
        heading="Hydroponics"
        description="Build my own hydroponics system and step-by-step understanding the process."
      />
      <ResumeHeading
        heading="Investment"
        description="Started to invest in farming area include ducks and sheep also interest in stock market investment"
      />
    </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={
            "https://media.wired.com/photos/599cbdf191885f7b084d37f7/4:3/w_1396,h_1047,c_limit/Robot-Video.jpg"
          }
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

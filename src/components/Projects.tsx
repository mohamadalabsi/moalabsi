import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const spotlightProjects = {
      "Converso": {
        title: "Converso",
        desc:
         "Full-stack AI SaaS application that uses the OpenAI API , Personal education Platform",
        techStack: "NextJs (React), Node.js , Supabase , OpenAI API , VAPI API , Clerk",
        link: "https://github.com/mohamadalabsi/converso",
        open: "https://converso-blush-six.vercel.app",
        image: "/assets/Converso.png",
      },
      "Fullstack-Dashboard": {
        title: "Fullstack-Dashboard",
        desc:
          "Full-stack Dashboard application for their upload images and update portfolio",
        techStack: "JAVA (Spring Boot), React.js, AWS (EC2, RDS, S3), Docker, CI/CD ",
        link: "https://github.com/mohamadalabsi/Full-Stack-Dashboard",
        // open: "https://afternoon-ocean-92382.herokuapp.com/",
        image: "/assets/Fullstack-Dashboard.png",
      },
      "JobPilot": {
        title: "JobPilot",
        desc:
          "Full-stack job application Tracker , Track your Job Hunting for free . ",
        techStack: "NextJs (React), Node.js , MongoDB , BetterAuth",
        link: "https://github.com/mohamadalabsi/JobPilot",
        open: "https://job-pilot-teal.vercel.app",
        image: "/assets/JobPilot.png",
      }
    };
    const projects = {
      "Patient Management System Project": {
        desc:
          "Developed a scalable microservices-based Patient Management System with secure authentication, centralized logging, and efficient inter-service communication Implemented robust APIs, testing, and cloud-based deployment to ensure reliability, performance, and scalability.",
        techStack: "Java ,Spring Boot , microservices , AWS ECS , load balancers, RDS , kafka , gRPC , docker, CI/CD , unit and integration testing",
        link: "https://github.com/mohamadalabsi/Patient-Management.git",
      },
      "Drone Simulation Project": {
        desc:
          "Participated in a university group project developing a Java application for Communication Network Analysis,featuring a drone simulation interface with web-based RESTful API integration, emphasizing data retrieval,processing, and adherence to authentication and pagination protocols.",
        techStack: "Java , Java GUI , RESTful API , JUnit Testing",
      },
      "E-Commerce Web App": {
        desc:
          "Developed a full-stack e-commerce web application using Spring Boot to build secure RESTful APIs for product,order, and user management with  backend business logic,",
        techStack: "Java , Spring Boot , PostgreSQL",
        link:
          "https://github.com/mohamadalabsi/E-Commerce-Web-App.git",
      },
      "Quiz and Qustion Web App": {
        desc:
          "Built a scalable microservices application for quiz and question management targeting teachers and students, Implemented Eureka Server for service registration and discovery, ensuring modular architecture, scalability, and maintainability.",
        techStack: "Java , Spring Boot , PostgreSQL",
        link: "https://github.com/mohamadalabsi/MicroservicesQuestion",
        open: "",
      }
     
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ FullStack projects</span>
        </div>
        <Carousel className="spotlight-carousel ">
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>{spotlightProjects[key]["desc"]}</p>
                  <div className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
              <div className="carousel-mobile-info">
                <h3>{spotlightProjects[key]["title"]}</h3>
                <p className="mobile-desc">{spotlightProjects[key]["desc"]}</p>
                <p className="mobile-tech">{spotlightProjects[key]["techStack"]}</p>
                <div className="mobile-links">
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection key={key} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

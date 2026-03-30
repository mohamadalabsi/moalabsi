import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component<any, any> {
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
    const one = (
      <p>
        I am currently a <b>Software Engineer</b> at
        <a href="https://www.linkedin.com/company/exyte-group/" target="_blank" rel="noreferrer"> Exyte</a>, where I help build
        Software Applications . Previously, I was at
         <a href="https://www.linkedin.com/company/pharmaplan-ttp-ag/" target="_blank" rel="noreferrer"> Pharmaplan</a>  , At the 
        same time, I am undertaking a full-time <b> Bachelor's of Science</b> in{" "}
        <b>Software Engineering / computer science </b>at{" "}
        <a href="https://www.frankfurt-university.de/" target="_blank" rel="noreferrer">
          Frankfurt University of Applied Sciences
        </a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I like building things and discovering new technologies / AI tools and Agents , love Tv shows ,
        and play Football. 
      </p>
    );

    const tech_stack = [
      "Python",
      "Typescript",
      "React.js",
      "NextJs",
      "Node.js",
      "Java",
      "spring boot",
      "Javascript",
      "C/C++",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "MongoDB",
      "PostgreSQL",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {one}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection key={tech_item} delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {two}
            </div>
            <div className="about-image">
              <img alt="Mohammad Al Absi" src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

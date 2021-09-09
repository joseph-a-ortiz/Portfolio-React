import React from "react";
import myImage from "../img/myImage.png";
import logo1 from "../img/cactus logo.png";
import logo2 from "../img/profile pic";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
      logo: logo2,

      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "75%",
          value: "75"
        }, {
          id: "React_skill",
          content: "React",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "ReactNative_skill",
          content: "React Native",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "JSX_skill",
          content: "NodeJS, Express, MongoDB",
          porcentage: "60%",
          value: "60"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
  
            "Hey! I’m Joseph, I was born and raised in Oklahoma, where I enjoy making music and skateboarding. If you like my site, don’t hesitate to reach out!"
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 ">
           
        <div className="container">
          
          <div className="row">
            
            <div className="col-sm-12">
              
            
              <div className="title-box-3">
                        <h5 className="title-left ">About me</h5>
                      </div>
                <div className="row">
                <div className="col-xl-6 px-0 ">
                    <div className="about-me pt-4 pt-md-0 px-0 col-xl-12 col-12">
                    <img src={logo2} alt="Profile Pic" className="profile" />
                 
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead col-12" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
  
                </div>
      
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

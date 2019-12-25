import React from 'react';
import './MainContent.css';


const mainContent = (props) => {
    return (
        <div className='MainContent'>
            <div className="Introduction">
                <div className="SectionHeader">
                    <i className="fa fa-lg fa-handshake-o"></i>
                    <h4>About Me</h4>
                </div>
                <div className="IntroductionContent">
                    {props.introduction}
                </div>
            </div>
            <div className="Experience">
                <div className="SectionHeader">
                    <i className="fa fa-lg fa-briefcase"></i>
                    <h4>Experience</h4>
                </div>
                <div className="ExperienceContent">
                    {props.experiences.map((experience, index) => {
                        return (
                            <div className="ExperienceItem" key={index}>
                                <h5>{experience.role}</h5>
                                <h6>{experience.organization}</h6>
                                <span className="Dates">
                                    <i className="fa fa-calendar"></i>
                                    <span>{experience.dates.startDate} - {experience.dates.endDate}</span>
                                </span>
                                <ul className="List">
                                    {experience.descriptions.map((dataPoint, index) => {
                                        return (
                                            <li key={index}>
                                                {dataPoint}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="Project">
                <div className="SectionHeader">
                    <i className="fa fa-lg fa-tasks"></i>
                    <h4>Projects</h4>
                </div>
                <div className="ProjectContent">
                    {props.projects.map((project, index) => {
                        return (
                            <div className="ProjectItem" key={index}>
                                <h5>
                                    {project.title}
                                    <span className="ProjectLink">
                                        <a href={project.link} target="_blank" className="fa fa-github"></a>
                                    </span>
                                </h5>
                                <h6>{project.subtitle}</h6>
                                <span className="Dates">
                                    <i className="fa fa-calendar"></i>
                                    <span>{project.dates.startDate} - {project.dates.endDate}</span>
                                </span>
                                <ul className="List">
                                    {project.descriptions.map((dataPoint, index) => {
                                        return (
                                            <li key={index}>
                                                {dataPoint}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="Skill">
                    <div className="SectionHeader">
                        <i className="fa fa-lg fa-wrench"></i>
                        <h4>Skills</h4>
                    </div>
                    <ul className="SkillList">
                        {props.skills.map((skill, index) => {
                            return (
                                <li className="SkillListWrapper" key={index}>
                                    <span className="SkillListItem">
                                        {skill}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="Education">
                    <div className="SectionHeader">
                        <i className="fa fa-lg fa-graduation-cap"></i>
                        <h4>Education</h4>
                    </div>
                    <div className="EducationContent">
                        {props.education.map((edu, index) => {
                            return (
                                <div className="EducationItem" key={index}>
                                    <h5>{edu.degree} : {edu.school}</h5>
                                    <h6>{edu.major}</h6>
                                    <span className="Dates">
                                        <i className="fa fa-calendar"></i>
                                        <span>{edu.dates.startDate} - {edu.dates.endDate}</span>
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default mainContent;


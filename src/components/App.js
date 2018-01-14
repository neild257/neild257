import React, { Component } from 'react';
import profileImage from "../images/profilePicLinkedIn.jpeg";

class App extends Component {
  render() {
    return (
     <div className="container">
       <div className="row" style={{padding: "10px"}}>
         <div className="photo-wrapper col-xs-4">
           <img role="presentation" src={profileImage} className="img-circle center-block profile-pic" alt="profile picture"/>
           <h2 style={{textAlign:"center"}}>Harshit Pareek</h2>
           <h4 style={{textAlign:"center"}}>Software Engineer/Full Stack Engineer</h4>
           <div className="section-divider"></div>
           <ul className="loc-wrapper">
             <li>
              <i className="glyphicon glyphicon-send right-margin"></i>
              <a href="mailto:hars.pareek@nyu.edu">hars.pareek@nyu.edu</a>
             </li>
             <li>
              <i className="glyphicon glyphicon-earphone right-margin"></i>
              <span>(917)378-4946</span>
             </li>
             <li>
              <i className="glyphicon glyphicon-home right-margin"></i>
              <span>New York City, NY</span>
             </li>
           </ul>
           <div className="section-divider"></div>
           <div className="social-wrapper">
            <a href="https://github.com/hars1014" className="fa fa-2x fa-github"></a>
            <a href="https://www.linkedin.com/in/harshit-pareek-3995b586/" className="fa fa-2x fa-linkedin"></a>
            <a href="https://twitter.com/harshit031091" className="fa fa-2x fa-twitter"></a>
            <a href="https://www.facebook.com/harshit.pareek.75873" className="fa fa-2x fa-facebook"></a>
           </div>
         </div>
         <div className="content-wrapper col-xs-8">
           <div className="main-wrapper">
            <section>
              <i className="fa fa-lg fa-handshake-o right-margin"></i>
              <h4 className="uppercase"> About Me </h4>
              <div className="section-divider"></div>
              <p> Hi there! I am an aspiring Software Engineer with experience and interest in Full Stack, Machine Learning, Data Science and Cloud Computing. I have a master's degree in Computer Science from New York University and a B.Tech in Computer Science from Rajasthan Technical University, India. I have worked on different languages and frameworks like C++, Python, Ruby and Django but recent love are JavaScript, Node, React, Angular, Java and Spring. I am looking for new opportunities in Software Engineering or Full Stack Engineer. </p>
            </section>
            <section>
              <i className="fa fa-lg fa-briefcase right-margin"></i>
              <h4 className="uppercase">Experience</h4>
              <div className="section-divider"></div>
              
              <div className="sub-section">
                <h5>Software Engineer</h5>
                <h6>Jobletics Inc.</h6>
                <span>
                  <i className="fa fa-calendar right-margin"></i>
                  <span>Sep 2017 - Dec 2017</span>
                </span>
                <p>Worked as a Software Engineer under two lead engineers. Participated in daily scrum meetings discussing about new features to add, improve performance and daily code maintainence. Developed "Worker Onboarding" backend service using Node, Express, MongoDB and Firebase. Queried Firebase to push and pull data and generating insights. Developed React/Redux/React-Native Components to improve the user interactivity and worker management in admin panel.   </p>
              </div>
              <div className="sub-section">
                <h5>Voluntary Intern</h5>
                <h6>Argo Labs.</h6>
                <span>
                  <i className="fa fa-calendar right-margin"></i>
                  <span>May 2017 - July 2017</span>
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa doloremque debitis accusamus et aperiam ab dignissimos corrupti ullam possimus! Nesciunt sed neque unde id inventore nobis eos a eum?</p>
              </div>

            </section>
           </div>
         </div>
       </div>
     </div>
    );
  }
}

export default App;

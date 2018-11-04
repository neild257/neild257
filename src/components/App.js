import React, { Component } from 'react';
import profileImage from "../images/pp.jpeg";
import heartImage from "../images/heart-img.png";

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
              <a href="mailto:harspareek@gmail.com">harspareek@gmail.com</a>
             </li>
             <li>
              <i className="glyphicon glyphicon-earphone right-margin"></i>
              <span>+1 (917)378-4926</span>
             </li>
             <li>
              <i className="glyphicon glyphicon-home right-margin"></i>
              <span>Los Angles, California</span>
             </li>
           </ul>
           <div className="section-divider"></div>
           <div className="social-wrapper">
            <a href="https://github.com/harry101491" className="fa fa-2x fa-github"></a>
            <a href="https://www.linkedin.com/in/harshit-harry-pareek-3995b586/" className="fa fa-2x fa-linkedin"></a>
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
              <p> Hi there! I am an aspiring Software Engineer with experience and interest in Full Stack, Machine Learning, Data Science and Cloud Computing. I have a master's degree in Computer Science from New York University and a B.Tech in Computer Science from Rajasthan Technical University, India. I have worked on different languages and frameworks like C++, Python, Ruby and Django but my recent love is for JavaScript, Node, React, Angular, Java and Spring. I am looking for new opportunities in Software Engineering or Full Stack Engineer. </p>
            </section>
            <section>
              <i className="fa fa-lg fa-briefcase right-margin"></i>
              <h4 className="uppercase">Experience</h4>
              <div className="section-divider"></div>

              <div className="sub-section">
                <h5>Software Developer</h5>
                <h6>CareMore HealthCare</h6>
                <span>
                  <i className="fa fa-calendar right-margin"></i>
                  <span>Jan 2018 - present</span>
                </span>
                <p>Worked as a Software Developer in an agile team to build a mobile and web application. Developed rich and robust User Interface (UI) Components using HTML 5, CSS 3, SASS, LESS (CSS Pre-processors), Type Script (JavaScript Superset), Redux, Angular 4 (JavaScript Framework). Implemented REST (Representational State Transfer) Web Services and developed CRUD operations using Spring Web MVC (Model-View-Controller), Spring Boot and Java Enterprise Edition frameworks. Collaborated with other Software Developers and Testers while following Agile Development using JIRA (Peer Code Review, Daily Scrum Meetings, Requirement Gathering and Analysis, Issue Tracking etc.). Managed and Analysed the performance, life cycle, publishing of REST Web Services using WSO 2 API Manager Tool. Documented and Tested the REST API Web Services using Swagger (Java Documentation and Testing Framework). </p>
              </div>
              
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
                <p>A Data Science and Full Stack Intern, developed task automation for SQUID (Street QUality Identification Device) using Apache Aireflow. Implemented tasks of image collection, computer vision and data processing using Python and Bash Scripting. Developed data models, NoSQL database and full stack application for NYC Bus locating app using serverless architecture of AWS Lambda.  </p>
              </div>

              <div className="sub-section">
                <h5>Teaching Assistant</h5>
                <h6>New York University</h6>
                <span>
                  <i className="fa fa-calendar right-margin"></i>
                  <span>Jan 2016 - May 2017</span>
                </span>
                <p>Worked as a Teaching Assistant for C++ and Data Structures. Participated in improving course material with professor and provided great suggestions to further enhance the learning in topics of Pointers, Binary Search Trees, STL and Graph Theory. Taught and assisted undergrad students during recitation and programming labs. Graded papers during assignments, mid-terms and finals. </p>
              </div>
            </section>
            
            <section>
              <i className="fa fa-lg fa-tasks right-margin"></i>
              <h4 className="uppercase"> Projects </h4>
              <div className="section-divider"></div>
              
              <div className="sub-section">
                <h5>
                  Know Your Neighborhood : NYU 
                  <span className="left-margin">
                    <a href="https://github.com/hars1014/android_cloud_project" className="fa fa-github"></a>
                  </span>
                </h5>
                <h6>Android Cloud Project</h6>
                <span>
                  <i className="fa fa-calendar right-margin"></i>
                  <span>Jan 2017 - May 2017</span>
                </span>
                <ul>
                  <li> Developed android app for finding best neighbourhood on crime, noise etc. using big data analysis </li>
                  <li> Implemented visualization using Maps API and D3 to depict statistically the analysis of neighbourhood </li>
                  <li> Collected and Analysed NYC 311 Data using AWS elastic search and Hadoop to produce insights </li>
                </ul>
              </div>

              <div className="sub-section">
                <h5>
                  Twitter Treand App : NYU 
                  <span className="left-margin">
                    <a href="https://github.com/hars1014/TwitterTrend" className="fa fa-github"></a>
                  </span>
                </h5>
                <h6>Tweet Text Sentiment Analysis</h6>
                <span>
                  <i className="fa fa-calendar right-margin"></i>
                  <span>Jan 2017 - May 2017</span>
                </span>
                <ul>
                  <li> Implemented real time trend analysis app using AWS Elastic search for data fetching and geo querying </li>
                  <li> Analysed collected Tweets using Watson Emotional API and Notification service using AWS SNS </li>
                  <li> Deployed the backend on AWS EC2 instance with load balancing using Node and Express framework </li>
                </ul>
              </div>

              <div className="sub-section">
                <h5>
                  Visualization of Twitter Verbal Abuse : NYU 
                  <span className="left-margin">
                    <a href="https://github.com/NYU-CS6313-SPRING2016/Group-11-Twitter-Verbal-Abuse" className="fa fa-github"></a>
                  </span>
                </h5>
                <h6>Verbal Abuse Analysis of Tweets</h6>
                <span>
                  <i className="fa fa-calendar right-margin"></i>
                  <span> Oct 2016 - Dec 2016</span>
                </span>
                <ul>
                  <li> Implemented a real-time application depicting the verbal abuse on twitter based on demographics </li>
                  <li> Applied natural language processing to the tweets to segregate emotions including anger and disgust </li>
                  <li> Programmed user interface using d3.js technology and implemented business logic by Node.js </li>
                </ul>
              </div>
              </section>

              <section className="skills">
                <i className="fa fa-lg fa-wrench right-margin"></i>
                <h4 className="uppercase"> Skills </h4>
                <div className="section-divider"></div>
                  <ul className="skill-list">
                    <li>
                      <span className="list-item">JavaScript(ES6)</span>
                    </li>
                    <li>
                      <span className="list-item">Java</span>
                    </li>
                    <li>
                      <span className="list-item">Python</span>
                    </li>
                    <li>
                      <span className="list-item">C++</span>
                    </li>
                    <li>
                      <span className="list-item">Spring MVC</span>
                    </li>
                    <li>
                      <span className="list-item">HTML5</span>
                    </li>
                    <li>
                      <span className="list-item">Node</span>
                    </li>
                    <li>
                      <span className="list-item">Express</span>
                    </li>
                    <li>
                      <span className="list-item">React</span>
                    </li>
                    <li>
                      <span className="list-item">Angular</span>
                    </li>
                    <li>
                      <span className="list-item">Redux</span>
                    </li>
                    <li>
                      <span className="list-item">React-Native</span>
                    </li>
                    <li>
                      <span className="list-item">CSS3</span>
                    </li>
                    <li>
                      <span className="list-item">SASS</span>
                    </li>
                    <li>
                      <span className="list-item">TypeScript</span>
                    </li>
                    <li>
                      <span className="list-item">JQuery</span>
                    </li>
                    <li>
                      <span className="list-item">Machine Learning</span>
                    </li>
                    <li>
                      <span className="list-item">Artificial Intelligence</span>
                    </li>
                    <li>
                      <span className="list-item">Map Reduce</span>
                    </li>
                    <li>
                      <span className="list-item">Hadoop</span>
                    </li>
                    <li>
                      <span className="list-item">Hive</span>
                    </li>
                    <li>
                      <span className="list-item">Mocha & Chai</span>
                    </li>
                    <li>
                      <span className="list-item">Babel & Webpack</span>
                    </li>
                    <li>
                      <span className="list-item">AWS/EC2/SNS/Lambda/SQS/DynamoDB</span>
                    </li>
                    <li>
                      <span className="list-item">Docker</span>
                    </li>

                  </ul>
              </section>
              
              <section>
                <i className="fa fa-lg fa-graduation-cap right-margin"></i>
                <h4 className="uppercase"> Education </h4>
                <div className="section-divider"></div>
                <div className="sub-section">
                  <h5>Master of Science: New York University</h5>
                  <h6>Computer Science</h6>
                  <span>
                    <i className="fa fa-calendar right-margin"></i>
                    <span>Sep 2015 - May 2017</span>
                  </span>
                </div>
                <div className="sub-section">
                  <h5>Bachelor of Technology: Rajasthan Technical University</h5>
                  <h6>Computer Science and Engineering</h6>
                  <span>
                    <i className="fa fa-calendar right-margin"></i>
                    <span>Sep 2010 - Jun 2014</span>
                  </span>
                </div>
              </section>              
           </div>
         </div>
       </div>
       <section className="footer">
         <span>Made with <span className="heart"><img src={heartImage} alt="heart image" style={{height:"15px", width:"15px"}}/></span>  by &copy; Harshit Pareek (Harry) inspired by Jonathan Bloomer </span>
       </section>
     </div>
    );
  }
}

export default App;

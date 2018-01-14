import React, { Component } from 'react';
import profileImage from "../images/profilePicLinkedIn.jpeg";

class App extends Component {
  render() {
    return (
     <div className="container">
       <div className="row">
         <div className="photo-wrapper col-xs-4">
           <img role="presentation" src={profileImage} className="img-circle center-block profile-pic" alt="profile picture"/>
           <h2 style={{textAlign:"center"}}>Harshit Pareek</h2>
           <h4 style={{textAlign:"center"}}>Software Engineer/Full Stack Engineer</h4>
           <div className="section-divider"></div>
           <ul className="loc-wrapper">
             <li>
              <i className="glyphicon glyphicon-send" style={{marginRight: "5px"}}></i>
              <a href="mailto:hars.pareek@nyu.edu">hars.pareek@nyu.edu</a>
             </li>
             <li>
              <i className="glyphicon glyphicon-earphone" style={{marginRight: "5px"}}></i>
              <span>(917)378-4946</span>
             </li>
             <li>
              <i className="glyphicon glyphicon-home" style={{marginRight: "5px"}}></i>
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
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis porro quis laudantium dignissimos eveniet, minus modi amet iure inventore totam facilis, mollitia rerum ipsa atque aliquam assumenda minima asperiores.
         </div>
       </div>
     </div>
    );
  }
}

export default App;

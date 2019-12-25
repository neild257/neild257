import React, { Component } from 'react';
import './App.css';

import SideNav from './SideNav/SideNav';
import MainContent from './MainContent/MainContent';
import FooterAnimation from './FooterAnimation/FooterAnimation';

import data from '../__mockdata__/data.json';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="ContentWrapper">
          <SideNav {...data.sideNav}/>
          <MainContent {...data.mainContent}/>
        </div> 
        <FooterAnimation />
      </div>
    );
  }
}

export default App;

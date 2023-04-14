import React, { useEffect } from "react";
import "./page_styles/home.css"

import {
    Link,
    Outlet,
} from "react-router-dom";


import {Footer} from "../parts/footer";
import exercises from "../data/exercises.js";

class Home extends React.Component {

  authenticate()
  {
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount()
  {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }
  
  render(){
    return (
        <div className="page">
          <div className="menu_container">
            <div className="menu_button">
              <Link to="/workout" id="link_home"><p id="text_button">WORKOUT</p></Link>
            </div>
            <div className="menu_button">
              <Link to="/exercises" id="link_home"><p id="text_button">EXERCISES</p></Link>
            </div>
          </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
  );
  }
}

export default Home;




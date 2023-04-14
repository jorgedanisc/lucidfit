import React, { useEffect } from "react";
import "./page_styles/home.css"

import {
    Link,
    Outlet,
} from "react-router-dom";


import {Footer} from "../parts/footer";
import exercises from "../data/exercises.js";

function Workout() {



    return (
        <div className="page">
          <div className="menu_container">
            <div className="menu_button">
              <div id="link_home"><p id="text_button">RANDOM</p></div>
            </div>
          </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
  );

}

export default Workout;




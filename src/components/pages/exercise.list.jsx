import React, { useEffect } from "react";
import "../styles/style.css";
import "../pages/page_styles/exercises.css"

import {
    Link,
    Outlet,
} from "react-router-dom";

import { ExercisesState } from "../data/exercises";
import { useState } from 'react';

// functions
import { GenerateWorkout } from "../functions/generateWorkout";

// data
import exercisesData from "../data/exercises";


function Exercises() {

    const [exercisesMap, setExercisesMap] = useState(new Map());
    
    function BuildMap()
    {
        for(let i=0; i<exercisesData.length; i++)
        {exercisesMap.set(i , exercisesData[i]);}
    }   

    useEffect(() => {
        BuildMap();     
        //GenerateWorkout();
      }, [])

  return (
        <div className="page">
            
            <div className="content">
                <Outlet />
            </div>
        </div>
  );
}

export default Exercises;
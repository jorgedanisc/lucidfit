import React from 'react';
import ReactDOM from "react-dom";
import "./components/styles/index.css";
import "./components/styles/w3.css";
// import "./components/styles/fonts/mainFont.ttf";
// import "./components/styles/fonts/secondFont.ttf";
// import "./components/styles/fonts/Socials.otf";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {
  Home,
  Exercises,
  Workout,
  Collection,
  Shop,
  SupportThanks,
} from "./components/pages/import/importPages.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/workout" element={<Workout />} />
      {/* <Route path="/support" element={<Support />} />
      <Route path="/thank_you_for_submitting" element={<SupportThanks />} /> */}
    </Routes>
  </Router>
);

/* 
cd tvoyager
npm install
npm install uuid
npm install material -ui
npm install react-router-dom@6
npm start
*/
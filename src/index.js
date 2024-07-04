import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProjectsDisplay from './Projects-display';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
    <Router>
      <div>
        <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/projects' element={<ProjectsDisplay/>} />
        </Routes>
      </div>
    </Router>
  </>
);
import React from "react";
import "./Project-display.css"
import { useNavigate } from 'react-router-dom';

function ProjectsDisplay(){
    const navigate = useNavigate();
    function handle_onclick()
    {
        navigate('/');
        console.log("hi");
    }
    return <div className="body2">
        <button onClick={handle_onclick} className="Button1">BACK</button>
        <br/>
        <p>
            <ul className="list">
                <li className="words">So here are a couple of projects which I have done:</li>
                <br/>
                <li><a href="https://github.com/Aryaman-Angurana/SoC-24-Web-Development"> Web Development (this project hehe)</a></li>
                <br/>
                <li><a href="https://github.com/Aryaman-Angurana/22B1043_IntroToAppDev"> App Development </a></li>
                <br/>
                <li><a href="https://github.com/Aryaman-Angurana/Minesweeper_cricket"> Minesweeper Cricket </a></li>
                <br/>
                <li><a href="https://github.com/Aryaman-Angurana/Chess"> Chess </a></li>
                <br/>
                <li><a href="https://github.com/Aryaman-Angurana/2048"> 2048 </a></li>
                <br/>
            </ul>
        </p>
    </div>
}

export default ProjectsDisplay;
import React from "react";
import "./Projects.css"
import { useNavigate } from 'react-router-dom';

function Projects(){
    const navigate = useNavigate();
    function handle_onclick()
    {
        navigate('/projects');
        console.log("hi");
    }
    return <div className="body1">
        <button onClick={handle_onclick} className="button1"></button>
    </div>
}

export default Projects;
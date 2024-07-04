import React from "react";
import './App.css'
import Projects from "./Projects";
import myImage from "./image.jpg"

function App() {
  return (
    <div className="App">
    <div className="background">
      <p className="para">
        <span className="container">
          <span>Kon'nichiwa, min'na</span>
          <span className="line"></span>
        </span>
        <img src={myImage} alt="Description of the image" className="my-image"/>
        <br/>
        <br/>
        Hi everyone, I'm Aryaman Angurana, a third-year undergraduate student in the CSE department at IITB. I'm passionate about coding and problem-solving, and this year, I'm excited to delve deeper into software development and artificial intelligence (yes, the hot topics 😊).
        <br/>
        <br/>
        During my time at IITB, I've explored various fields of Computer Science, engaging in both simple and complex projects. This hands-on experience has equipped me with skills in app development, web development, and machine learning. I've particularly enjoyed learning about Flutter development, the MERN stack, and various Python ML libraries.
        <br/>
        <br/>
        But enough about academics 😅. Outside of my studies, I love watching anime and donghuas (for those who don't know, that's the Chinese form of anime ✌️). I'm also an avid runner and enjoy singing (though I might not be the best at it 🙃). Music is a constant companion, and yes, I often get scolded for having my headphones on all the time, but hey, it's fun 😂.
        <br/>
        <br/>
        So, that's a bit about me. This website showcases some of the projects I've worked on so far. I hope to update it with a blog page in the future 😊.
      </p>
      <Projects/>
      <footer class="footer">
      <div class="container1">
        <div class="row">
          <div class="col-md-6">
            <hr className="line"/>
            <h3>Contact Me</h3>
            <ul class="contact-list">
              <li>Email: aryamanangurana26@gmail.com</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="social-icons">
              <li><a href="https://www.linkedin.com/in/aryaman-angurana">linkedin<i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://github.com/Aryaman-Angurana">github<i class="fa fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </div>
  );
}

export default App;

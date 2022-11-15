import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import man from "./image/man.png";

const Home = () => {
  return (
    <div className="container " id="about">
      <div className="row">
        <div className="col-md-7">
          <section>
            <div className="mt-4">
              <h6 className="namecol">WELCOME TO MY PORTAL</h6>
              <h3 className="name mt-4">
                Hi.. I am <span className="namecol">Shailendra chaudhary</span>
              </h3>
              <h3 className="typecolors">
                
                <span>
                  <Typewriter
                    options={{
                      strings: ["a UI Developer", "a UI/UX Designer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h3>
              <p className="mt-4">UI developer with 2.5+ years experience and specialization in Web App Development. Designed applications that increased user satisfaction by 20% and resolved persistent browser compatibility issues for Firefox users whilst rigorously adhering to project deadlines. Looking to leverage my skills to produce seamless and profitable UI for Semtex Systems.</p>
            </div>
            <div className="d-flex justify-content-between social">
              <button className="btn allbtnclick">
               <a href="https://github.com/Sc4499"><i class="fab fa-github"></i></a> 
              </button>
              <button className="btn allbtnclick">
                <a href="https://www.linkedin.com/in/shailendra-chaudhary-072258117"><i class="fab fa-linkedin-in"></i></a>
              </button>
              <button className="btn allbtnclick">Hire me</button>
            </div>
          </section>
        </div>
        <div className="col-md-5">
            <img src={man} className="man" alt="man"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;

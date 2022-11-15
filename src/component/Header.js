import "./Header.css";
import Logo from "./image/LOGOSC.png";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./Home";
import Feature from "./Feature";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume/Resume";
import Skills from "./Skills";

const Header = () => {

   return (
    <div>
    
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container-fluid">
    <img className='logo' src={Logo} alt="logo"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link smooth className="nav-link" to={"/#about"}>ABOUT ME</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/#feat"}>FEATURE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/#port"}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/#res"}>RESUME</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/#skil"}>SKILLS</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/#cont"}>CONTACT</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<Home/>
<Feature/>
<Portfolio/>
<Resume/>
<Skills/>
<Contact/>
    </div>
  )
}

export default Header

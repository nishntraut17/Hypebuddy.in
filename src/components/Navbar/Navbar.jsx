import React, {useState} from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import {FaBars,FaTimes} from "react-icons/fa";
import hypebuddy from "../../img/hypebuddy2.png";
// import hypelogo from "../../img/hypelogo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if(click){
      setColor(true);
    }
    else if(!click && window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }
  window.addEventListener("scroll",changeColor);
  return (
    <div className={click? "n-wrapper": "n-wrapper"} id="Navbar">
      {/* left */}
      <div className="n-left">
        <Link activeClass="active" to="Intro" spy={true} smooth={true} className="link-component">
          <div className="n-name">
            <img src={hypebuddy} alt="hypebuddyImg" />
          </div>
        </Link>
        {/* <div className="n-name">Hypebuddy</div> */}
        {/* <Toggle /> */}
      </div>

      {/* right */}
      <div className="n-right">
        <div className={click? "n-list active" : "n-list"}>
          <ul className="n-ul" style={{ listStyleType: "none" }} onClick={handleClick}>
            <li>
              <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Brands
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* //hamburger */}
        <div className="hamburger" onClick={handleClick}>
          {
            click? (
              <FaTimes size={20} style={{color: "white"}} />
            ): (
              <FaBars size={20} style={{color: "black"}} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

import Classplus from "../../img/Classplus.jpg";
import Clatapult from "../../img/Clatapult.jpg";
import Aalsi from "../../img/Aasli.jpg";
import JoshTalk from "../../img/JoshTalk1.jpg";
import Bellcat from "../../img/bellCat1.jpg";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Major Brands 
          </span>
          <span>we have worked with</span>
          <span style={{fontSize: "24px"}}>
            We have catered few of the
            <br />
            Biggest ed-techs of the country.
            <br />
            From Kolkata to Bangalore...
            <br />
            We have covered India Diagonally &#128521;
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">work with us</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring", delay:0.2 }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Classplus} alt="" style={{width:"150px", height:"150px", borderRadius: "100%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={Clatapult} alt="" style={{width:"200px", height:"200px", borderRadius: "100%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={Aalsi} alt="" style={{width:"150px", height:"150px", borderRadius: "100%"}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={JoshTalk} alt="" style={{width:"150px", height:"150px", borderRadius: "100%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={Bellcat} alt="" style={{width:"200px", height:"200px", borderRadius: "100%"}}/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import newSmile from "../../img/newSmiler.png";
import newBigSmile from "../../img/newBigSmiler.png";
import newClearGlass from "../../img/newClearGlassr.png";
import newDollar from "../../img/newDollarr.png";
import newGlass from "../../img/newGlassr.png";
import newMeme from "../../img/newMemer.png";
import newHeart from "../../img/newHeartr.png";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our</span>
        <span>Services</span>
        <span style={{ fontSize: "24px" }}>
          End to End distribution services 
          <br/>
          to customized services,
          <br />
          we have it all!
        </span>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button" style={{ marginTop : "0.5rem" }}>Learn more</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* 1st card */}
        <motion.div
          initial={{ left: "0rem", top:"1rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
        >
          <Card
            emoji={newSmile}
            heading={"1. Content Creation & Production"}
            detail={"Graphic Design, Video Editing, Cinematic shoots, Promo shoots, etc."}
            scale = {0.8}
          />
        </motion.div>

        {/* 2th */}
        <motion.div
          initial={{ left: "14rem", top:"2.5rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={newGlass}
            heading={"2. Social Media Management"}
            detail={"Taking care of your brand presence and engagement."}
            scale = {0.8}
          />
        </motion.div>
        
        {/* 3nd card */}
        <motion.div
          initial={{left: "40rem", top:"0rem"}}
          whileInView={{ left: "35rem" }}
          transition={transition}
        >
          <Card
            emoji={newMeme}
            heading={"3. Public Relations"}
            detail={"Scheduling interviews on other distributions, events organizing & management etc."}
            scale = {0.8}
          />
        </motion.div>
        {/* 4th card */}
        <motion.div
          initial={{ top: "16rem", left: "-20rem" }}
          whileInView={{ left: " -15rem" }}
          transition={transition}
        >
          <Card
            emoji={newDollar}
            heading={"4. Brand Sponsorships & Collaborations"}
            detail={
              "Get the best deals & monetize your distrubution."
            }
            color="rgba(252, 166, 31, 0.45)"
            scale = {0.8}
          />
        </motion.div>
        {/* 5rd card */}
        <motion.div
          initial={{ left: "-4rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <Card
            emoji={newHeart}
            heading={"5. Business Consulting"}
            detail={"Get consultation from our team members who have worked with unicorns & fortune 500 companies, End to End competitive research."}
            scale={0.8}
          />
        </motion.div>
        {/* 6th card */}
        <motion.div
          initial={{ top: "19rem", left: "20rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={newBigSmile}
            heading={"6. Corporate Alliances & Partnerships"}
            detail={
              "Alliance & Partnerships is where the main Buisness is, Don't miss on this!"
            }
            color="rgba(252, 166, 31, 0.45)"
            scale={0.8}
          />
        </motion.div>
         {/* 7ht card  */}
        <motion.div
          initial={{ top: "18rem", left: "40rem" }}
          whileInView={{ left: " 33rem" }}
          transition={transition}
        >
          <Card
            emoji={newClearGlass}
            heading={"7.Vertical Expansion Strategies"}
            detail={
              "Not all eggs should be in one baseket. Expand and scale your brand!"
            }
            color="rgba(252, 166, 31, 0.45)"
            scale={0.8}
          />
        </motion.div>


        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

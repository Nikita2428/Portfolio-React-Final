import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/HtmlCssJS.png";
import Fiverr from "../../img/React.png";
import Amazon from "../../img/Azure.png";
import Shopify from "../../img/Java.png";
import Facebook from "../../img/MySQL.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
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
           Here are some of my skills
          </span>
          <span>Forntend and Backend Languages</span>
          <spane>
            I have a strong foundation in programming, web development, and database management
            <br />
            I am proficient in building dynamic applications and working with cloud platforms
            text
            <br />
            My expertise includes developing efficient solutions and optimizing system performance
            <br />
            I learn and evolve constantly.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
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
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/React-xEcwTZMgqWz8wUKWLNgqJEogvqc1QL.png"
              alt="React"
            />
          </div>
          <div className="w-secCircle">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MySQL-PtV5Z1hHfU7jsZMjoyVTWC8WicZNGI.png"
              alt="MySQL"
            />
          </div>
          <div className="w-secCircle">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Java-3jfdkuFFFhjtOGDch7bYDEadtLZyIu.png"
              alt="Java"
            />
          </div>
          <div className="w-secCircle">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azure-tNnHgSVW7zIiROlD4XWfs0pHu9CEcp.png"
              alt="Azure"
            />
          </div>
          <div className="w-secCircle">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HtmlCssJS-22n4FgBK60ZjPFitC5vcSaqEpyG0iB.png"
              alt="HTML CSS JS"
            />
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

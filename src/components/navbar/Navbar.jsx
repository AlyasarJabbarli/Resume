import { Link, NavLink } from "react-router-dom";
import "./style.css";
import "./responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import { useState } from "react";

const Navbar = () => {
  const activeLink = "activeLink";
  const normalLink = "normalLink";
  // const [counter, setCounter] = useState(0);
  const [height , setHeight] = useState(0)
  
  // const handleOnClick = () => {
  //   console.log();
  //   if (counter === 0) {
  //     setCounter(1);
  //     setHeight(100)
  //   } else {
  //     setCounter(0);
  //     setHeight(0)
  //   }
  // };
  return (
    <nav>
      <div className="container">
        <div className="nav-all">
          <div className="mobile_nav">
            <div className="mobile_nav_top">
              <NavLink
                to="/"
                className={(isActive) => (isActive ? activeLink : normalLink)}
              >
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              </NavLink>
              <div className="hamburger_menu" onClick={() => setHeight(height === 300 ? 0 : 300)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="mobile_nav_bottom" style ={{height:`${height}px`}}>
            <ul>
                <li>
                  <NavLink to="/resume">RESUME</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">PORTFOLIO</NavLink>
                </li>
                <li>
                  <NavLink to="/certifications">CERTIFICATIONS</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="computer_header">
            <div className="left">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={(isActive) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/resume">RESUME</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">PORTFOLIO</NavLink>
                </li>
                <li>
                  <NavLink to="/certifications">CERTIFICATIONS</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>
                  <Link>F</Link>
                </li>
                <li>
                  <Link>L</Link>
                </li>
                <li>
                  <Link>G</Link>
                </li>
                <li>
                  <Link>I</Link>
                </li>
              </ul>
              <ButtonIcon text={"Hire Me"} icon={faPaperPlane} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

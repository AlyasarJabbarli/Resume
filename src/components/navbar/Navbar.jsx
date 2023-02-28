import { Link, NavLink } from "react-router-dom";
import "./style.css";
import "./responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../buttonIcon/ButtonIcon";

const Navbar = () => {
  const activeLink = "activeLink";
  const normalLink = "normalLink";
  return (
    <nav>
      <div className="container">
        <div className="nav-all">
          <div className="mobile_nav">
            <NavLink
              to="/"
              className={(isActive) => (isActive ? activeLink : normalLink)}
            >
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </NavLink>
            <div className="hamburger_menu">
              <FontAwesomeIcon icon={faBars} />
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
                  <NavLink to="/RTYFUGIH">BLOG</NavLink>
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

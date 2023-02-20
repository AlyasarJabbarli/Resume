import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../buttonIcon/ButtonIcon";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-all">
          <div className="left">
            <ul>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="">RESUME</a>
              </li>
              <li>
                <a href="">PORTFOLIO</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">F</a>
              </li>
              <li>
                <a href="">L</a>
              </li>
              <li>
                <a href="">G</a>
              </li>
              <li>
                <a href="">I</a>
              </li>
            </ul>
            <ButtonIcon text={"Hire Me"} icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

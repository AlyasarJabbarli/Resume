import {
  faDesktopAlt,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import H2heading from "../../components/h2heading/H2heading";
import ProgressAll from "../../components/progressAll/ProgressAll";
import ServicesCard from "../../components/servicesCard/ServicesCard";
import "./style.css";
import './responsive.css'

const Home = () => {
  return (
    <main>
      <div className="home">
        <div className="about_text">
          <H2heading text={"About Me"} />
          <p>
            Started earnest brother believe an exposed so. Me he believing
            daughters if forfeited at furniture. Age again and stuff downs
            spoke. Late hour new nay able fat each sell. Nor themselves age
            introduced frequently use unsatiable devonshire get. They why quit
            gay cold rose deal park. One same they four did ask busy. Reserved
            opinions fat him nay position. Breakfast as zealously incommode do
            agreeable furniture. One too nay led fanny allow plate.
          </p>

          <p>
            Quick six blind smart out burst. Perfectly on furniture dejection
            determine my depending an to. Add short water court fat. Her
            bachelor honoured perceive securing but desirous ham required.
            Questions deficient acuteness to engrossed as. Entirely led ten
            humoured greatest and yourself. Besides ye country on observe. She
            continue appetite endeavor she judgment interest the met. For she
            surrounded motionless fat resolution may.
          </p>
        </div>
        <div className="services">
          <H2heading text={"My Services"} />
          <div className="serviceCards">
            <ServicesCard
              icon={faDesktopAlt}
              heading={"Web Development"}
              text={"I have been working on web design for 10 years."}
            />
            <ServicesCard
              icon={faHamburger}
              heading={"Web Development"}
              text={"I have been working on web design for 10 years."}
            />
            <ServicesCard
              icon={faHamburger}
              heading={"Web Development"}
              text={"I have been working on web design for 10 years."}
            />
            <ServicesCard
              icon={faHamburger}
              heading={"Web Development"}
              text={"I have been working on web design for 10 years."}
            />
          </div>
        </div>

        <div className="skills">
          <ProgressAll />
          <ProgressAll />
        </div>
      </div>
    </main>
  );
};

export default Home;

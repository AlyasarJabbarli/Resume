import {
  faArrowUpRightDots,
  faCalendarCheck,
  faCode,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import H2heading from "../../components/h2heading/H2heading";
import Progress from "../../components/progress/Progress";
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
          I am a highly skilled web developer, software engineer, and instructor with over 2 years of experience in the tech industry. My expertise lies in building responsive and interactive user interfaces using HTML, CSS, and JavaScript, and I have a deep understanding of popular libraries and frameworks such as React and Angular.
          </p>

          <p>
          As a software engineer, I have worked on a diverse range of projects, from small web applications to complex enterprise software. I possess a wide range of programming language skills and am proficient in software architecture, algorithms, and data structures. I have also gained extensive experience with agile methodologies and have a proven track record of working effectively in cross-functional teams.
          </p>

          <p>
          In addition to my development work, I have a passion for teaching and have served as an instructor for 1 year. I have successfully designed and delivered courses on web development, programming languages, and other related topics, using my ability to break down complex concepts into easily understandable terms. I am committed to staying up-to-date with the latest trends and technologies in the tech industry and am always seeking new opportunities to learn and grow.
          </p>
        </div>
        <div className="services">
          <H2heading text={"My Services"} />
          <div className="serviceCards">
            <ServicesCard
              icon={faCode}
              heading={"Web Development"}
              text={"I have been working on web design for 4 years."}
            />
            <ServicesCard
              icon={faEnvelopeCircleCheck}
              heading={"Long-Term Support"}
              text={"You will receive regular updates and security patches for an extended period"}
            />
            <ServicesCard
              icon={faArrowUpRightDots}
              heading={"Branding Identity"}
              text={"I will make you a brand that is catchy and leaves a trace."}
            />
            <ServicesCard
              icon={faCalendarCheck}
              heading={"Fast Delivery"}
              text={"I deliver your business as fast as possible."}
            />
          </div>
        </div>

        <div className="skills">
          <div className="progressAll">
            <H2heading text={'Front-End Skills'} />
            <ul className='skillList'>
                <li>
                    <Progress title={'HTML, CSS, JavaScript'} w={"98%"}/> 
                </li>
                <li>
                  <Progress title={'React.JS, AJAX, JQuery'} w={"85%"}/> 
                </li>
                <li>
                  <Progress title={'Bootstrap, Responsive Design, SASS'} w={"90%"}/> 
                </li>
            </ul>
          </div>
          <div className="progressAll">
            <H2heading text={'Back-End Skills'} />
            <ul className='skillList'>
                <li>
                    <Progress title={'C# (.NET Framework, .NET Core)'} w={"80%"}/> 
                </li>
                <li>
                    <Progress title={'ASP.NET MVC, ASP.NET Core MVC'} w={"85%"}/> 
                </li>
                <li>
                    <Progress title={'OOP, SQL , MySql'} w={"95%"}/> 
                </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

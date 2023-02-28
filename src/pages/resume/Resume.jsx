import H2heading from "../../components/h2heading/H2heading";
import { connect } from "react-redux";
import History from "../../components/historyComp/History";
import "./style.css";
import './responsive.css'
import Client from "../../components/client/Client";
import Carousel from "../../components/carousel/Carousel";

const Resume = ({ workingHistory, educationHistory, clients, testimonals }) => {
  return (
    <main>
      <div className="resume">
        <div className="history">
          <H2heading text={"Resume"} />
          <div className="history-container">
            <History
              title={workingHistory.title}
              icon={workingHistory.icon}
              data={workingHistory.works}
            />
            <History
              title={educationHistory.title}
              icon={educationHistory.icon}
              data={educationHistory.works}
            />
          </div>
        </div>
        <div className="clients">
          <H2heading text={"Clients"} />
          <ul className="client-cards">
            {clients.map((client) => {
              return (
                <li key={client.id}>
                  <Client src={client.img} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="testimonials">
          <div className="testimonials-title">
            <H2heading text={"Testimonials"} />
          </div>
          <div className="testimonal-slider">
            <Carousel testimonals={testimonals}/>
          </div>
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = (state) => ({
  workingHistory: state.Data.workingHistory,
  educationHistory: state.Data.educationHistory,
  clients: state.Data.clients,
  testimonals: state.Data.testimonals,
});
export default connect(mapStateToProps)(Resume);

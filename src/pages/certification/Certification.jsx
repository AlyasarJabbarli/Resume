import "./style.css";
import H2heading from "../../components/h2heading/H2heading";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";
import { connect } from "react-redux";

const Certification = ({ certifications }) => {
  console.log(certifications);
  return (
    <main>
      <div className="portfolio">
        <H2heading text={"Certification"} />
        <ul className="portfolio_cards">
          {certifications.map((cert, index) => {
            return (
              <li key={index}>
                <PortfolioCard work={cert} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  certifications: state.Data.certifications,
});
  
export default connect(mapStateToProps)(Certification);


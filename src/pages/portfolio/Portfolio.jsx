import H2heading from "../../components/h2heading/H2heading";
import "./style.css";
import { connect } from "react-redux";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";
import React, {useState} from "react";


const Portfolio = ({ works }) => {
  const [filteredWorks, setFilteredWorks] = useState(works);

  const handleAll = async () => {
    await setFilteredWorks([])
    setFilteredWorks(works)

  }
  const handleOnClick = async (type) => {
    await setFilteredWorks([])
    setFilteredWorks(works.filter(work => work.type === type))
  }
  const uniqueNames = Array.from(new Set(works.map((item) => item.type)));
  
  return (
    <main>
      <div className="portfolio">
        <H2heading text={"Portfolio"} />
        <ul className="portfolio_navbar">
          <li onClick={handleAll}>All</li>
          {uniqueNames.map((type, index) => {
            return <li key={index} onClick={()=> handleOnClick(type)}>{type}</li>;
          })}
        </ul>
        <ul className="portfolio_cards"> 
            {
              filteredWorks.map((work, index) => {
                return <li key={index}>
                  <PortfolioCard work={work} />
                </li>
              })
            }
        </ul>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  works: state.Data.works,
});

export default connect(mapStateToProps)(Portfolio);

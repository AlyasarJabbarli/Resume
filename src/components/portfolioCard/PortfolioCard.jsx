import { Link } from "react-router-dom";
import "./style.css";

const PortfolioCard = ({ work }) => {
  return (
    <Link to={work.link}>
      <div className="porfolioCard">
        <div className="portfolioCard_top">
          <img src={work.photos[0]} alt="" loading="lazy" />
        </div>
        <div className="portfolio_bottom">
          <h4>{work.title}</h4>
          <p>{work.comment}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;

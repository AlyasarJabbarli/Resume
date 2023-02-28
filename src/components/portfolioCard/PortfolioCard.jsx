import './style.css'

const PortfolioCard = ({work}) => {
    return ( 
        <div className="porfolioCard">
            <div className="portfolioCard_top">
                <img src={work.photos[0]} alt="" />
            </div>
            <div className="portfolio_bottom">
                <span>{work.title}</span>
                <p>{work.comment}</p>
            </div>
        </div>
    );
}
 
export default PortfolioCard;
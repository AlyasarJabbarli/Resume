import './style.css'

const TestimonalCard = ({img, fullName, job, comment}) => {
    return ( 
        <div className="testimonalCard">
            <div className="testimonalCard_top">
                <div className="testimonalCard_top_left">
                    <img src={img} alt="" />
                </div>
                <div className="testimonalCard_top_right">
                    <h5>{fullName}</h5>
                    <p>{job}</p>
                </div>
            </div>
            <div className="testimonalCard_bottom">
                <p>{comment}</p>
            </div>
        </div>
    );
}
 
export default TestimonalCard;
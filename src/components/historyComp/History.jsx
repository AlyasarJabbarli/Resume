import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const History = ({ title, data, icon }) => {
  return (
    <div className="historyComp">
      <ul>
        <li>
          <FontAwesomeIcon className="icon" icon={icon}/> <h3>{title} History</h3> 
        </li>
        {data.map((data) => {
          return (
            <li key={data.id}>
              <h4>{data.position}</h4>
              <p>{data.date}</p>
              <p>{data.mainText}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default History;

import { } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const ServicesCard = ({icon, heading, text}) =>{
    return(
        <div className="servicesCard">
            <FontAwesomeIcon className='cardIcon' icon={icon}/>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
} 

export default ServicesCard
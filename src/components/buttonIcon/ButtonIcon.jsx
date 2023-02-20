import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const ButtonIcon = ({text, icon}) =>{
    return(
        <div className="download">
            <button>{text}</button>
            <FontAwesomeIcon className='dwn-icon' icon={icon}></FontAwesomeIcon>
        </div>
    )
 
}

export default ButtonIcon
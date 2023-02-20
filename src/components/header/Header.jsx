import prof from '../../img/profile.jpg'
import '../header/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../buttonIcon/ButtonIcon'
const Header = () => {
    return (
        <header>
            <div className="container-s">
                    <div className="title">
                        <h1>HENRY ROONEY</h1>
                        <p>Creative Designer</p>
                    </div>
                    <div className="profile_photo">
                        <img src={prof} alt="" />
                    </div>
                    <div className="info">
                        <ul>
                            <li></li>
                            <li><strong>Name:</strong> Chris Johnson</li>
                            <li><strong>Birthday:</strong> 06 December 1987</li>
                            <li><strong>Job:</strong> Freelancer</li>
                            <li><strong>Email:</strong> henry@domain.com</li>
                            <li><strong>Skype:</strong> henryrooney85</li>
                        </ul>
                    </div>
                    <ButtonIcon text={'Download Cv'} icon={faDownload}/>
            </div>
        </header>
    )
}

export default Header 
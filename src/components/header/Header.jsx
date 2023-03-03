import prof from '../../img/DSC03797.JPG'
import '../header/style.css'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../buttonIcon/ButtonIcon'
import './responsive.css'
const Header = () => {
    return (
        <header>
            <div className="container-s">
                    <div className="title">
                        <h1>Alyasar Jabbarli</h1>
                        <p>Software Engineer | Web Developer</p>
                    </div>
                    <div className="profile_photo">
                        <img src={prof} alt="" />
                    </div>
                    <div className="info">
                        <ul>
                            <li></li>
                            <li><strong>Name:</strong> Alyasar Jabbarli</li>
                            <li><strong>Birthday:</strong> 01 December 2002</li>
                            <li><strong>Job:</strong> Instructor</li>
                            <li><strong>Email:</strong> alyasar.jabbarli@gmail.com</li>
                            <li><strong>Phone:</strong> +99450-866-44-55</li>
                        </ul>
                    </div>
                    <ButtonIcon text={'Download Cv'} icon={faDownload}/>
            </div>
        </header>
    )
}

export default Header 
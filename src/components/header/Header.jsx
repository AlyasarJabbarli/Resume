import prof from '../../img/me.jpg'
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
                        <img src={prof} alt="Alyasar Jabbarli" loading='lazy'/>
                    </div>
                    <div className="info">
                        <ul>
                            <li></li>
                            <li><strong>Name:</strong> Alyasar Jabbarli</li>
                            <li><strong>Job:</strong> Front-End Engineer</li>
                            <li><strong>Email:</strong> alyasar.jabbarli@gmail.com</li>
                            <li><strong>Phone:</strong> +36 70-360-45-22</li>
                        </ul>
                    </div>
                    <ButtonIcon text={'Download Cv'} icon={faDownload}/>
            </div>
        </header>
    )
}

export default Header 
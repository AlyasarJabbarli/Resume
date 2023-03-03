import { Link } from 'react-router-dom'
import './style.css'
import "./responsive.css"

const Footer = () => {
    return (
        <footer>
            <h3>Alyasar Jabbarli.</h3>
            <div className="copyright">
                <p>© 2023 All rights reserved. Developed by <Link>Me</Link></p>
            </div>
        </footer>
    )
}

export default Footer
import { Link } from 'react-router-dom'
import './style.css'
import "./responsive.css"

const Footer = () => {
    return (
        <footer>
            <h3>Henry Rooney.</h3>
            <div className="copyright">
                <p>© 2017 All rights reserved. Designed by <Link>tavonline</Link></p>
            </div>
        </footer>
    )
}

export default Footer
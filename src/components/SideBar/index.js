import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoP from '../../assets/images/logo-p.png'
import LogoSubTitle from '../../assets/images/logo-sub.png'
import testLogo from '../../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookReader, faCode, faDiagramProject, faEnvelope, faHome, faL, faNewspaper, faParagraph, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faPage4, faPagelines, faRProject } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoP} alt='logo' />
            <img className='sub-logo' src={LogoSubTitle} alt='logosub' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faNewspaper} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/prathamesh-akole/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://leetcode.com/u/akole/'>
                    <FontAwesomeIcon icon={faCode} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;
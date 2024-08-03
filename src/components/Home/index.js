import './index.scss';
import LogoP from '../../assets/images/logo-p.png'
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar';
import Logo from './Logo';
import Loader from 'react-loaders';
import { FaConnectdevelop, FaEnvelope, FaHandshake, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../../components/Footer';
const Home = () => {
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>Hi, <br /> I'm<img src={LogoP} alt='developer' />rathamesh Akole,
                        <br />
                        Software Engineer.
                    </h1>
                    <h2>Full-Stack / Cloud / Data Science / Machine Learning</h2>
                    <Link to='/contact' className='flat-button'><FaHandshake size={20} /></Link>
                    <Link to='https://www.linkedin.com/in/prathamesh-akole/' target="_blank" className='flat-button'><FaLinkedin size={20} /></Link>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akoleprathamesh@gmail.com" target="_blank" rel="noopener noreferrer" className="flat-button">
                        <FaEnvelope size={20} />
                    </a>
                    <Link to='https://x.com/AkolePrathamesh' target="_blank" className='flat-button'> <FaTwitter size={20}/></Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
            <Footer />
        </>

    );
}

export default Home
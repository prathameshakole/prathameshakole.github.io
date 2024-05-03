import './index.scss';
import LogoP from '../../assets/images/logo-p.png'
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar';
import Logo from './Logo';
import Loader from 'react-loaders';
const Home = () => {
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>Hi, <br /> I'm<img src={LogoP} alt='developer' />rathamesh,
                        <br />
                        Software Engineer.
                    </h1>
                    <h2>Backend Engineer / Cloud Computing / Machine Learning</h2>
                    <Link to='/contact' className='flat-button'>Connect with me!</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman"/>
        </>

    );
}

export default Home
import './index.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Loader from 'react-loaders';
import fencingvideo from '../../assets/videos/fencingvideo2.mp4';

const Life = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Life component mounted');
        const authorized = localStorage.getItem('lifeAuthorized');
        console.log('Authorization status:', authorized);
        if (authorized) {
            setIsAuthorized(true);
        } else if (authorized !== 'accessed') {
            navigate('/');
        }
    }, [navigate]);

    
    useEffect(() => {
        return () => {
            sessionStorage.removeItem('lifeAuthorized');
        };
    }, []);

    if (!isAuthorized) {
        return null;
    }

    return (
        <>
            <div className="container-life">
                <div className="text-zone">
                    <h1 className='heading'>It's weird.</h1>
                    <p>
                        That is me playing fencing, and I might be around 12 years old. It's funny that it's the only shred of evidence of me ever having played that sport.
                    </p>
                </div>
                <div className="video-zone">
                    <video controls autoPlay muted>
                        <source src={fencingvideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <Loader type="pacman" />
            <Footer />
        </>
    );
};

export default Life;

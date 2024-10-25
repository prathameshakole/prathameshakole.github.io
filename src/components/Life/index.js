import './index.scss';
import React from 'react';
import Footer from '../Footer';
import Loader from 'react-loaders';
import fencingvideo from '../../assets/videos/fencingvideo2.mp4';

const Life = () => {
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

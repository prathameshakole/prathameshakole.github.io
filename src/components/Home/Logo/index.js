import './index.scss';
import LogoP from '../../../assets/images/logo-p.png';
import image1 from '../../../assets/images/bg1.jpg'
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef } from 'react';

const Logo = () => {
    const bgRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        anime({
            targets: bgRef.current,
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
        });

        anime({
            targets: solidLogoRef.current,
            opacity: [0, 1],
            delay: 1000,
            duration: 2000,
            easing: 'easeInOutQuad',
        });
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img className="solid-logo" ref={solidLogoRef} src={image1} alt="dev" />
            <svg
                width="600pt"
                height="950pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="10"
                >
                </g>
            </svg>
        </div>
    );
}

export default Logo;
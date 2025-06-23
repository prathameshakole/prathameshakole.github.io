import './index.scss';
import image1 from '../../../assets/images/latest_p.png'
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
                width="100%"
                height="100%"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                </g>
            </svg>
        </div>
    );
}

export default Logo;
import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed = 100, pause = 1500 }) => {
    const [displayed, setDisplayed] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        if (!isDeleting && index < text.length) {
            timeout = setTimeout(() => {
                setDisplayed(text.slice(0, index + 1));
                setIndex(index + 1);
            }, speed);
        } else if (!isDeleting && index === text.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pause);
        } else if (isDeleting && index > 0) {
            timeout = setTimeout(() => {
                setDisplayed(text.slice(0, index - 1));
                setIndex(index - 1);
            }, speed / 2);
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }
        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed, pause]);

    return (
        <span>{displayed}<span style={{ color: '#ffd700' }}>|</span></span>
    );
};

export default TypingEffect; 
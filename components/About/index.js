import './index.scss';
import React from 'react';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiJava,
    SiPython,
    SiPostman,
    SiPostgresql,
    SiAmazonaws,
    SiMysql,
    SiSpringboot,
    SiCplusplus,
    SiC,
    SiTypescript,
} from 'react-icons/si';
import Loader from 'react-loaders';

const About = () => {
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1 className='heading'>About Me</h1>
                    <p>
                        I am a Master's student in Computer Science at Northeastern
                        University. I have a Bachelor of Technology Degree in Information
                        Technology from Vishwakarma Institute of Information Technology, where
                        I graduated with Distinction.
                    </p>
                    <p>
                        I have experience as a Software Development Intern at IDeaS Revenue
                        Solutions, a leading provider of Revenue Management Solutions for the
                        hospitality industry. There, I worked with Java 8, Spring MVC, and
                        JUnit to develop and test web applications and APIs for hotel booking
                        and pricing. I also have experience as a Research Intern at VIIT,
                        where I worked on a Computer Vision project to detect violence from
                        CCTV footage using deep learning techniques.
                    </p>
                    <p>
                        I am passionate about applying my skills and knowledge to solve
                        real-world problems and create a positive social impact.
                    </p>
                </div>
                <div className="container-2 logo">
                    <SiHtml5 className="logo" />
                    <SiCss3 className="logo" />
                    <SiJavascript className="logo" />
                    <SiReact className="logo" />
                    <SiNextdotjs className="logo" />
                    <SiMongodb className="logo" />
                    <SiPython className="logo" />
                    <SiPostgresql className="logo" />
                    <SiAmazonaws className="logo" />
                    <SiMysql className='logo' />
                    <SiSpringboot className='logo' />
                    <SiCplusplus className='logo' />
                    <SiC className='logo' />
                    <SiTypescript className='logo' />
                </div>
            </div>
            <Loader type="pacman"/>
        </>

    );
};

export default About;
// import './index.scss';
// import React from 'react';
// import Footer from '../Footer'
// import {
//     SiHtml5,
//     SiCss3,
//     SiJavascript,
//     SiReact,
//     SiNextdotjs,
//     SiMongodb,
//     SiPython,
//     SiPostgresql,
//     SiAmazonaws,
//     SiMysql,
//     SiSpringboot,
//     SiCplusplus,
//     SiC,
//     SiTypescript,
// } from 'react-icons/si';
// import Loader from 'react-loaders';

// const About = () => {
//     return (
//         <>
//             <div className="container about-page">
//                 <div className="text-zone">
//                     <h1 className='heading'>About Me</h1>
//                     <p>
//                         Hi, I'm Prathamesh Akole, a Computer Science grad student at Northeastern University. 
//                         My journey started in India, where I completed my Bachelor's in Information Technology 
//                         before diving into professional software development as an SDE Intern at IDeaS Revenue Solutions, a leading provider of Revenue Management Solutions for the
//                         hospitality industry. There, I worked with Java 8, Spring MVC, and JUnit to develop and test web applications and APIs for hotel booking   
//                         and pricing.
//                     </p>
//                     <p>
//                         I'm passionate about software development and have worked on projects ranging from a Learning Management System to an AI-enabled rental platform. 
//                         My work has led to two publications in computer vision and deep learning, reflecting my interest in cutting-edge technology.
//                         I specialize in Java, Spring Boot, JavaScript and cloud technologies, always focusing on building solutions that solve real problems. 
//                         Currently, I'm exploring new technologies while pursuing my Master's, aiming to create software that makes a meaningful impact.
//                     </p>
//                     <p>
//                         Beyond coding, I've had quite a diverse journey. I competed nationally in Fencing at the under-14 level, 
//                         and my artwork was featured in international exhibitions in Melbourne and Japan when I was only 12 years old. 
//                         In my downtime, you'll find me immersed in fiction, crafting poems, or exploring world cinema. 
//                         I believe these varied interests bring a unique perspective to my problem-solving approach in tech.
//                     </p>
//                 </div>
//                 <div className="container-2 logo">
//                     <SiHtml5 className="logo" />
//                     <SiCss3 className="logo" />
//                     <SiJavascript className="logo" />
//                     <SiReact className="logo" />
//                     <SiNextdotjs className="logo" />
//                     <SiMongodb className="logo" />
//                     <SiPython className="logo" />
//                     <SiPostgresql className="logo" />
//                     <SiAmazonaws className="logo" />
//                     <SiMysql className='logo' />
//                     <SiSpringboot className='logo' />
//                     <SiCplusplus className='logo' />
//                     <SiC className='logo' />
//                     <SiTypescript className='logo' />
//                 </div>
//             </div>
//             <Loader type="pacman" />
//             <Footer/>
//         </>

//     );
// };

// export default About;

import './index.scss';
import React from 'react';
import Footer from '../Footer';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiPython,
    SiPostgresql,
    SiAmazonaws,
    SiMysql,
    SiSpringboot,
    SiCplusplus,
    SiC,
    SiTypescript,
    SiGooglecloud,
    SiTerraform,
} from 'react-icons/si';
import Loader from 'react-loaders';

const About = () => {
    return (
        <div className="page-wrapper">
            <div className="container about-page flex flex-col lg:flex-row">
                <div className="text-zone lg:w-1/2">
                    <h1 className='heading'>About Me</h1>
                    <p>
                        Hi, I'm Prathamesh Akole, a Computer Science grad student at Northeastern University. 
                        My journey started in India, where I completed my Bachelor's in Information Technology 
                        before diving into professional software development as an SDE Intern at IDeaS Revenue Solutions, a leading provider of Revenue Management Solutions for the
                        hospitality industry. There, I worked with Java 8, Spring MVC, and JUnit to develop and test web applications and APIs for hotel booking   
                        and pricing.
                    </p>
                    <p>
                        I'm passionate about software development and have worked on projects ranging from a Learning Management System to an AI-enabled rental platform. 
                        My work has led to two publications in computer vision and deep learning, reflecting my interest in cutting-edge technology.
                        I specialize in Java, Spring Boot, JavaScript and cloud technologies, always focusing on building solutions that solve real problems. 
                        Currently, I'm exploring new technologies while pursuing my Master's, aiming to create software that makes a meaningful impact.
                    </p>
                    <p>
                        Beyond coding, I've had quite a diverse journey. I competed nationally in Fencing at the under-14 level, 
                        and my artwork was featured in international exhibitions in Melbourne and Japan when I was only 12 years old. 
                        In my downtime, you'll find me immersed in fiction, crafting poems, or exploring world cinema. 
                        I believe these varied interests bring a unique perspective to my problem-solving approach in tech.
                    </p>
                </div>
                <div className="container-2 logo lg:w-1/2">
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
                    <SiGooglecloud className='logo' />
                    <SiTerraform className='logo' />
                </div>
            </div>
            <Loader type="pacman" />
            <Footer/>
        </div>
    );
};

export default About;
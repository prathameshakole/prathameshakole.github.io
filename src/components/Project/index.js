import './index.scss';
import imageUrl from '../../assets/images/logo-p.png';
import Loader from 'react-loaders';
import ProjectCard from './ProjectCard';

const Project = () => {
    const projects = [
        {
            title: 'Kanbas Learning Management Software',
            description: 'Kanbas is a comprehensive Learning Management System (LMS) inspired by Canvas, developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers robust authentication, secure data protection, and custom collaboration features, facilitating interactive online classrooms. The platform provides seamless online education experiences with intuitive course management, assignments, and assessments.' +
                'To optimize performance, Kanbas employs caching and server-side rendering, resulting in a 40% reduction in initial load times. The frontend is deployed on Netlify, while the backend is hosted on Onrender, ensuring reliable and scalable operations.',
            imageUrl: imageUrl,
            link: 'https://assignment6--earnest-licorice-115933.netlify.app/#/Kanbas/Dashboard',
        },
        {
            title: 'PinPoint - A GeoGuesser Social Media',
            description: 'Developed using the MERN stack, Pinpoint is a web application that combines visual puzzles with location-based challenges. Users can upload geo-tagged photos, creating quizzes for others to guess the depicted location. With registered users, guests, and advertisers, Pinpoint offers tailored features like photo uploads, quizzes, guessing games, CRUD operations, user following, and selective content access. The advertising component allows approved ads from businesses, generating revenue. Pinpoint ensures data security through robust authentication and authorization systems, with efficient content moderation. Offering an engaging experience combining geography, visuals, and community interaction, Pinpoint leverages cutting-edge technologies and intuitive interfaces. The application is deployed on Netlify (frontend) and Onrender (backend) for reliable and scalable operations.',
            imageUrl: imageUrl,
            link: 'https://main--lovely-cucurucho-ff887f.netlify.app/#/home/trending',
        },
        {
            title: 'Image Processing Software',
            description: 'Developed a comprehensive Image Processing Application using Java, featuring a user-friendly Java Swing-based graphical user interface (GUI). The software adhered strictly to industry-standard programming practices and conventions. It boasts a robust set of image processing capabilities, including various filters such as blur, sharpen, sepia tone, horizontal and vertical flip, grayscale conversion, and a convenient preview option for efficient editing. Additionally, the software incorporates an image compression feature developed from scratch, optimizing file sizes while maintaining image quality. Great emphasis was placed on code optimization, resource utilization, performance, extensive testing, and comprehensive documentation to ensure a polished and reliable final product. With its powerful image processing capabilities and user-friendly interface, this software empowers users to efficiently enhance, manipulate, and manage their digital image collections.',
            imageUrl: imageUrl,

        },
        {
            title: 'Image Processing Software',
            description: 'lorem ipsum asbasoidbasdhfb alsdasdfasdfasdfasdac afasv asfa vavas fa sdfasdf asdfa sdfdsa gbdfgbsth s sh htafgafgasdfasd ysgdfyas fgasyfgfas faysdgf asdfiu asdifugasdiu fasdhufha sfiuasgfa sjdfba uihrvasjfnva aiusfha dsvnasdjv hasui agusahfusdh ufha sdufh asudfiha fasahf ausdhf au',
            imageUrl: imageUrl,
            link: '#',
        },
    ];

    return (
        <>
            <div className="container project-section">
                <div className='text-zone'>
                    <h1 className="heading"> Projects</h1>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Project;
import boston from '../../../assets/images/boston.png';
import celtics from '../../../assets/images/celtics3.png';
import pinpoint from '../../../assets/images/ss1-pinpoint.png';
import LogoP from '../../../assets/images/logo-p.png';

export const milestones = [
    {
        year: "Early Life",
        title: "A Glimpse into My Early Years",
        description: "Beyond coding, I've had a diverse journey. I competed nationally in Fencing and my artwork was featured in international exhibitions. These experiences bring a unique perspective to my problem-solving approach in tech."
    },
    {
        year: "2019-2023",
        title: "Bachelor's in Information Technology",
        description: "My journey started in India, where I completed my Bachelor's in Information Technology, building a strong foundation for my technical skills."
    },
    {
        year: "2023",
        title: "SDE Intern at IDeaS Revenue Solutions",
        description: "I dived into professional software development as an SDE Intern at IDeaS, working with Java 8, Spring MVC, and JUnit to develop and test web applications for the hospitality industry."
    },
    {
        year: "2022-23",
        title: "Publications and Projects",
        description: "Passionate about software development, my work on various projects has led to two publications in computer vision and deep learning, reflecting my interest in cutting-edge technology."
    },
    {
        year: "2023-2025",
        title: "Master's at Northeastern University",
        description: "I recently graduated with a Master of Science in Computer Science degree at Northeastern University, I'm exploring new technologies to create impactful software, specializing in Backend, Full-Stack, and DevOps. I also have a strong interest in Machine Learning and AI."
    }
];

export const projects = [
    {
        title: 'Boston Property Info',
        description:
            'A comprehensive platform that consolidates and presents detailed property information for Boston, empowering users with data-driven insights for smarter real estate decisions.',
        imageUrl: boston,
        link: 'https://github.com/prathameshakole/boston-property-info-frontend',
        skills: ['react', 'nodejs', 'mongodb', 'mui']
    },
    {
        title: 'Celtics Game Tracker',
        description:
            'A chrome extension that tracks the scores, games and ranking of the Boston Celtics, providing real-time updates and a user-friendly interface for game enthusiasts.',
        imageUrl: celtics,
        link: 'https://github.com/prathameshakole/celtics',
        skills: ['javascript', 'chrome-extension', 'react']
    },
    {
        title: 'PinPoint - A GeoGuesser Social Media',
        description:
            'Developed using the MERN stack, Pinpoint combines visual puzzles with location-based challenges. Users can upload geo-tagged photos and create quizzes for others.',
        imageUrl: pinpoint,
        link: 'https://pinpoint.prathameshakole.com',
        skills: ['react', 'nodejs', 'express', 'mongodb', 'mui']
    },
    {
        title: 'Kanbas Learning Management Software',
        description:
            'A comprehensive LMS inspired by Canvas. It offers robust authentication, secure data protection, and interactive features for an engaging online classroom experience.',
        imageUrl: LogoP,
        link: 'https://kanbas.prathameshakole.com',
        skills: ['react', 'nodejs', 'express', 'mongodb', 'mui']
    },
    {
        title: 'Image Processing Software',
        description:
            'A Java-based image processing application with a user-friendly Swing interface. It offers various filters, image compression, and a preview option for efficient editing.',
        imageUrl: LogoP,
        skills: ['java', 'swing']
    },
    {
        title: 'Real-Time Mask Detection System',
        description:
            'An automated face mask detection system using deep learning to monitor public safety compliance in real time, reducing manual monitoring requirements.',
        imageUrl: LogoP,
        link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003342755-6/real-time-cnn-based-face-mask-detection-system-suvarna-pawar-mrudul-jain-prathamesh-akole-suyog-mahagaonkar-rupesh-kapse',
        skills: ['python', 'tensorflow', 'opencv', 'deep-learning']
    },
    {
        title: 'Real Time CCTV Violence Detection System',
        description:
            'An automated violence detection system leveraging CNNs and LSTMs for real-time analysis of video feeds, enhancing public safety and rapid incident response.',
        imageUrl: LogoP,
        link: 'https://ieeexplore.ieee.org/document/10099886',
        skills: ['python', 'tensorflow', 'opencv', 'deep-learning']
    },
]; 
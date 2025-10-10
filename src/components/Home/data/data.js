import boston from '../../../assets/images/boston.png';
import celtics from '../../../assets/images/celtics3.png';
import pinpoint from '../../../assets/images/ss1-pinpoint.png';
import LogoP from '../../../assets/images/logo-p.png';
import NortheasternLogo from '../../../assets/images/Northeastern_Logo.png';
import VITLogo from '../../../assets/images/VI_Logo.png';
import METYLogo from '../../../assets/images/mety_logo.jpg';
import PowerMechLogo from '../../../assets/images/powermech_logo.png';
import IntegratedDecisionSystemsLogo from '../../../assets/images/ideas_lo.jpg';
import PreBuildTechnologiesLogo from '../../../assets/images/prebuild_logo.avif';
import slap from '../../../assets/images/slap.png';

export const milestones = [
    {
        year: "2019-2023",
        title: "Bachelor of Technology in Information Technology",
        description: "My journey started in India, where I completed my Bachelor's in Information Technology, building a strong foundation for my technical skills.",
        category: 'Education',
        institution: "Vishwakarma Institute of Information Technology",
        logo: VITLogo,
        startDate: "2019-08-01"
    },
    {
        year: "2022",
        description: "I dived into professional software development as an SDE Intern at IDeaS, working with Java 8, Spring MVC, and JUnit to develop and test web applications for the hospitality industry.",
        category: 'Experience',
        company: "PowerMech Engineering",
        role: "Software Development Engineer Intern",
        dateRange: "August 2022 - December 2022",
        logo: PowerMechLogo,
        startDate: "2022-08-01"
    },
    {
        year: "2023",
        description: "I dived into professional software development as an SDE Intern at IDeaS, working with Java 8, Spring MVC, and JUnit to develop and test web applications for the hospitality industry.",
        category: 'Experience',
        company: "Integrated Decision and Systems, Inc.",
        role: "Software Development Engineer Intern",
        dateRange: "January 2023 - June 2023",
        logo: IntegratedDecisionSystemsLogo,
        startDate: "2023-01-01"
    },
    {
        year: "2024",
        description: "I dived into professional software development as an SDE Intern at IDeaS, working with Java 8, Spring MVC, and JUnit to develop and test web applications for the hospitality industry.",
        category: 'Experience',
        company: "PreBuild Technologies",
        role: "Software Development Engineer Intern",
        dateRange: "May 2024 - August 2024",
        logo: PreBuildTechnologiesLogo,
        startDate: "2024-05-01"
    },
    {
        year: "2025",
        description: "I dived into professional software development as an SDE Intern at IDeaS, working with Java 8, Spring MVC, and JUnit to develop and test web applications for the hospitality industry.",
        category: 'Experience',
        company: "METY Technology",
        role: "Software Engineer",
        dateRange: "June 2025 - Present",
        logo: METYLogo,
        startDate: "2025-06-01"
    },
    {
        year: "2025",
        description: "I dived into professional software development as an SDE Intern at IDeaS, working with Java 8, Spring MVC, and JUnit to develop and test web applications for the hospitality industry.",
        category: 'Experience',
        company: "Northeastern University",
        role: "Graduate Teaching Assistant",
        dateRange: "August 2024 - December 2024",
        logo: NortheasternLogo,
        startDate: "2024-08-01"
    },
    {
        year: "2023-2025",
        title: "Master of Science in Computer Science",
        description: "I recently graduated with a Master of Science in Computer Science degree at Northeastern University, I'm exploring new technologies to create impactful software, specializing in Backend, Full-Stack, and DevOps. I also have a strong interest in Machine Learning and AI.",
        category: 'Education',
        institution: "Northeastern University",
        logo: NortheasternLogo,
        startDate: "2023-09-01"
    }
];
    

export const projects = [
    {
        title: 'Student Life Assistance Project (S.L.A.P)',
        description:
            'The Student Life Assistance Project is a dual-access open source application (web + desktop) developed to help students navigate their academic and financial lives.',
        imageUrl: slap,
        link: 'https://www.slaproject.app',
        skills: ['react', 'java', 'mongodb', 'mui', 'spring-boot', 'prometheus']
    },
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

export const publications = [
    {
        title: "Real-Time CNN-Based Face Mask Detection System",
        authors: "Dr. Suvarna Pawar, Mrudul Jain, Prathamesh Akole, Suyog Mahagaonkar, Rupesh Kapse",
        journal: "Taylor & Francis",
        year: "2023",
        description: "An automated face mask detection system using deep learning to monitor public safety compliance in real time, reducing manual monitoring requirements.",
        link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003342755-6/real-time-cnn-based-face-mask-detection-system-suvarna-pawar-mrudul-jain-prathamesh-akole-suyog-mahagaonkar-rupesh-kapse",
        type: "Book Chapter"
    },
    {
        title: "Real Time CCTV Violence Detection System",
        authors: "Prathamesh Akole, Ishan Sarode, Tanvi Raut, Dnyanesh Mahadik, Dr. Pravin Futane",
        journal: "IEEE Xplore",
        year: "2023",
        description: "An automated violence detection system leveraging CNNs and LSTMs for real-time analysis of video feeds, enhancing public safety and rapid incident response.",
        link: "https://ieeexplore.ieee.org/document/10099886",
        type: "Conference Paper"
    }
]; 
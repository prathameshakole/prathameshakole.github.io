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
import roulette from '../../../assets/images/roulogo.png'

export const milestones = [
    {
        year: "2019-2023",
        title: "Bachelor of Technology in Information Technology",
        description: "Built a strong technical base in core programming, full-stack development and AI/ML, informed by practical, hands-on project experience.",
        category: 'Education',
        institution: "Vishwakarma Institute of Information Technology",
        logo: VITLogo,
        startDate: "2019-08-01"
    },
    {
        year: "2022",
        description: "Developed a real-time violence detection system from CCTV footage using deep learning techniques. Worked on data annotation, preprocessing, and model training under the guidance of Head of Department Prof. Dr. Pravin Futane. Published research paper at the 5th IEEE International Conference on Emerging Smart Computing & Informatics (IEEE ESCI-2023).",
        category: 'Experience',
        company: "Vishwakarma Institute of Information Technology",
        role: "Research Intern",
        dateRange: "June 2022 - August 2022",
        logo: VITLogo,
        startDate: "2022-06-01"
    },
    {
        year: "2022",
        description: "Developed a real-time CNN-based face mask detection system using deep learning and computer vision. Worked on data preprocessing, annotation, and model optimization with Convolutional Neural Networks. Published research work as a book chapter in Taylor & Francis.",
        category: 'Experience',
        company: "Vishwakarma Institute of Information Technology",
        role: "Research Intern",
        dateRange: "December 2021 - May 2022",
        logo: VITLogo,
        startDate: "2021-12-01"
    },
    {
        year: "2022",
        description: "Executed end-to-end development of a rental platform with the MERN stack, applying strong UI/UX principles and modernizing CI/CD pipelines with Jenkins and Docker for faster deployment.",
        category: 'Experience',
        company: "PowerMech Engineering",
        role: "Software Development Engineer Intern",
        dateRange: "August 2022 - December 2022",
        logo: PowerMechLogo,
        startDate: "2022-08-01"
    },
    {
        year: "2023",
        description: "Contributed to the core product by developing with Java/Spring for dynamic pricing models, mastering Test-Driven Development (TDD) and enhancing database performance through indexing.",
        category: 'Experience',
        company: "Integrated Decision and Systems, Inc.",
        role: "Software Development Engineer Intern",
        dateRange: "January 2023 - June 2023",
        logo: IntegratedDecisionSystemsLogo,
        startDate: "2023-01-01"
    },
    {
        year: "2024",
        description: "Developed and optimized Java microservices for high availability, focusing on advanced backend scaling and the implementation of a robust, comprehensive error handling and logging framework.",
        category: 'Experience',
        company: "PreBuild Technologies",
        role: "Software Development Engineer Intern",
        dateRange: "May 2024 - August 2024",
        logo: PreBuildTechnologiesLogo,
        startDate: "2024-05-01"
    },
    {
        year: "2025",
        description: "Full-stack ownership of core B2B features using Python & React, enhancing development workflow through AI tools and custom platform launches.",
        category: 'Experience',
        company: "METY Technology",
        role: "Software Engineer",
        dateRange: "June 2025 - Present",
        logo: METYLogo,
        startDate: "2025-06-01"
    },
    {
        year: "2025",
        description: "Mentored students in CS1800 Discrete Mathematics, providing academic guidance and leading a special study group of seven to deepen understanding of core mathematical and logical foundations.",
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
        description: "Master's study emphasizing scalable microservices design and the optimization of high-performance, cloud-native systems.",
        category: 'Education',
        institution: "Northeastern University",
        logo: NortheasternLogo,
        startDate: "2023-09-01"
    }
];


export const projects = [
    {
        title: 'Leetcode Roulette',
        description:
            'A web application that allows users to play a game of roulette with leetcode questions. Choose questions in your desired difficulty, rating and topic. Spin and Learn!',
        imageUrl: roulette,
        link: 'https://leetroulette.slaproject.app',
        skills: ['react', 'vite', 'mui']
    },
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
        link: 'https://bostonproperty.prathameshakole.com',
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
        description: "An automated violence detection system leveraging MobileNetV2 and LSTMs for real-time analysis of video feeds, enhancing public safety and rapid incident response.",
        link: "https://ieeexplore.ieee.org/document/10099886",
        type: "Conference Paper"
    }
]; 
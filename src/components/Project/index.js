import './index.scss';
import imageUrl from '../../assets/images/logo-p.png';
import Loader from 'react-loaders';
import ProjectCard from './ProjectCard';

const Project = () => {
    const projects = [
        {
            title: 'PinPoint - A GeoGuesser Social Media',
            description: 'Developed using the MERN stack, Pinpoint is a web application that combines visual puzzles with location-based challenges. Users can upload geo-tagged photos, creating quizzes for others to guess the depicted location. With registered users, guests, and advertisers, Pinpoint offers tailored features like photo uploads, quizzes, guessing games, CRUD operations, user following, and selective content access. The advertising component allows approved ads from businesses, generating revenue. Pinpoint ensures data security through robust authentication and authorization systems, with efficient content moderation. Offering an engaging experience combining geography, visuals, and community interaction, Pinpoint leverages cutting-edge technologies and intuitive interfaces. The application is deployed on Netlify (frontend) and Onrender (backend) for reliable and scalable operations.',
            imageUrl: imageUrl,
            link: 'https://pinpoint.prathameshakole.com',
        },
        {
            title: 'Kanbas Learning Management Software',
            description: 'Kanbas is a comprehensive Learning Management System (LMS) inspired by Canvas, developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers robust authentication, secure data protection, and custom collaboration features, facilitating interactive online classrooms. The platform provides seamless online education experiences with intuitive course management, assignments, and assessments.' +
                'To optimize performance, Kanbas employs caching and server-side rendering, resulting in a 40% reduction in initial load times. The frontend is deployed on Netlify, while the backend is hosted on Onrender, ensuring reliable and scalable operations.',
            imageUrl: imageUrl,
            link: 'https://kanbas.prathameshakole.com',
        },
        {
            title: 'Image Processing Software',
            description: 'Developed a comprehensive Image Processing Application using Java, featuring a user-friendly Java Swing-based graphical user interface (GUI). The software adhered strictly to industry-standard programming practices and conventions. It boasts a robust set of image processing capabilities, including various filters such as blur, sharpen, sepia tone, horizontal and vertical flip, grayscale conversion, and a convenient preview option for efficient editing. Additionally, the software incorporates an image compression feature developed from scratch, optimizing file sizes while maintaining image quality. Great emphasis was placed on code optimization, resource utilization, performance, extensive testing, and comprehensive documentation to ensure a polished and reliable final product. With its powerful image processing capabilities and user-friendly interface, this software empowers users to efficiently enhance, manipulate, and manage their digital image collections.',
            imageUrl: imageUrl,

        },
        {
            title: 'Real-Time Mask Detection System',
            description: 'Developed an automated face mask detection system using deep learning technologies to monitor public safety compliance during the COVID-19 pandemic. The system leverages computer vision and neural networks to perform real-time mask detection through video feeds, achieving a 70% reduction in manual monitoring needs. Built using a comprehensive tech stack including TensorFlow for neural network implementation, Keras and NumPy for data preprocessing, Matplotlib for performance visualization, OpenCV for real-time object detection, and MobileNet architecture for efficient processing. The system demonstrates robust performance across diverse datasets and can be deployed in public spaces to automatically identify individuals not wearing masks, supporting enforcement of safety protocols without human intervention. Key features include real-time video processing, high accuracy detection rates, automated violation reporting, and scalable deployment options for various public settings. The project addressed a critical public health need during the pandemic, when only 44% of the population was reportedly wearing masks despite their proven 70% effectiveness in reducing infection spread. Special attention was given to optimization for real-time processing, accuracy across different lighting conditions and mask types, and seamless integration with existing security infrastructure.',
            imageUrl: imageUrl,
            link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003342755-6/real-time-cnn-based-face-mask-detection-system-suvarna-pawar-mrudul-jain-prathamesh-akole-suyog-mahagaonkar-rupesh-kapse',
        },
        {
            title: 'Real Time CCTV Violence Detection System Using Deep Learning',
            description: 'Developed an automated violence detection system using advanced deep learning techniques to enhance public safety through smart surveillance. The system combines CNN-based MobileNetV2 architecture for efficient feature extraction with LSTM (Long Short-Term Memory) networks for temporal analysis of video sequences. Engineered a custom dataset by curating and preprocessing violence-related footage from various social media platforms including YouTube, Shareavideo, and Mediadrop, ensuring diverse scenarios for robust model training. The solution leverages MobileNetV2s optimized architecture to achieve superior accuracy while maintaining low latency in real- time monitoring applications.Key features include real - time video analysis, automated alert generation for law enforcement, and scalable deployment capabilities across multiple surveillance cameras.The system demonstrates high accuracy across different environmental conditions and scenarios, validated using multiple datasets for comprehensive performance evaluation.Special emphasis was placed on minimizing false positives while ensuring rapid detection and notification to enable quick intervention by local authorities.This project addresses the critical need for automated violence monitoring in urban environments where manual surveillance of all locations is impractical, contributing to enhanced public safety and reduced response times to potential threats.',
            imageUrl: imageUrl,
            link: 'https://ieeexplore.ieee.org/document/10099886'
        }
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
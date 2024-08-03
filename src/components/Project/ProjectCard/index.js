import './index.scss';

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={imageUrl} alt="Project" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
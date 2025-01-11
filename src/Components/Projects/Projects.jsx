import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Import the CSS file for styling
import coco1 from '../../assets/coco1.jpg'; // Adjust path based on your folder structure
import ocr1 from '../../assets/ocr1.jpg';    
import rmc1 from '../../assets/rmc1.jpg';
import bag1 from '../../assets/bag1.jpg';
import teamPhoto from '../../assets/team-photo3bw.jpg'; // Single team photo

// Underline constant
const Underline = () => (
  <div style={{
    width: '100px',
    height: '4px',
    backgroundColor: '#ffd700',
    margin: '0 auto 3rem',
  }}></div>
);

const projects = [
    {
        id: 1,
        image: coco1, // imported image
        description: 'Coconut Counting project',
    },
    {
        id: 2,
        image: ocr1,
        description: 'OCR project',
    },
    {
        id: 3,
        image: rmc1,
        description: 'Cube Counting project',
    },
    {
        id: 4,
        image: bag1,
        description: 'Big Bag project',
    },
];

const Projects = () => {
    return (
        <>
            {/* Projects Section */}
            <section id="projects1" className="projects-section">
                <h2 className="projects-title">Some of our Projects</h2>
                <Underline /> {/* Underline applied to "Some of Our Projects" title */}
                <div className="projects-container">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <Link to={`/projects/${project.id}`}>
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Meet the Team Section */}
            <section id="meet-the-team" className="meet-the-team-section">
                <h2 className="meet-team-title">Meet the Team</h2>
                <Underline /> {/* Underline applied to "Meet the Team" title */}
                <div className="team-image-container">
                    <img src={teamPhoto} alt="Our Team" className="team-image" /> {/* Single image */}
                </div>
            </section>
        </>
    );
};

export default Projects;


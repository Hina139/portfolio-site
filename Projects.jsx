import React from 'react';
import '../styles/Projects.css';
// --- External Link Icon Import ---
import { FiExternalLink } from 'react-icons/fi'; 

import RestaurantImg from './1st.png'; 
import PortfolioImg from './2nd.png';
import weather from './3rd.png';
import app from './4th.png';
import blog from './5th.png';
import event from './6th.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Restaurant site",
            images: [{ src: RestaurantImg }],
            description: "A fully responsive restaurant platform featuring an interactive digital menu, real-time table reservation system, and seamless integration for online food ordering.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            liveLink: "https://hina139.github.io/Resaturant-Site-Clone/",
        },
        {
            id: 2,
            title: "About Me Portfolio",
            images: [{ src: PortfolioImg }],
            description: "A professional dark-themed portfolio website with smooth scrolling, project gallery, and custom animations, built for Anas.",
            technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
            liveLink: "https://hina139.github.io/anas-portfolio/",
        },
        {
            id: 3,
            title: "Real Time Weather App",
            images: [{ src: weather }],
            description: "Real-time weather tracking app that delivers accurate local and global weather updates. Features dynamic background changes and instant search.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            liveLink: " https://hina139.github.io/live-weather-app/",
        },
        {
            id: 4,
            title: "Car Rental Expo App",
            images: [{ src: app }],
            description: "A premium mobile application for car rentals featuring a dynamic vehicle showcase, advanced filtering, and a streamlined booking process.",
            technologies: ["React Native", "Expo", "Tailwind CSS", "JavaScript"],
            liveLink: "https://hackathone-expo-app.web.app/",
        },
        {
            id: 5,
            title: "Blog Platform",
            images: [{ src: blog }],
            description: "A full-stack blogging platform with Firebase Authentication and Firestore for real-time data storage and CRUD operations.",
            technologies: ["React", "Tailwind", "Firebase", "Firestore"],
            liveLink: "https://blogplatform-7c82e.web.app/login",
        },
        {
            id: 6,
            title: "Event Management",
            images: [{ src: event }],
            description: "A MERN stack event planning solution featuring CRUD operations, attendee tracking, and a secure REST API.",
            technologies: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
            liveLink: "https://hackathon-test-6597d.web.app/login",
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">Showcasing my latest web development work and technologies used</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-images-container">
                                <div className={`images-wrapper ${project.images.length === 1 ? 'single-image' : 'multiple-images'}`}>
                                    {project.images.map((img, index) => (
                                        <div key={index} className="image-container">
                                            <img 
                                                src={img.src} 
                                                alt={project.title}
                                                className="project-image"
                                                onError={(e) => {
                                                    e.target.src = `https://via.placeholder.com/400x250?text=${project.title}`;
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                {/* --- Icon Wrapper --- */}
                                <div className="project-actions">
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="icon-link-only"
                                        title="View Live"
                                    >
                                        <FiExternalLink size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
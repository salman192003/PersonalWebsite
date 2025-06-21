import React, { useState } from 'react';
import { motion, useDragControls } from 'framer-motion';

const projects = [
    {
        title: "Vision Transformer Compression",
        description: "Developed a compact ViT training framework leveraging saliency maps for guided distillation and curriculum learning for improved generalization. The project, conducted under the supervision of Dr. Murtaza Taj, involved extensive literature review of existing ViT architectures and key advancements in computer vision.",
        technologies: ["Deep Learning", "Vision Transformers", "PyTorch", "Computer Vision"],
        github: "https://github.com/yourusername/vit-compression",
        demo: ""
    },
    {
        title: "EmCon – Hospital Lookup & Blood Request Platform",
        description: "Built a multi-user web platform connecting multiple hospitals, with distinct interfaces for patients, medical staff, and administrators. Features real-time blood requests, ML based wait-time predictions, and an interactive navigation chatbot. Developed using React, Node.js, Express, and MongoDB with extensive UI/UX iterations for optimal user experience.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Machine Learning", "Chatbot"],
        github: "https://github.com/yourusername/emcon",
        demo: ""
    },
    {
        title: "Consumer Behavior Analytics",
        description: "Analyzed large-scale consumer datasets to forecast sales revenue and uncover purchasing trends using machine learning models. Applied clustering algorithms to segment customers based on behavioral patterns, enabling data-driven insights for targeted marketing and revenue optimization.",
        technologies: ["Python", "Machine Learning", "Data Science"],
        github: "https://github.com/yourusername/consumer-behavior-analytics",
        demo: ""
    },
    {
        title: "News Recommendation System",
        description: "Built an end-to-end pipeline to scrape news articles from the web and classify them into relevant categories using NLP techniques. Used multiple models to optimize classification accuracy for real-world news filtering and content recommendation systems.",
        technologies: ["Python", "NLP", "Machine Learning"],
        github: "https://github.com/yourusername/news-recommender",
        demo: ""
    },
    {
        title: "Filesystems, Threads & Memory (Operating Systems)",
        description: "Completed a series of project-based implementations focused on core operating system components, including a simplified UNIX file system, a POSIX-compliant threading library, and a dynamic memory allocator. Emphasized hands-on development to optimize resource management, concurrency, and system performance.",
        technologies: ["C/C++", "Operating Systems", "UNIX", "POSIX"],
        github: "https://github.com/yourusername/os-projects",
        demo: ""
    },
    {
        title: "Network-Centric Computing & Network Security",
        description: "Developed a scalable Distributed Hash Table (DHT) for decentralized systems with robust protocols for fault tolerance and data optimization; implemented secure OAuth 2.0 authentication and standards-compliant login systems to enhance web application security and prevent common vulnerabilities.",
        technologies: ["Distributed Systems", "Network Security", "OAuth 2.0"],
        github: "https://github.com/yourusername/network-security",
        demo: ""
    },
    {
        title: "Data Structures & Algorithms",
        description: "Completed challenging projects across two intensive courses, applying and optimising advanced data structures for real-world problems. Demonstrated strong algorithmic thinking and theoretical depth through custom implementations and complex problem-solving.",
        technologies: ["C/C++", "Java", "Algorithms", "Data Structures"],
        github: "https://github.com/yourusername/dsa-projects",
        demo: ""
    }
];

interface ProjectWindowProps {
    project: typeof projects[0];
    index: number;
    isVisible: boolean;
    onClose: (index: number) => void;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ project, index, isVisible, onClose }) => {
    const dragControls = useDragControls();

    if (!isVisible) {
        return null;
    }

    return (
        <motion.div
            key={project.title}
            className="w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            drag
            dragControls={dragControls}
            dragMomentum={false}
            dragElastic={0.1}
            whileDrag={{ scale: 1.02, cursor: 'grabbing' }}
            style={{ position: 'relative', zIndex: 2 }}
        >
            <div className="mac-window mac-window-open">
                <div
                    className="mac-window-header"
                    onPointerDown={(e) => dragControls.start(e)}
                >
                    <div className="mac-window-buttons">
                        <button
                            className="mac-window-button close"
                            aria-label="Close window"
                            onClick={() => onClose(index)}
                        />
                        <button className="mac-window-button minimize" aria-label="Minimize window" />
                        <button className="mac-window-button maximize" aria-label="Maximize window" />
                    </div>
                    <div className="mac-window-title">{project.title}</div>
                </div>
                <div className="mac-window-content p-4">
                    <div className="text-lg font-bold mb-4 flex items-center">
                        <div className="mac-icon mr-2">🚀</div>{project.title}
                    </div>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="text-sm px-3 py-1 bg-white/10 rounded-md text-white/80"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        {project.github && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                                onClick={() => window.open(project.github, '_blank')}
                            >
                                GitHub
                            </motion.button>
                        )}
                        {project.demo && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                                onClick={() => window.open(project.demo, '_blank')}
                            >
                                Live Demo
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    // State for visibility of each project window
    const [projectVisibility, setProjectVisibility] = useState(projects.map(() => true));

    const handleClose = (index: number) => {
        setProjectVisibility(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = false;
            return newVisibility;
        });
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-mac text-white p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-mac-bg to-black opacity-80 z-0"></div>
            <div className="absolute inset-0 z-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '20px 20px',
            }}>
            </div>
            <div className="relative z-10 w-full px-4 pt-8 max-w-[1600px] mx-auto">
                <div className="text-center text-4xl font-bold mb-8 mac-title">
                    My Projects
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectWindow
                            key={project.title}
                            project={project}
                            index={index}
                            isVisible={projectVisibility[index]}
                            onClose={handleClose}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects; 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

const HomeMobile = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'research', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const projects = [
        {
            title: "EmCon Medical Platform",
            description: "Full-stack multi-hospital system with predictive ML models for wait time estimation (90%+ accuracy)",
            tech: ["React", "Node.js", "MongoDB", "PyTorch"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "FinTrack App",
            description: "Cross-platform personal finance app with smart budgeting engine and real-time tracking",
            tech: ["React", "Flutter", "Figma"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "News Recommendation System",
            description: "Real-time pipeline with BERT embeddings for content classification and personalized recommendations",
            tech: ["Python", "BERT", "TensorFlow"],
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Generative & Transformer Models",
            description: "VAEs, Diffusion Models, and optimized Vision Transformers achieving 20% faster inference",
            tech: ["PyTorch", "TensorFlow", "Hugging Face"],
            gradient: "from-blue-500 to-purple-500"
        }
    ];

    const researchItems = [
        {
            title: "Research Intern",
            company: "Computer Vision & Graphics Lab | LUMS",
            date: "May 2025 - Present",
            description: "Designed ViT-based IRKD model with knowledge distillation achieving 40% reduction in training time"
        },
        {
            title: "Professional Fellowship",
            company: "Dev Weekends - Software Engineering",
            date: "Jun 2025 - Present",
            description: "12 intensive workshops on advanced DSA, system design, and scalable backend systems"
        },
        {
            title: "Teaching Assistant",
            company: "Digital Logic Circuit & Design | LUMS",
            date: "Jan 2025 - May 2025",
            description: "Led weekly labs for 120+ students, mentored 10+ advanced projects on circuit simulation"
        }
    ];

    return (
        <>
            {/* Mobile Navigation */}
            <MobileNav activeSection={activeSection} onNavigate={scrollToSection} />

            <div className="mobile-content min-h-screen">
                {/* Hero Section */}
                <motion.section
                    id="home"
                    className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-24 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Background Image with Vignette Effect */}
                    <div className="absolute inset-0 z-0">
                        <div 
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'url(/cu.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.5,
                            }}
                        />
                        {/* Vignette Overlay */}
                        <div 
                            className="absolute inset-0"
                            style={{
                                background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.9) 100%)',
                            }}
                        />
                    </div>
                    
                    {/* Content */}
                    <div className="max-w-lg relative z-10">
                        {/* Greeting - Fade in from left */}
                        <motion.p 
                            className="text-orange-500 text-sm font-medium mb-3 sf-display tracking-tight"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.3,
                                ease: [0.6, -0.05, 0.01, 0.99]
                            }}
                        >
                            Hello, I'm Salman
                        </motion.p>
                        
                        {/* Main Title - Dramatic scale and fade */}
                        <motion.h1 
                            className="sf-display-large text-white mb-6"
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1,
                                delay: 0.6,
                                ease: [0.6, -0.05, 0.01, 0.99]
                            }}
                        >
                            Building the Future
                        </motion.h1>
                        
                        {/* Subtitle - Slide up with blur effect */}
                        <motion.p 
                            className="text-gray-400 text-lg leading-relaxed mb-8 sf-display"
                            initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            transition={{ 
                                duration: 0.8,
                                delay: 1.1,
                                ease: [0.6, -0.05, 0.01, 0.99]
                            }}
                        >
                            Computer Science at LUMS • AI Researcher • Full-Stack Developer
                        </motion.p>
                    </div>
                </motion.section>

                {/* About Section */}
                <motion.section
                    id="about"
                    className="min-h-screen px-6 py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2
                        className="sf-display-medium text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        className="glass-card p-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I'm a developer with a deep appreciation for thoughtful design and clean, expressive web experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            My work centers on minimalism, but I'm always exploring how machine learning can enhance user experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Constantly learning through hands-on projects and staying current with AI developments reshaping the web.
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        className="mt-8 space-y-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-orange-500 mb-3">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'C++', 'C', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Dart'].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 glass-card text-white text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-orange-500 mb-3">Frameworks & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Express.js', 'PyTorch', 'TensorFlow', 'Keras', 'Flutter', 'Git', 'Docker', 'MongoDB'].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 glass-card text-white text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    id="education"
                    className="min-h-screen px-6 py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2
                        className="sf-display-medium text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Education
                    </motion.h2>
                    <div className="space-y-6">
                        <motion.div
                            className="glass-card p-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 sf-display">
                                        Lahore University of Management Sciences
                                    </h3>
                                    <p className="text-orange-500 text-sm mb-2">
                                        BSc. Computer Science • Expected May 2026
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm pl-5 mb-2">
                                Lahore, Pakistan
                            </p>
                            <div className="text-gray-300 text-sm pl-5 space-y-1">
                                <p className="font-medium">Dean's Honor List</p>
                                <p className="text-gray-400">Relevant Coursework: Data Science, Deep Learning, Machine Learning, Algorithms</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="glass-card p-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 sf-display">
                                        Hertie School
                                    </h3>
                                    <p className="text-orange-500 text-sm mb-2">
                                        Data Science Summer School • Aug 2023
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm pl-5">
                                Berlin, Germany (Remote)
                            </p>
                        </motion.div>

                        <motion.div
                            className="glass-card p-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 sf-display">
                                        Cedar College
                                    </h3>
                                    <p className="text-orange-500 text-sm mb-2">
                                        A Levels • May 2022
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm pl-5 mb-2">
                                Karachi, Pakistan
                            </p>
                            <p className="text-gray-300 text-sm pl-5 font-medium">
                                Merit Scholarship
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    id="projects"
                    className="min-h-screen px-6 py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2
                        className="sf-display-medium text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                                <h3 className="text-xl font-bold text-white mb-2 sf-display">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Research Section */}
                <motion.section
                    id="research"
                    className="min-h-screen px-6 py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2
                        className="sf-display-medium text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Research & Experience
                    </motion.h2>
                    <div className="space-y-6">
                        {researchItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1 sf-display">
                                            {item.title}
                                        </h3>
                                        <p className="text-orange-500 text-sm mb-2">
                                            {item.company} • {item.date}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm pl-5">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                    id="contact"
                    className="min-h-screen px-6 py-16 flex items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="w-full">
                        <motion.h2
                            className="sf-display-medium text-white mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.div
                            className="glass-card p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                I'm always interested in new opportunities, exciting projects, and meaningful collaborations.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="mailto:salmanatwork1@gmail.com"
                                    className="flex items-center gap-4 p-4 glass-card hover:bg-white/10 transition-all"
                                >
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                                        <span className="text-orange-500 text-xl">✉️</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-white font-medium">salmanatwork1@gmail.com</p>
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/salman192003"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 glass-card hover:bg-white/10 transition-all"
                                >
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                                        <span className="text-orange-500 text-xl">💼</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">GitHub</p>
                                        <p className="text-white font-medium">@salman192003</p>
                                    </div>
                                </a>
                                <a
                                    href="https://linkedin.com/in/salman-ajmal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 glass-card hover:bg-white/10 transition-all"
                                >
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                                        <span className="text-orange-500 text-xl">🔗</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">LinkedIn</p>
                                        <p className="text-white font-medium">Salman Ajmal</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </>
    );
};

export default HomeMobile;

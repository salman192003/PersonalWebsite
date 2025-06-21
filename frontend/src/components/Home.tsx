import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Declare the custom element for TypeScript/JSX
// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { url: string };
        }
    }
}

const SplineViewerEmbed = () => {
    const viewerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Dynamically add the Spline viewer script
        const scriptSrc = "https://unpkg.com/@splinetool/viewer@1.10.12/build/spline-viewer.js";
        if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = scriptSrc;
            document.body.appendChild(script);
        }

        const viewer = viewerRef.current;

        const handleLoad = (e: Event) => {
            // Target the shadow root of the spline-viewer
            const splineViewer = e.target as any;
            const shadowRoot = splineViewer.shadowRoot;
            if (shadowRoot) {
                const logo = shadowRoot.querySelector('#logo');
                if (logo) {
                    // Hide the logo
                    logo.style.display = 'none';
                }
            }
        };

        if (viewer) {
            viewer.addEventListener('load', handleLoad);
        }

        return () => {
            if (viewer) {
                viewer.removeEventListener('load', handleLoad);
            }
        };
    }, []);
    return (
        <div className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh]">
            <spline-viewer
                ref={viewerRef}
                url="https://prod.spline.design/I16M6hlezeFVKPyx/scene.splinecode"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: 0 }}
            />
        </div>
    );
};

const Home = () => {
    const experiences = [
        {
            title: "Research Intern",
            company: "Computer Vision & Graphics Lab | LUMS",
            date: "May 2025-Present",
            description: [
                "Designed a ViT-based IRKD model for image classification using knowledge distillation, curriculum learning, and architectural enhancements achieving a 40% reduction in training time.",
                "Collaborated with other researchers to critically evaluate existing transformer architectures and jointly identify key limitations, leading to the design of a more efficient and generalizable approach."
            ]
        },
        {
            title: "Professional Fellowship",
            company: "Software Engineering | Dev Weekends",
            date: "June 2025-Present",
            description: [
                "Selected for a competitive fellowship focused on advanced DSA, system design, and full-stack engineering through 12 intensive weekend workshops.",
                "On track to complete 12 projects and a capstone on scalable backend systems with Node.js, Express, MongoDB, and RESTful APIs."
            ]
        },
        {
            title: "Teachers Assistant",
            company: "Digital Logic Circuit and Design | LLUMS",
            date: "Jan 2025 - May 2025",
            description: [
                "Supported a 120-student undergraduate course by leading weekly lab sessions on hardware modeling, circuit simulation and digital system design.",
                "Mentored 10+ advanced student projects, strengthening skills in system architecture and digital circuit design through in-depth technical guidance."
            ]
        }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section with Text and Animation */}
            <motion.section
                id="home"
                className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] px-4 md:px-8 lg:px-16"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                {/* Left: Hero Text */}
                <div className="w-full lg:w-2/5 lg:pr-8 mb-8 lg:mb-0">
                    <div className="space-y-6">
                        <svg className="w-64 h-1 mb-4" viewBox="0 0 256 4">
                            <line stroke="currentColor" strokeWidth="2" x1="0" y1="2" x2="256" y2="2" />
                        </svg>
                        <p className="text-[24px] font-medium tracking-tight text-orange-500">
                            Hello, I'm Salman.
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
                            Welcome to My Digital Space
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight text-gray-600 dark:text-gray-300">
                            I'm a senior Computer Science student at LUMS, with a passion for Artificial Intelligence and Web Development. I love building things that blend creativity and technology—always curious, always learning, and always ready for the next challenge.<br />
                            <span className="block mt-4">Curious? Explore the interactive animation on the right—try zooming in and maybe even pressing a few keys to see what happens!</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-6 py-3 text-[17px] font-medium bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 rounded-lg text-center"
                            >
                                View Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-6 py-3 text-[17px] font-medium border border-orange-500 text-black dark:text-white hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-lg text-center"
                            >
                                Get in Touch
                            </button>
                        </div>
                        <svg className="w-64 h-1 mt-8" viewBox="0 0 256 4">
                            <line stroke="currentColor" strokeWidth="2" x1="0" y1="2" x2="256" y2="2" />
                        </svg>
                    </div>
                </div>
                {/* Right: Spline Animation */}
                <div className="w-full lg:w-3/5 lg:pl-8">
                    <SplineViewerEmbed />
                </div>
            </motion.section>

            {/* Detailed About Section */}
            <motion.section
                id="about"
                className="scroll-mt-24 py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
                        About Me
                    </h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            I'm a developer with a deep appreciation for thoughtful design and a strong focus on building clean, expressive web experiences. I believe the best interfaces are the ones that feel effortless—simple, yet impactful.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            My work centers on minimalism, but I'm always exploring how to make websites more intelligent and useful. I'm especially interested in how machine learning and data science can enhance the user experience and bring more value to digital products.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            I'm constantly learning—whether through hands-on projects, staying up to date with the latest in tech, or simply learning from the people around me. I'm especially drawn to the exciting developments happening in Artificial Intelligence and how they're reshaping the future of the web.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Expanded Projects Section */}
            <motion.section
                id="projects"
                className="scroll-mt-24 py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                        {/* Software Engineering Projects First */}
                        <motion.div whileHover={{ y: -8, scale: 1.03 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-black">EmCon – Multi-Hospital Medical Platform</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Developed a secure, full-stack, multi-user web application with React.js and Node.js designed for seamless inter-hospital connectivity and featuring distinct user interfaces for doctors, administrators, and patients across multiple healthcare facilities. Worked in a cross-functional Agile team for 12 weeks, contributing to sprints, code reviews, and stand-ups for continuous delivery. Integrated a predictive model for wait time estimation, achieving 90%+ accuracy in estimating patient queue times, which significantly optimized patient flow and enhanced overall hospital efficiency.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">MongoDB</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Express.js</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">React</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Node.js</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Python</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">PyTorch</span>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -8, scale: 1.03 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-black">FinTrack – Personal Finance & Budgeting App <span className='font-normal italic text-gray-500'>| React, Flutter DevTools, Figma</span></h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 flex-grow pl-4">
                                <li>Spearheaded the design and development of a cross-platform personal finance app, transforming Figma mockups into an intuitive, user-centric interface focused on accessibility and seamless user flow.</li>
                                <li>Interviewed 10+ target users and iteratively refined UX flows based on feedback, resulting in improved usability and higher user engagement, in line with Agile development practices.</li>
                                <li>Built a smart budgeting engine with real-time tracking and personalized insights to enhance user experience and financial habits.</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">React</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Flutter DevTools</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Figma</span>
                            </div>
                        </motion.div>
                        {/* Other Projects Below */}
                        <motion.div whileHover={{ y: -8, scale: 1.03 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-black">Consumer Behavior Analytics</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Engineered scalable data pipelines to process and analyze large-scale consumer datasets, uncovering critical purchasing patterns and market dynamics that informed strategic business decisions. Utilized extensive historical transactional data to develop robust sales forecasting models, experimenting with various machine learning algorithms to predict future demand with a 70% accuracy, enabling optimised inventory management and supply chain planning.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Python</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Scikit-learn</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Pandas</span>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -8, scale: 1.03 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-black">Generative & Transformer Models</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Tackled multiple complex generative challenges through research-intensive projects involving Variational Autoencoders (VAEs) and Diffusion Models, effectively leveraging their capabilities across multiple datasets to produce highly realistic and novel synthetic content and achieve superior performance in data representation. Optimized Vision Transformer models, specifically implementing DeiT-based architectures, to significantly reduce inference time by 20% and enable efficient performance on lower-resolution images, demonstrating proficiency in deploying high-performance vision transformers in resource-constrained environments.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">PyTorch</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">TensorFlow</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Keras</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Hugging Face Transformers</span>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -8, scale: 1.03 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-black">News Recommendation System</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Developed an end-to-end real-time pipeline to scrape and preprocess thousands of live news articles, leveraging BERT embeddings alongside other classification models for high-accuracy content classification and entity extraction. Engineered a scalable machine learning architecture for a personalized news recommendation engine, leveraging collaborative filtering and content-based methods. The best-performing model among tested approaches was utilized to filter relevant articles, demonstrating high effectiveness in identifying and surfacing relevant content.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Python</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">TensorFlow</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">PyTorch</span>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -8, scale: 1.03 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-black">Network-Centric Computing & Network Security</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                Developed a scalable Distributed Hash Table (DHT) for decentralized systems with robust protocols for fault tolerance and data optimization; implemented secure OAuth 2.0 authentication and standards-compliant login systems to enhance web application security and prevent common vulnerabilities.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">OAuth 2.0</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">DHT</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Security</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Resume Section */}
            <motion.section
                id="resume"
                className="scroll-mt-24 py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-black"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
                        Resume
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Experience Timeline */}
                        <div>
                            <h3 className="text-3xl font-bold mb-8 text-black">Experience</h3>
                            <div className="relative">
                                {/* Timeline line */}
                                <motion.div
                                    className="absolute left-2.5 top-2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 origin-top"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 0.8, ease: 'easeIn' }}
                                />
                                <motion.div
                                    className="space-y-12"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
                                >
                                    {experiences.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative pl-10"
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                            }}
                                        >
                                            {/* Timeline dot */}
                                            <motion.div
                                                className="absolute left-0 top-1 w-5 h-5 bg-orange-500 rounded-full border-4 border-white dark:border-black"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.2 }}
                                            />
                                            <h4 className="text-xl font-semibold mb-1 text-black">{exp.title}</h4>
                                            <p className="text-orange-500 font-medium mb-2">{exp.company} • {exp.date}</p>
                                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                                {exp.description.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Column: Education & Skills */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-3xl font-bold mb-8 text-black">Education</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="font-semibold text-lg text-black">Lahore University of Management and Sciences</h5>
                                        <p className="text-gray-600 dark:text-gray-300">BSc. Computer Science</p>
                                        <p className="text-sm text-gray-500">May. 2026 | Lahore, Pakistan</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Dean's Honor List</p>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-black">Hertie School Germany</h5>
                                        <p className="text-gray-600 dark:text-gray-300">Data Science Summer School</p>
                                        <p className="text-sm text-gray-500">Aug. 2023 | Remote</p>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-black">Cedar College</h5>
                                        <p className="text-gray-600 dark:text-gray-300">A Levels, Cambridge International Examinations</p>
                                        <p className="text-sm text-gray-500">May. 2022 | Karachi, Pakistan</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Merit Scholarship</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-8 text-black">Technical Skills</h3>
                                <div className="space-y-2 text-left">
                                    <div>
                                        <span className="font-semibold text-black">Languages:</span>
                                        <span className="text-gray-700 dark:text-gray-200"> C, C++, Python, TypeScript, HTML/CSS, Dart</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-black">Frameworks:</span>
                                        <span className="text-gray-700 dark:text-gray-200"> React, ExpressJs, PyTorch, TensorFlow, Keras</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-black">Tools:</span>
                                        <span className="text-gray-700 dark:text-gray-200"> Git, Docker, MongoDB, VS Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <a
                            href="/CV.pdf"
                            download
                            className="px-8 py-4 text-lg font-medium bg-orange-500 text-gray-100 hover:bg-orange-600 transition-all duration-300 rounded-lg inline-flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume (PDF)
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* Detailed Contact Section */}
            <motion.section
                id="contact"
                className="scroll-mt-24 py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-black"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
                        Get In Touch
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-black">Let's Connect</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                I'm always interested in new opportunities, exciting projects, and meaningful collaborations.
                                Whether you have a project in mind, want to discuss technology, or just want to say hello,
                                I'd love to hear from you.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-300">salmanatwork1@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Lahore, Pakistan</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Response Time</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Usually within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-black">Connect With Me</h3>
                            <div className="space-y-4">
                                <a href="https://www.linkedin.com/in/salman-ajmal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300">
                                    <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">LinkedIn</h4>
                                        <p className="text-gray-600 dark:text-gray-300">salman-ajmal</p>
                                    </div>
                                </a>
                                <a href="https://github.com/salmanajmal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300">
                                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">GitHub</h4>
                                        <p className="text-gray-600 dark:text-gray-300">salmanajmal</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home; 
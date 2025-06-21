import React from 'react';
import { motion } from 'framer-motion';

const resumePDF = process.env.PUBLIC_URL + '/CVV.pdf.pdf';

const Resume = () => {
    return (
        <div className="page-container px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    <div className="flex items-center justify-between mt-8 mb-4">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl font-light sketch-text text-black"
                        >
                            Resume
                        </motion.h1>
                        <a
                            href={resumePDF}
                            download
                            className="minimal-button"
                        >
                            Download PDF
                        </a>
                    </div>
                    <svg className="w-64 h-1" viewBox="0 0 256 4">
                        <line className="sketch-line" x1="0" y1="2" x2="256" y2="2" />
                    </svg>
                    <div className="space-y-16">
                        {/* Education Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 sketch-text"
                        >
                            <h2 className="text-2xl font-light mb-2 text-black">Education</h2>
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                    <h3 className="text-xl font-light text-black">Lahore University of Management and Sciences</h3>
                                    <p className="font-light">BSc. Computer Science</p>
                                    <ul className="list-disc ml-6 font-light">
                                        <li>Deans Honors List</li>
                                        <li>Pursuing a minor in Economics</li>
                                    </ul>
                                </div>
                                <div className="text-right md:text-left">
                                    <p className="font-light">May, 2026</p>
                                    <p className="font-light">Lahore, Pakistan</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between mt-2">
                                <div>
                                    <h3 className="text-xl font-light text-black">Cedar College</h3>
                                    <p className="font-light">A Levels, Cambridge International Examinations</p>
                                    <ul className="list-disc ml-6 font-light">
                                        <li>Dean's List</li>
                                        <li>Merit Scholarship</li>
                                    </ul>
                                </div>
                                <div className="text-right md:text-left">
                                    <p className="font-light">May, 2022</p>
                                    <p className="font-light">Karachi, Pakistan</p>
                                </div>
                            </div>
                        </motion.div>
                        <svg className="w-48 h-1" viewBox="0 0 192 4">
                            <line className="sketch-line" x1="0" y1="2" x2="192" y2="2" />
                        </svg>
                        {/* Experience Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4 sketch-text"
                        >
                            <h2 className="text-2xl font-light mb-2 text-black">Experience</h2>
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                    <h3 className="text-xl font-light text-black">Teachers Assistant</h3>
                                    <p className="font-light">Digital Logic Circuit and Design | LUMS</p>
                                    <ul className="list-disc ml-6 font-light">
                                        <li>Supervised weekly lab sessions on hardware modeling, circuit simulation, and digital design; mentored multiple advanced projects focused on state machines, system architecture, and high-level hardware design.</li>
                                    </ul>
                                </div>
                                <div className="text-right md:text-left">
                                    <p className="font-light">Jan. 2025 – Present</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between mt-2">
                                <div>
                                    <h3 className="text-xl font-light text-black">Promotions and Publications Lead</h3>
                                    <p className="font-light">LUMS Mathematics Society | LUMS</p>
                                    <ul className="list-disc ml-6 font-light">
                                        <li>Led strategic social media campaigns and managed financials for a nationwide SIGMA math competition module, managing a 20-member team and coordinating 200+ student participants across Pakistan.</li>
                                    </ul>
                                </div>
                                <div className="text-right md:text-left">
                                    <p className="font-light">June. 2023 – June 2024</p>
                                </div>
                            </div>
                        </motion.div>
                        <svg className="w-48 h-1" viewBox="0 0 192 4">
                            <line className="sketch-line" x1="0" y1="2" x2="192" y2="2" />
                        </svg>
                        {/* Research Projects Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-4 sketch-text"
                        >
                            <h2 className="text-2xl font-light mb-2 text-black">Research Projects</h2>
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                    <h3 className="text-xl font-light text-black">Vision Transformer Compression</h3>
                                    <p className="font-light">Deep Learning | LUMS</p>
                                    <ul className="list-disc ml-6 font-light">
                                        <li>Developed a compact ViT training framework leveraging saliency maps for guided distillation and curriculum learning for improved generalization. The project, conducted under the supervision of Dr. Murtaza Taj, involved extensive literature review of existing ViT architectures and key advancements in computer vision.</li>
                                    </ul>
                                </div>
                                <div className="text-right md:text-left">
                                    <p className="font-light">Jan. 2025–Present</p>
                                </div>
                            </div>
                        </motion.div>
                        <svg className="w-48 h-1" viewBox="0 0 192 4">
                            <line className="sketch-line" x1="0" y1="2" x2="192" y2="2" />
                        </svg>
                        {/* Development Projects Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-4 sketch-text"
                        >
                            <h2 className="text-2xl font-light mb-2 text-black">Development Projects</h2>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">EmCon – Hospital Lookup & Blood Request Platform — Software Engineering</h3>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Built a multi-user web platform connecting multiple hospitals, with distinct interfaces for patients, medical staff, and administrators. Features real-time blood requests, ML based wait-time predictions, and an interactive navigation chatbot. Developed using React, Node.js, Express, and MongoDB with extensive UI/UX iterations for optimal user experience.</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">Consumer Behavior Analytics — Data Science</h3>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Analyzed large-scale consumer datasets to forecast sales revenue and uncover purchasing trends using machine learning models. Applied clustering algorithms to segment customers based on behavioral patterns, enabling data-driven insights for targeted marketing and revenue optimization.</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">News Recommendation System — Machine Learning</h3>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Built an end-to-end pipeline to scrape news articles from the web and classify them into relevant categories using NLP techniques. Used multiple models to optimize classification accuracy for real-world news filtering and content recommendation systems.</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">Filesystems, Threads & Memory — Operating Systems</h3>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Completed a series of project-based implementations focused on core operating system components, including a simplified UNIX file system, a POSIX-compliant threading library, and a dynamic memory allocator. Emphasized hands-on development to optimize resource management, concurrency, and system performance.</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">Network-Centric Computing & Network Security</h3>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Developed a scalable Distributed Hash Table (DHT) for decentralized systems with robust protocols for fault tolerance and data optimization; implemented secure OAuth 2.0 authentication and standards-compliant login systems to enhance web application security and prevent common vulnerabilities.</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">Data Structures & Algorithms</h3>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Completed challenging projects across two intensive courses, applying and optimising advanced data structures for real-world problems. Demonstrated strong algorithmic thinking and theoretical depth through custom implementations and complex problem-solving.</li>
                                </ul>
                            </div>
                        </motion.div>
                        <svg className="w-48 h-1" viewBox="0 0 192 4">
                            <line className="sketch-line" x1="0" y1="2" x2="192" y2="2" />
                        </svg>
                        {/* Certifications Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-4 sketch-text"
                        >
                            <h2 className="text-2xl font-light mb-2 text-black">Certifications</h2>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">Data Science Summer School</h3>
                                <p className="font-light">Data Science Lab | Hertie School, Germany</p>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Completed an intensive 2-month, remote Data Science course led by experts from the Hertie Data Science Lab. Gained hands-on experience in Python, machine learning, data visualization, and applied statistics. Collaborated with an international cohort of peers on data-driven research projects.</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-light text-black">Deep Learning Specialisation</h3>
                                <p className="font-light">DeepLearning.AI, Stanford University</p>
                                <ul className="list-disc ml-6 font-light">
                                    <li>Completed an advanced sequence of neural network modules covering high-dimensional function approximation, convolutional architectures, and sequential modeling with practical TensorFlow implementations.</li>
                                </ul>
                            </div>
                        </motion.div>
                        <svg className="w-48 h-1" viewBox="0 0 192 4">
                            <line className="sketch-line" x1="0" y1="2" x2="192" y2="2" />
                        </svg>
                        {/* Technical Skills Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-4 sketch-text"
                        >
                            <h2 className="text-2xl font-light mb-2 text-black">Technical Skills</h2>
                            <div className="mb-2">
                                <span className="font-light">Languages:</span> C/C++, Python, Java, TypeScript, HTML/CSS
                            </div>
                            <div className="mb-2">
                                <span className="font-light">Frameworks:</span> React, ExpressJS, PyTorch, TensorFlow, MongoDB
                            </div>
                            <div className="mb-2">
                                <span className="font-light">Tools:</span> Linux, Git, Docker, Postman, WordPress, VS Code, STATA
                            </div>
                        </motion.div>
                    </div>
                    <svg className="w-64 h-1" viewBox="0 0 256 4">
                        <line className="sketch-line" x1="0" y1="2" x2="256" y2="2" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume; 
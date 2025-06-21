import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="page-container px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    {/* About Me Section */}
                    <div className="space-y-8 p-8">
                        <svg className="w-64 h-1 mb-4" viewBox="0 0 256 4">
                            <line stroke="currentColor" strokeWidth="2" x1="0" y1="2" x2="256" y2="2" />
                        </svg>
                        <h2 className="text-4xl font-light text-black">
                            About Me
                        </h2>
                        <p className="text-xl leading-relaxed font-light">
                            I'm a Computer Science student at LUMS, passionate about creating elegant solutions to complex problems. My journey in technology has been driven by curiosity and a desire to build meaningful applications that make a difference.
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-6 p-8">
                        <h3 className="text-2xl font-light border-b border-black/10 pb-2 mb-4 text-black">
                            Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4">
                                <span className="font-semibold">Languages</span>
                                <ul className="list-disc ml-6 mt-2 font-light">
                                    <li>C/C++</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>TypeScript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                            <div className="p-4">
                                <span className="font-semibold">Frameworks</span>
                                <ul className="list-disc ml-6 mt-2 font-light">
                                    <li>React</li>
                                    <li>ExpressJS</li>
                                    <li>PyTorch</li>
                                    <li>TensorFlow</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="p-4">
                                <span className="font-semibold">Tools</span>
                                <ul className="list-disc ml-6 mt-2 font-light">
                                    <li>Linux</li>
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>Postman</li>
                                    <li>WordPress</li>
                                    <li>VS Code</li>
                                    <li>STATA</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="space-y-6 p-8">
                        <h3 className="text-2xl font-light border-b border-black/10 pb-2 mb-4 text-black">
                            Education
                        </h3>
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row md:justify-between p-4">
                                <div>
                                    <h4 className="text-xl font-light text-black">Lahore University of Management and Sciences</h4>
                                    <p className="font-light">BSc. Computer Science</p>
                                    <ul className="list-disc ml-6 font-light">
                                        <li>Deans Honors List</li>
                                        <li>Pursuing a minor in Economics</li>
                                    </ul>
                                </div>
                                <div className="text-right md:text-left mt-4 md:mt-0">
                                    <p className="font-light">May, 2026</p>
                                    <p className="font-light">Lahore, Pakistan</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between p-4">
                                <div>
                                    <h4 className="text-xl font-light text-black">Cedar College</h4>
                                    <p className="font-light">A Levels, Cambridge International Examinations</p>
                                    <ul className="list-disc ml-6 font-light">
                                        <li>Dean's List</li>
                                        <li>Merit Scholarship</li>
                                    </ul>
                                </div>
                                <div className="text-right md:text-left mt-4 md:mt-0">
                                    <p className="font-light">May, 2022</p>
                                    <p className="font-light">Karachi, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <svg className="w-64 h-1 mt-8" viewBox="0 0 256 4">
                        <line stroke="currentColor" strokeWidth="2" x1="0" y1="2" x2="256" y2="2" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default About; 
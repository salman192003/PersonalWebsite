import React, { useState } from 'react';
import { motion, useDragControls } from 'framer-motion';

interface ContactWindowProps {
    title: string;
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ContactWindow: React.FC<ContactWindowProps> = ({ title, isVisible, onClose, children }) => {
    const dragControls = useDragControls();

    if (!isVisible) {
        return null;
    }

    return (
        <motion.div
            className="w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
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
                            onClick={onClose}
                        />
                        <button className="mac-window-button minimize" aria-label="Minimize window" />
                        <button className="mac-window-button maximize" aria-label="Maximize window" />
                    </div>
                    <div className="mac-window-title">{title}</div>
                </div>
                <div className="mac-window-content p-4">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

const Contact = () => {
    const [windowVisibility, setWindowVisibility] = useState({
        info: true
    });

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-mac-bg to-black opacity-80 z-0"></div>
            <div className="absolute inset-0 z-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '20px 20px',
            }}>
            </div>
            <div className="relative z-10 w-full px-4 pt-8 max-w-[1600px] mx-auto">
                <div className="text-center text-4xl font-bold mb-8 mac-title text-black">
                    Contact Me
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 justify-center gap-6">
                    <ContactWindow
                        title="Contact Information"
                        isVisible={windowVisibility.info}
                        onClose={() => setWindowVisibility(prev => ({ ...prev, info: false }))}
                    >
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="mac-icon">📧</div>
                                <a
                                    href="mailto:salman.ajmal@lums.edu.pk"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    salman.ajmal@lums.edu.pk
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="mac-icon">📱</div>
                                <a
                                    href="tel:+923001234567"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    +92 300 1234567
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="mac-icon">📍</div>
                                <span className="text-white/80">
                                    Lahore, Pakistan
                                </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="mac-icon">💼</div>
                                <a
                                    href="https://www.linkedin.com/in/salman-ajmal-123456789"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </ContactWindow>
                </div>
            </div>
        </div>
    );
};

export default Contact;
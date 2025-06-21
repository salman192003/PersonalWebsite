import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'resume', label: 'Resume' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className="minimal-nav fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="minimal-text text-xl font-bold cursor-pointer text-black flex items-center"
                        aria-label="Home"
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                            {/* Minimal SA Logo */}
                            <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            <path d="M8 12L16 12L16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 16L16 12L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24 12L32 12L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24 20L28 16L32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="20" cy="20" r="1" fill="currentColor" />
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="minimal-nav-link cursor-pointer hover:text-orange-500 transition-colors duration-300 text-black"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden minimal-button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open menu</span>
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span
                                className={`block w-6 h-0.5 bg-sci-fi-red transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-sci-fi-red mt-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-sci-fi-red mt-1.5 transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                >
                    <div className="py-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block minimal-nav-link cursor-pointer text-left w-full hover:text-orange-500 transition-colors duration-300 text-black"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 
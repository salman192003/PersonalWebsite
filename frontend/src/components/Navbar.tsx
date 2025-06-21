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
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                            <circle cx="18" cy="18" r="18" fill="#FFEDD5" />
                            <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="bold" fontSize="16" fill="#EA580C">SA</text>
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
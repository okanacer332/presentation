import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';
import HeroSlide from './components/HeroSlide';
import ProblemSlide from './components/ProblemSlide';
import SolutionSlide from './components/SolutionSlide';
import TelegramDemoSlide from './components/TelegramDemoSlide';
import ContentSection from './components/ContentSection';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        HeroSlide,
        ProblemSlide,
        SolutionSlide,
        TelegramDemoSlide
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const CurrentComponent = slides[currentSlide];

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            {/* Slide Container - Full Viewport Height for Presentation Feel */}
            <div className="relative w-full min-h-screen flex flex-col justify-center items-center bg-slate-50 md:py-0 py-0">
                {/* Responsive Container: Fixed height on Desktop, Dynamic on Mobile */}
                <div className="relative w-full max-w-[1280px] min-h-[100dvh] md:min-h-0 md:h-[720px] bg-white md:shadow-2xl shadow-none md:rounded-xl rounded-none md:overflow-hidden border-0 md:border border-slate-200 z-10 mx-0 md:mx-4 flex flex-col">

                    {/* Top Progress Stepper - Optimized for Mobile */}
                    <div className="absolute top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4">
                        <div className="bg-white/90 backdrop-blur-md border border-gray-200 p-1 md:p-1.5 rounded-full shadow-lg flex items-center gap-1 md:gap-2">
                            {['Vizyon', 'Sorun', 'Çözüm', 'Demo'].map((label, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`relative flex items-center justify-center rounded-full transition-all duration-300
                                        ${currentSlide === index
                                            ? 'bg-gray-900 text-white shadow-md px-3 md:px-4 py-1.5 md:py-2'
                                            : 'bg-transparent text-gray-500 hover:bg-gray-100 px-2 md:px-3 py-1.5 md:py-2'}
                                    `}
                                >
                                    <span className={`text-[10px] md:text-xs font-bold ${currentSlide === index ? 'mr-1 md:mr-2' : ''}`}>
                                        {index + 1}
                                    </span>
                                    {/* Text label: Hidden on mobile unless active (and even then, maybe just icon/number is safer if space is tight, but we'll try short text) */}
                                    <span className={`text-[10px] md:text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300
                                        ${currentSlide === index ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0 hidden md:inline-block'}
                                    `}>
                                        {label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex-1 relative md:overflow-hidden touch-pan-y"
                        >
                            <CurrentComponent />
                        </motion.div>
                    </AnimatePresence>

                    {/* Desktop Side Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 shadow-xl hover:bg-white hover:scale-110 transition-all z-40 hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 shadow-xl hover:bg-white hover:scale-110 transition-all z-40 hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Mobile Bottom Navigation - Simplified Dots */}
                    <div className="absolute bottom-4 left-0 w-full flex md:hidden justify-center items-center gap-2 z-50 pointer-events-none">
                        <div className="flex gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-auto shadow-sm border border-gray-100">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-0 w-full h-1/2 bg-blue-50/50 skew-y-3 transform origin-top-left -z-0"></div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-8 text-gray-400 flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Detayları Keşfet</span>
                    <ArrowDown size={20} />
                </motion.div>
            </div>

            {/* Detailed Content Section */}
            <div id="details">
                <ContentSection />
            </div>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowDown, Eye, Shield, CheckCircle2, MessageCircle } from 'lucide-react';
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
                    {/* Top Progress Stepper - Premium Card Design */}
                    <div className="absolute top-4 md:top-8 z-50 w-full flex justify-center px-4 pointer-events-none">
                        <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-1.5 rounded-2xl shadow-2xl flex items-center gap-1 md:gap-2 pointer-events-auto ring-1 ring-black/5">
                            {[
                                { id: 0, label: 'Vizyon', icon: <Eye size={14} className="md:w-4 md:h-4" /> },
                                { id: 1, label: 'Sorun', icon: <Shield size={14} className="md:w-4 md:h-4" /> },
                                { id: 2, label: 'Çözüm', icon: <CheckCircle2 size={14} className="md:w-4 md:h-4" /> },
                                { id: 3, label: 'Demo', icon: <MessageCircle size={14} className="md:w-4 md:h-4" /> },
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`relative flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all duration-300
                                        ${currentSlide === index
                                            ? 'bg-white shadow-md text-blue-600 scale-100 ring-1 ring-black/5 font-bold'
                                            : 'hover:bg-white/50 text-gray-500 hover:text-gray-900 scale-95 font-medium'}
                                    `}
                                >
                                    <span className={`opacity-80 ${currentSlide === index ? 'text-blue-600' : ''}`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-[10px] md:text-xs tracking-tight">
                                        {item.label}
                                    </span>
                                    {/* Active Indicator Dot */}
                                    {currentSlide === index && (
                                        <motion.div
                                            layoutId="active-stepper"
                                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                                        />
                                    )}
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

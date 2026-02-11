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
            <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-50">
                {/* 16:9 Aspect Ratio / Card Look Container */}
                <div className="relative w-full max-w-[1280px] h-[720px] bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-200 z-10 mx-4">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full"
                        >
                            <CurrentComponent />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls (Bottom Right of Slide) */}
                    <div className="absolute bottom-6 right-8 flex gap-3 z-50">
                        <button onClick={prevSlide} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition">
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex items-center text-xs font-mono text-gray-400 select-none">
                            {currentSlide + 1} / {slides.length}
                        </div>
                        <button onClick={nextSlide} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition">
                            <ChevronRight size={20} />
                        </button>
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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import HeroSlide from './components/HeroSlide';
import ProblemSlide from './components/ProblemSlide';
import SolutionSlide from './components/SolutionSlide';
import TelegramDemoSlide from './components/TelegramDemoSlide';

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
        <div className="w-full h-screen bg-slate-100 flex items-center justify-center overflow-hidden">
            {/* Slide Container - 16:9 Aspect Ratio / Card Look */}
            <div className="relative w-full max-w-[1280px] h-[720px] bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-200">
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

            {/* Background Accent (Optional: subtle shape behind the slide) */}
            <div className="absolute -z-10 top-0 w-full h-1/2 bg-blue-50/50 skew-y-3 transform origin-top-left"></div>
        </div>
    );
}

export default App;

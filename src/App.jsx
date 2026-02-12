import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';
import HeroSlide from './components/HeroSlide';
import ProblemSlide from './components/ProblemSlide';
import SolutionSlide from './components/SolutionSlide';
import TelegramDemoSlide from './components/TelegramDemoSlide';
import ContentSection from './components/ContentSection';
import FitToViewport from './components/FitToViewport';
import FixedHeader from './components/FixedHeader';

// Main App Component - Ver 2.0
// SimSlide Removed. 
function App() {
    console.log("App Mounting...");
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [HeroSlide, ProblemSlide, SolutionSlide, TelegramDemoSlide];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const CurrentComponent = slides[currentSlide];

    // Auto-Play Logic
    useEffect(() => {
        // For all slides, wait 15 seconds then advance
        const timer = setTimeout(() => {
            nextSlide();
        }, 15000);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div className="w-full bg-slate-100 min-h-screen flex flex-col pt-16 md:pt-20">
            {/* 1. FIXED HEADER */}
            <FixedHeader currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

            {/* 2. MAIN SLIDE AREA (Fixed Height) */}
            <div className="relative w-full flex-none h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col justify-center items-center bg-slate-50">

                {/* Mobile Stepper (Secondary Bar - If needed for visibility without connection to header?) 
                    Actually, let's keep the dots inside the container for mobile simplicity 
                */}

                <div className="relative w-full max-w-[1280px] h-full md:h-[90%] bg-white md:shadow-2xl shadow-none md:rounded-xl rounded-none overflow-hidden border-0 md:border border-slate-200 z-10 mx-0 md:mx-4 flex flex-col">

                    {/* The Slide Content */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex-1 relative overflow-hidden touch-pan-y"
                        >
                            <FitToViewport>
                                <CurrentComponent onComplete={nextSlide} />
                            </FitToViewport>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 shadow-xl hover:bg-white hover:scale-110 transition-all z-40 border border-gray-100 active:scale-90"
                    >
                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 shadow-xl hover:bg-white hover:scale-110 transition-all z-40 border border-gray-100 active:scale-90"
                    >
                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>

                    {/* Mobile Bottom Navigation Dots (Since Header has only Logo on Mobile) */}
                    <div className="absolute bottom-4 left-0 w-full flex md:hidden justify-center items-center gap-2 z-50 pointer-events-none">
                        <div className="flex gap-2 bg-black/10 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-auto">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-all shadow-sm ${currentSlide === idx ? 'bg-blue-600 w-4' : 'bg-white'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator (Optional/Desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="hidden md:flex absolute bottom-4 text-gray-400 flex-col items-center gap-1 cursor-pointer z-0"
                    onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="text-[10px] font-medium tracking-widest uppercase">Detaylar</span>
                    <ArrowDown size={16} />
                </motion.div>
            </div>

            {/* 3. DETAILED CONTENT */}
            <div id="details" className="relative z-20 bg-white scroll-mt-20 md:scroll-mt-24">
                <ContentSection />
            </div>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Image, FolderCheck, Laptop, Monitor, BrainCircuit, Check, ArrowDown } from 'lucide-react';

const SolutionSlide = () => {
    const [step, setStep] = useState(0);

    // Simulation Sequence
    useEffect(() => {
        const sequence = async () => {
            while (true) {
                setStep(0); // Reset
                await new Promise(r => setTimeout(r, 1000));
                setStep(1); // Simultaneous Upload
                await new Promise(r => setTimeout(r, 2000));
                setStep(2); // AI Processing & Matching
                await new Promise(r => setTimeout(r, 1500));
                setStep(3); // Result: Taxpayer Folder
                await new Promise(r => setTimeout(r, 4000)); // Hold result
            }
        };
        sequence();
    }, []);

    // Animation Variants for Responsive Design
    const getMobileVariants = (isLeft) => ({
        initial: { x: isLeft ? -50 : 50, y: -50, opacity: 0 },
        process: { x: 0, y: 50, scale: 0.5, opacity: 0 }, // Move to center brain
        idle: { x: 0, y: 0, opacity: 1, scale: 1 }
    });

    const getDesktopVariants = (isLeft) => ({
        initial: { x: isLeft ? -350 : 350, y: 50, opacity: 0 },
        process: { x: 0, y: 200, scale: 0.5, opacity: 0 },
        idle: { x: isLeft ? -100 : 100, y: 150, opacity: 1, scale: 1 }
    });

    // Detect mobile for animation (Simplified check, ideal would be ResizeObserver)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="slide-content h-full flex flex-col justify-center items-center bg-white text-[#1D1D1F] relative overflow-hidden p-2 md:p-4">

            {/* Header */}
            <div className="text-center mb-4 md:mb-16 z-20 pt-12 md:pt-0">
                <motion.h2
                    className="text-2xl md:text-5xl font-bold mb-2 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Tek Hareket. <span className="text-blue-600">Sonsuz Zeka.</span>
                </motion.h2>
                <p className="text-gray-500 text-xs md:text-lg max-w-2xl mx-auto px-4 leading-tight">
                    Aynı anda. Farklı cihazlardan. Farklı formatlarda. <br className="hidden md:block" />
                    <strong className="text-gray-900">Domizan belgeleri anlar, ilişkilendirir ve doğru mükellefe işler.</strong>
                </p>
            </div>

            {/* The Simulation Stage */}
            <div className="relative w-full max-w-5xl h-[300px] md:h-[450px] flex flex-col md:flex-row justify-center items-center">

                {/* 1. INPUT SOURCES (Visible at Step 0-2) */}
                <div className="absolute top-0 w-full flex justify-between px-4 md:px-20 z-10">
                    {/* Source A: Mac Office */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="flex flex-col items-center gap-2 md:gap-3"
                    >
                        <div className="bg-gray-50 p-2 md:p-4 rounded-2xl border border-gray-100 flex items-center justify-center w-16 h-16 md:w-24 md:h-24">
                            <Laptop size={24} className="text-gray-700 md:w-10 md:h-10" />
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] md:text-xs font-bold text-gray-400">OFİS (MAC)</div>
                            <div className="text-[8px] md:text-[10px] text-gray-400">09:14 AM</div>
                        </div>
                    </motion.div>

                    {/* Source B: Home Windows */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="flex flex-col items-center gap-2 md:gap-3"
                    >
                        <div className="bg-gray-50 p-2 md:p-4 rounded-2xl border border-gray-100 flex items-center justify-center w-16 h-16 md:w-24 md:h-24">
                            <Monitor size={24} className="text-gray-700 md:w-10 md:h-10" />
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] md:text-xs font-bold text-gray-400">EV (PC)</div>
                            <div className="text-[8px] md:text-[10px] text-gray-400">09:14 AM</div>
                        </div>
                    </motion.div>
                </div>

                {/* 2. THE FILES (Flying Animation) */}
                <AnimatePresence>
                    {step >= 1 && step < 3 && (
                        <>
                            {/* Invoice from Mac */}
                            <motion.div
                                initial={{ x: isMobile ? -50 : -350, y: isMobile ? 30 : 50, opacity: 0 }}
                                animate={step === 2 ?
                                    { x: 0, y: isMobile ? 120 : 200, scale: 0.5, opacity: 0 } :
                                    { x: isMobile ? -40 : -100, y: isMobile ? 60 : 150, opacity: 1, scale: 1 }
                                }
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="absolute top-0 z-20"
                            >
                                <div className="bg-white p-2 md:p-3 rounded-xl shadow-xl border border-red-100 flex items-center gap-2 md:gap-3 w-32 md:w-48">
                                    <div className="bg-red-50 p-1 md:p-2 rounded-lg"><FileText className="text-red-500" size={16} /></div>
                                    <div>
                                        <div className="text-[10px] md:text-xs font-bold text-gray-700">Fatura_A.pdf</div>
                                        <div className="text-[8px] md:text-[10px] text-gray-400">KDV Dahil</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Slip Photo from Windows */}
                            <motion.div
                                initial={{ x: isMobile ? 50 : 350, y: isMobile ? 30 : 50, opacity: 0 }}
                                animate={step === 2 ?
                                    { x: 0, y: isMobile ? 120 : 200, scale: 0.5, opacity: 0 } :
                                    { x: isMobile ? 40 : 100, y: isMobile ? 60 : 150, opacity: 1, scale: 1 }
                                }
                                transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                                className="absolute top-0 z-20"
                            >
                                <div className="bg-white p-2 md:p-3 rounded-xl shadow-xl border border-blue-100 flex items-center gap-2 md:gap-3 w-32 md:w-48">
                                    <div className="bg-blue-50 p-1 md:p-2 rounded-lg"><Image className="text-blue-500" size={16} /></div>
                                    <div>
                                        <div className="text-[10px] md:text-xs font-bold text-gray-700">Fiş.jpg</div>
                                        <div className="text-[8px] md:text-[10px] text-gray-400">Ödeme</div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* 3. CENTRAL INTELLIGENCE HUB (Active at Step 2) */}
                <div className="absolute top-[120px] md:top-[180px] z-10 flex flex-col items-center">
                    <motion.div
                        animate={step === 2 ? { scale: 1.1, borderColor: '#3B82F6', boxShadow: "0 0 60px rgba(59, 130, 246, 0.4)" } : { scale: 1, borderColor: '#F3F4F6', boxShadow: 'none' }}
                        className="bg-white p-4 md:p-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center w-20 h-20 md:w-24 md:h-24"
                    >
                        <BrainCircuit size={32} className={`${step === 2 ? "text-blue-600 animate-pulse" : "text-gray-300"} md:w-10 md:h-10`} />
                    </motion.div>
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="mt-4 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                        >
                            İLİŞKİLENDİRİLİYOR...
                        </motion.div>
                    )}
                </div>

                {/* 4. THE RESULT (Output List) */}
                <AnimatePresence>
                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="absolute bottom-4 md:bottom-10 z-30 w-[90%] md:w-full max-w-lg"
                        >
                            <div className="bg-white border-l-4 border-green-500 shadow-2xl rounded-r-xl overflow-hidden">
                                <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-100 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <FolderCheck className="text-green-600" size={20} />
                                        <div>
                                            <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase">MÜKELLEF DOSYASI</div>
                                            <div className="font-bold text-sm md:text-base text-gray-900">Ahmet Yılmaz İnşaat A.Ş.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] md:text-xs font-bold">
                                        <Check size={12} /> EŞLEŞTİ
                                    </div>
                                </div>
                                <div className="p-3 md:p-4 space-y-2">
                                    <div className="flex justify-between text-xs md:text-sm text-gray-500">
                                        <span>📄 Fatura #1024 (PDF)</span>
                                        <span className="font-mono text-gray-900">12.500 ₺</span>
                                    </div>
                                    <div className="flex justify-between text-xs md:text-sm text-gray-500">
                                        <span>📷 Ödeme Dekontu (JPG)</span>
                                        <span className="font-mono text-gray-900">Eşleşen Tutar</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default SolutionSlide;

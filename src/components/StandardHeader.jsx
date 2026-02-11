import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, CheckCircle2, MessageCircle } from 'lucide-react';

const StandardHeader = ({ currentSlide, setCurrentSlide }) => {
    return (
        <div className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 flex-none md:pt-4 md:px-8 pt-[env(safe-area-inset-top,20px)] px-4 pb-2 shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">

                {/* Logo Section */}
                <div className="flex items-center gap-2 self-start md:self-auto py-1">
                    <img src="/domizan-new/domizan.png" alt="Domizan" className="h-6 md:h-8 object-contain" />
                    <span className="font-bold text-gray-900 text-sm md:text-base tracking-tight hidden md:inline-block">AI Müşavir</span>
                </div>

                {/* Stepper Navigation - Moved here essentially */}
                <div className="w-full md:w-auto flex justify-center">
                    <div className="bg-gray-100/50 p-1 md:p-1.5 rounded-xl flex items-center gap-1 md:gap-2">
                        {[
                            { id: 0, label: 'Vizyon', icon: <Eye size={14} className="md:w-4 md:h-4" /> },
                            { id: 1, label: 'Sorun', icon: <Shield size={14} className="md:w-4 md:h-4" /> },
                            { id: 2, label: 'Çözüm', icon: <CheckCircle2 size={14} className="md:w-4 md:h-4" /> },
                            { id: 3, label: 'Demo', icon: <MessageCircle size={14} className="md:w-4 md:h-4" /> },
                        ].map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`relative flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-300
                                    ${currentSlide === index
                                        ? 'bg-white shadow-sm text-blue-600 scale-100 ring-1 ring-black/5 font-bold'
                                        : 'hover:bg-white/50 text-gray-500 hover:text-gray-900 scale-95 font-medium'}
                                `}
                            >
                                <span className={`opacity-80 ${currentSlide === index ? 'text-blue-600' : ''}`}>
                                    {item.icon}
                                </span>
                                <span className="text-[10px] md:text-xs tracking-tight">
                                    {item.label}
                                </span>
                                {/* Active Indicator */}
                                {currentSlide === index && (
                                    <motion.div
                                        layoutId="header-active-stepper"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop Placeholder for balance or extra CTA */}
                <div className="hidden md:block w-24"></div>
            </div>
        </div>
    );
};

export default StandardHeader;

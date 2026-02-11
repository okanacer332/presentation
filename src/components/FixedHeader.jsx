import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, CheckCircle2, MessageCircle } from 'lucide-react';

const FixedHeader = ({ currentSlide, setCurrentSlide }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-[100] h-16 md:h-20 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm flex items-center justify-between px-4 md:px-8 safe-area-inset-top">

            {/* Left Spacer (Mobile: Burger? Desktop: Empty) */}
            <div className="w-12 md:w-32 hidden md:block">
                {/* Could be a menu button here later */}
            </div>

            {/* Center Logo - ABSOLUTE CENTER */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <img src="/domizan-new/domizan.png" alt="Domizan" className="h-8 md:h-10 object-contain" />
                <span className="font-bold text-gray-900 text-lg md:text-xl tracking-tight hidden md:inline-block">AI Müşavir</span>
            </div>

            {/* Right Side / Navigation */}
            {/* Mobile: Maybe icon only? Desktop: Full stepper */}
            <div className="flex-1 flex justify-end">
                {/* Desktop Stepper */}
                <div className="hidden md:flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
                    {[
                        { id: 0, label: 'Vizyon', icon: <Eye size={14} /> },
                        { id: 1, label: 'Sorun', icon: <Shield size={14} /> },
                        { id: 2, label: 'Çözüm', icon: <CheckCircle2 size={14} /> },
                        { id: 3, label: 'Demo', icon: <MessageCircle size={14} /> },
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
                                ${currentSlide === index
                                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5'
                                    : 'text-gray-500 hover:text-gray-900'}
                            `}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Stepper - COMPACT Right aligned */}
                <div className="md:hidden flex items-center gap-1">
                    {/* Show only active step text or simple dots? 
                         User said "4 tane header başlığı hala logonun üzerine denk geliyor".
                         If we center logo, we have very little space on sides.
                         Let's just show a simple "Slide X/4" or small dots on the right?
                         OR, put the stepper BELOW the header on mobile?
                     */}
                </div>
            </div>
        </header>
    );
};

export default FixedHeader;

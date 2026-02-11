import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Monitor, Globe, Server, MessageCircle, Laptop, HardDrive, MousePointer2 } from 'lucide-react';

const ProblemSlide = () => {
    return (
        <div className="slide-content h-full flex flex-col justify-start md:justify-center bg-white text-[#1D1D1F] p-4 md:p-8 relative md:overflow-hidden pt-16 md:pt-8 overflow-y-auto no-scrollbar md:overflow-y-visible">

            {/* Header: Universal Access */}
            <div className="text-center mb-4 md:mb-10 z-10 flex-shrink-0">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight"
                >
                    Tüm Cihazlarda. <span className="text-blue-600">Her An Sizinle.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 text-xs md:text-lg max-w-2xl mx-auto px-4 leading-tight"
                >
                    Ofiste <strong>Windows</strong>, evde <strong>Mac</strong>, sunucuda <strong>Linux</strong>. <br className="hidden md:block" />
                    Ve cebinizde anlık asistanız <strong>Telegram</strong>.
                </motion.p>

                {/* 3-Step Setup Flow - Hidden on small mobile to save vertical space? Or Simplified */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 md:gap-6 mt-4 md:mt-8 p-2 md:p-4 bg-gray-50 rounded-2xl w-fit mx-auto border border-gray-100 scale-90 md:scale-100 origin-top"
                >
                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                        <div className="bg-white p-1.5 md:p-2 rounded border border-gray-200"><Download size={14} className="md:w-[18px]" /></div>
                        <span className="text-[10px] md:text-sm">İndir & Kur</span>
                    </div>
                    <div className="w-4 md:w-8 h-px bg-gray-300 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                        <div className="bg-white p-1.5 md:p-2 rounded border border-gray-200"><Smartphone size={14} className="md:w-[18px]" /></div>
                        <span className="text-[10px] md:text-sm">Telegram'ı Bağla</span>
                    </div>
                    <div className="w-4 md:w-8 h-px bg-gray-300 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold">
                        <div className="bg-blue-100 p-1.5 md:p-2 rounded border border-blue-200"><MessageCircle size={14} className="md:w-[18px]" /></div>
                        <span className="text-[10px] md:text-sm">Konuşmaya Başla</span>
                    </div>
                </motion.div>
            </div>

            {/* Comparison: Static vs Connected */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto w-full z-10 pb-8 md:pb-0 flex-1 overflow-y-auto md:overflow-visible no-scrollbar">

                {/* The Old Way (Competitors) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="bg-gray-50 border-2 border-dashed border-gray-300 p-4 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-center relative group hover:bg-gray-100 transition-colors"
                >
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 text-[9px] md:text-xs font-bold text-gray-400 bg-gray-200 px-2 py-1 rounded">ESKİ DÜNYA</div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-600 mb-1 md:mb-2">Geleneksel Yazılımlar</h3>
                    <p className="text-gray-500 text-[10px] md:text-sm mb-3 md:mb-6 font-medium">
                        Mevcut masaüstü programları. <br className="md:hidden" />
                        <span className="text-red-500 font-bold">Veri Girişine Bağımlıdır.</span>
                    </p>

                    <div className="flex flex-col gap-2 md:gap-3">
                        <div className="flex items-center gap-2 md:gap-3 bg-white p-2 md:p-3 rounded-lg border border-gray-200 opacity-70">
                            <MousePointer2 size={16} className="text-red-400 flex-shrink-0 md:w-5 md:h-5" />
                            <span className="text-gray-500 text-[10px] md:text-sm">Tek tek dosya seç/yükle hamallığı.</span>
                        </div>
                    </div>
                </motion.div>

                {/* The Domizan Way - Eco-system */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="bg-white border-2 border-blue-500 p-4 md:p-8 rounded-2xl md:rounded-3xl flex flex-col shadow-2xl relative overflow-hidden ring-4 ring-blue-50"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 text-[9px] md:text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">YENİ NESİL</div>

                    <h3 className="text-lg md:text-2xl font-bold text-[#1D1D1F] mb-1 md:mb-2">Domizan Ekosistemi</h3>
                    <p className="text-gray-600 text-[10px] md:text-sm mb-3 md:mb-6 font-medium">
                        Veri girişine gerek yok. <span className="text-blue-600 font-bold">Her şeyi görür.</span>
                    </p>

                    <div className="grid grid-cols-2 gap-2 md:gap-3 z-10">
                        {/* OS Icons */}
                        <div className="bg-gray-100 p-2 md:p-3 rounded-xl flex items-center justify-center gap-1.5 md:gap-2 border border-gray-200">
                            <Laptop size={14} className="md:w-4" />
                            <span className="text-[10px] md:text-xs font-bold text-gray-700">Tüm Cihazlar</span>
                        </div>
                        {/* Telegram Highlight */}
                        <div className="bg-blue-600 text-white p-2 md:p-3 rounded-xl flex items-center justify-center gap-1.5 md:gap-2 shadow-lg shadow-blue-300">
                            <MessageCircle size={14} fill="currentColor" className="md:w-4" />
                            <span className="text-[10px] md:text-xs font-bold">Canlı Asistan</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ProblemSlide;

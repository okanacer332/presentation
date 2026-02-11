import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Monitor, Globe, Server, MessageCircle, Laptop, HardDrive, MousePointer2 } from 'lucide-react';

const ProblemSlide = () => {
    return (
        <div className="slide-content h-full flex flex-col md:justify-center justify-start bg-white text-[#1D1D1F] p-4 md:p-8 relative overflow-y-auto md:overflow-hidden pt-20 pb-20 md:pt-8 md:pb-8">

            {/* Header: Universal Access */}
            <div className="text-center mb-6 md:mb-10 z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                >
                    Tüm Cihazlarda. <span className="text-blue-600">Her An Sizinle.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto px-4"
                >
                    Ofiste <strong>Windows</strong>, evde <strong>Mac</strong>, sunucuda <strong>Linux</strong>. <br className="hidden md:block" />
                    Ve cebinizde anlık asistanız <strong>Telegram</strong>.
                </motion.p>

                {/* 3-Step Setup Flow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-6 mt-6 md:mt-8 p-4 bg-gray-50 rounded-2xl w-fit mx-auto border border-gray-100"
                >
                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                        <div className="bg-white p-2 rounded border border-gray-200"><Download size={18} /></div>
                        <span className="text-xs md:text-sm">İndir & Kur</span>
                    </div>
                    <div className="w-8 h-px bg-gray-300 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                        <div className="bg-white p-2 rounded border border-gray-200"><Smartphone size={18} /></div>
                        <span className="text-xs md:text-sm">Telegram'ı Bağla</span>
                    </div>
                    <div className="w-8 h-px bg-gray-300 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold">
                        <div className="bg-blue-100 p-2 rounded border border-blue-200"><MessageCircle size={18} /></div>
                        <span className="text-xs md:text-sm">Konuşmaya Başla</span>
                    </div>
                </motion.div>
            </div>

            {/* Comparison: Static vs Connected */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto w-full z-10 pb-20 md:pb-0">

                {/* The Old Way (Competitors) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="bg-gray-50 border-2 border-dashed border-gray-300 p-6 md:p-8 rounded-3xl flex flex-col justify-center relative group hover:bg-gray-100 transition-colors"
                >
                    <div className="absolute top-4 right-4 text-[10px] md:text-xs font-bold text-gray-400 bg-gray-200 px-2 py-1 rounded">ESKİ DÜNYA</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2">Klasik Yazılımlar</h3>
                    <p className="text-gray-500 text-xs md:text-sm mb-6 font-medium">
                        Luca, Zirve, Mikro... Hepsinin ortak sorunu:
                        <span className="text-red-500 font-bold block mt-1">Siz Veri Girmezseniz, Onlar ÇÖPTÜR.</span>
                    </p>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 opacity-70">
                            <MousePointer2 size={20} className="text-red-400 flex-shrink-0" />
                            <span className="text-gray-500 text-xs md:text-sm">Tek tek dosya seç/yükle hamallığı.</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 opacity-70">
                            <HardDrive size={20} className="text-red-400 flex-shrink-0" />
                            <span className="text-gray-500 text-xs md:text-sm">Pasif arşiv (Sizi uyarmaz, yönlendirmez).</span>
                        </div>
                    </div>
                </motion.div>

                {/* The Domizan Way - Eco-system */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="bg-white border-2 border-blue-500 p-6 md:p-8 rounded-3xl flex flex-col shadow-2xl relative overflow-hidden ring-4 ring-blue-50"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    <div className="absolute top-4 right-4 text-[10px] md:text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">YENİ NESİL</div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] mb-2">Domizan Ekosistemi</h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-6 font-medium">
                        Veri girişi yapmanıza gerek yok. O zaten <span className="text-blue-600 font-bold">her şeyi görüyor.</span>
                    </p>

                    <div className="grid grid-cols-2 gap-3 z-10">
                        {/* OS Icons */}
                        <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-center gap-2 border border-gray-200">
                            <Laptop size={16} />
                            <span className="text-xs font-bold text-gray-700">Tüm Cihazlar</span>
                        </div>
                        {/* Telegram Highlight */}
                        <div className="bg-blue-600 text-white p-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-300">
                            <MessageCircle size={16} fill="currentColor" />
                            <span className="text-xs font-bold">Canlı Asistan</span>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 text-xs text-blue-900 leading-relaxed font-medium">
                        <strong>Fark:</strong> Eski yazılımlar <i>arşivcidir</i>, Domizan <i>çalışandır</i>.
                        Siz uyurken o belgeleri işler, sabah raporunu sunar.
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ProblemSlide;

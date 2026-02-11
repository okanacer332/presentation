import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap } from 'lucide-react';

const HeroSlide = () => {
    return (
        <div className="slide-content h-full flex items-center justify-center bg-[#F5F5F7] text-[#1D1D1F] p-6 md:p-12 overflow-y-auto md:overflow-hidden">

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-0">

                {/* Left Column: The Narrative & Value Prop */}
                <div className="flex flex-col items-start text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/domizan-new/domizan.png" alt="Domizan Logo" className="h-12 md:h-16 mb-6 object-contain" />
                        <h2 className="text-2xl md:text-3xl font-medium text-[#86868b] tracking-tight mb-6 md:mb-8">
                            İletişim, yeniden tasarlandı.
                        </h2>
                    </motion.div>

                    {/* The "Look them in the eye" Comparison */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

                        <div className="space-y-6">
                            {/* Old Way */}
                            <div className="flex items-center justify-between opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-3">
                                    <Clock size={20} className="md:w-6 md:h-6" />
                                    <span className="text-base md:text-lg font-medium">Manuel Operasyon</span>
                                </div>
                                <span className="text-lg md:text-xl font-bold decoration-red-500 line-through decoration-2">50 Saat</span>
                            </div>

                            {/* Divider with Arrow */}
                            <div className="flex items-center gap-4">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <div className="bg-blue-50 text-blue-600 rounded-full p-1">
                                    <ArrowRight size={14} className="md:w-4 md:h-4" />
                                </div>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>

                            {/* New Way */}
                            <div className="flex items-center justify-between text-[#1D1D1F]">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-200">
                                        <Zap size={18} fill="currentColor" className="md:w-5 md:h-5" />
                                    </div>
                                    <span className="text-lg md:text-xl font-bold">Domizan Otopilot</span>
                                </div>
                                <span className="text-3xl md:text-4xl font-black tracking-tight text-blue-600">
                                    2 Dakika
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-md font-normal leading-relaxed"
                    >
                        Ofisinizin en büyük zaman kaybını, en güçlü rekabet avantajına dönüştürün. <strong className="text-gray-900">Sıfır hata, sıfır stres.</strong>
                    </motion.p>
                </div>

                {/* Right Column: The Product Visual (Visionary Shot) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }} // Apple-like easing
                    className="relative md:block flex justify-center w-full"
                >
                    {/* Ambient Glow */}
                    <div className="absolute -inset-10 bg-gradient-to-tr from-blue-100 to-purple-50 rounded-full blur-3xl -z-10 opacity-70"></div>

                    <img
                        src="/dashboard_mockup.png"
                        alt="Domizan Dashboard"
                        className="w-full max-w-sm md:max-w-full rounded-xl shadow-2xl border border-white/80 ring-1 ring-gray-900/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-700 ease-out"
                        style={{
                            boxShadow: '0 40px 60px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05)'
                        }}
                    />

                    {/* Subtle Detail Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl border border-white/50 flex items-center gap-4 hidden md:flex"
                    >
                        <div className="text-right">
                            <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Yatırım Geri Dönüşü</div>
                            <div className="text-2xl font-black text-[#1D1D1F]">1500x</div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default HeroSlide;

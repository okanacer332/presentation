import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Zap } from 'lucide-react';

const HeroSlide = () => {
    return (
        <div className="slide-content w-full flex items-center justify-center bg-[#F5F5F7] text-[#1D1D1F] p-6 md:p-12">

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
                            <div className="flex items-center justify-between opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                                        <Clock size={16} className="md:w-5 md:h-5" />
                                    </div>
                                    <span className="text-sm md:text-lg font-bold text-gray-500">Manuel Operasyon</span>
                                </div>
                                <span className="text-xl md:text-2xl font-bold text-gray-400 line-through decoration-red-500 decoration-2">
                                    50 Saat
                                </span>
                            </div>

                            {/* Divider with Arrow */}
                            <div className="flex items-center gap-4">
                                <div className="h-px bg-gray-100 flex-1"></div>
                                <div className="bg-blue-50 text-blue-600 rounded-full p-1.5 animate-pulse">
                                    <ArrowRight size={14} className="md:w-5 md:h-5" />
                                </div>
                                <div className="h-px bg-gray-100 flex-1"></div>
                            </div>

                            {/* New Way */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-200">
                                        <Zap size={16} fill="currentColor" className="md:w-5 md:h-5" />
                                    </div>
                                    <span className="text-sm md:text-lg font-bold text-gray-900">Domizan Otopilot</span>
                                </div>
                                <TimeReducer />
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
                        <div className="text-right group/info relative">
                            <div className="flex items-center gap-1 justify-end cursor-help">
                                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Yatırım Geri Dönüşü</div>
                                <div className="w-3 h-3 rounded-full border border-gray-400 text-gray-500 flex items-center justify-center text-[8px] font-serif italic">i</div>
                            </div>
                            <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-800 text-white text-[10px] rounded-lg opacity-0 group-hover/info:opacity-100 transition-opacity pointer-events-none">
                                * Manuel işlem maliyeti (50 saat) ile Otopilot maliyeti (2 dk) arasındaki verimlilik farkı baz alınmıştır.
                            </div>
                            <div className="text-2xl font-black text-[#1D1D1F]">1500x</div>
                        </div>
                    </motion.div>
                </motion.div>

            </div >
        </div >
    );
};

// Animated Time Reducer Component
const TimeReducer = () => {
    const [state, setState] = React.useState('start'); // start, shrinking, done

    React.useEffect(() => {
        const sequence = async () => {
            while (true) {
                setState('start');
                await new Promise(r => setTimeout(r, 2000)); // Hold 10 Hours
                setState('shrinking');
                await new Promise(r => setTimeout(r, 1000)); // Fast shrink animation
                setState('done');
                await new Promise(r => setTimeout(r, 4000)); // Hold 60 Seconds
            }
        };
        sequence();
    }, []);

    return (
        <div className="flex flex-col items-end w-40 md:w-64">
            <div className="relative h-8 md:h-10 w-full flex items-center justify-end overflow-hidden">
                <AnimatePresence mode="wait">
                    {state === 'start' && (
                        <motion.span
                            key="hours"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="text-xl md:text-2xl font-bold text-gray-400 line-through decoration-red-400 decoration-2 whitespace-nowrap"
                        >
                            10 Saat
                        </motion.span>
                    )}
                    {state === 'shrinking' && (
                        <motion.div
                            key="shrinking"
                            initial={{ scale: 1.5, filter: "blur(0px)" }}
                            animate={{ scale: 0.5, filter: "blur(4px)" }}
                            className="text-2xl md:text-3xl font-black text-blue-400"
                        >
                            ⚡⚡⚡
                        </motion.div>
                    )}
                    {state === 'done' && (
                        <motion.span
                            key="seconds"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1.1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="text-xl md:text-3xl font-black tracking-tight text-blue-600 whitespace-nowrap"
                        >
                            60 Saniye
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {/* Visual Progress Bar to reinforce the "shrinking" concept */}
            <div className="w-full h-1 md:h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-blue-600"
                    animate={{
                        width: state === 'start' ? "100%" : state === 'shrinking' ? "10%" : "0.5%",
                        backgroundColor: state === 'done' ? "#2563eb" : "#ef4444",
                    }}
                    transition={{ duration: state === 'shrinking' ? 1 : 0.5 }}
                />
            </div>
        </div>
    );
};

export default HeroSlide;

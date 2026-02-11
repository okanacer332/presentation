
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText, Folder, Zap, MousePointer2, X, Minus, Square,
    MoreVertical, Search, Paperclip, Smile, Mic, Check, CheckCheck,
    MessageCircle, ArrowRight, Image as ImageIcon, Loader, ChevronRight, Bell
} from 'lucide-react';

const ChatMessage = ({ text, time, sender, status = 'read', isHeader = false }) => {
    if (isHeader) {
        return (
            <div className="flex justify-center mb-4 mt-4 first:mt-0">
                <span className="bg-[#f0f2f5]/90 px-3 py-1 rounded-lg text-xs text-[#54656f] shadow-sm font-medium uppercase tracking-wide">
                    {text}
                </span>
            </div>
        );
    }
    return (
        <div className={`flex flex-col max-w-[80%] mb-1.5 ${sender === 'me' ? 'self-end items-end' : 'self-start items-start'}`}>
            <div className={`px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[12px] md:text-[13px] shadow-sm relative leading-snug
                ${sender === 'me' ? 'bg-[#d9fdd3] rounded-tr-none text-[#111b21]' : 'bg-white rounded-tl-none text-[#111b21]'}`}
            >
                {text}
                <div className="flex items-center justify-end gap-1 mt-0.5 space-x-0.5 select-none">
                    <span className="text-[10px] text-[#667781]">{time}</span>
                    {sender === 'me' && (
                        status === 'read' ? <CheckCheck size={14} className="text-[#53bdeb]" /> : <Check size={14} className="text-[#667781]" />
                    )}
                </div>
            </div>
        </div>
    );
};

const SimulationSlide = ({ onComplete }) => {
    // Phase 0: Desktop Idle (Chaos)
    // Phase 1: Incoming Message
    // Phase 2: Drag & Drop to "Domizan Gelen Kutusu"
    // Phase 3: Domizan App Processing (OCR) - FULL SCREEN OVERLAY
    // Phase 4: Auto-Filing Animation
    // Phase 5: Telegram Notification & Reset
    // Phase 6: Daily Briefing (Next Morning 09:00)
    // Phase 7: RAG Q&A (User asks, Bot answers)
    const [phase, setPhase] = useState(0);
    const [time, setTime] = useState("14:45");

    useEffect(() => {
        let mounted = true;
        const sequence = async () => {
            // Run sequence ONCE
            setPhase(0); setTime("14:45");
            await new Promise(r => setTimeout(r, 2000)); // (2s) Chaos view - Quick glance
            if (!mounted) return;

            setPhase(1); // Msg arrives
            await new Promise(r => setTimeout(r, 2000)); // (2s) Read message - Fast
            if (!mounted) return;

            setPhase(2); // Drag
            await new Promise(r => setTimeout(r, 2000)); // (2s) Dragging - Immediate action
            if (!mounted) return;

            setPhase(3); // OCR
            await new Promise(r => setTimeout(r, 5000)); // (5s) Processing - High Impact
            if (!mounted) return;

            setPhase(4); // Filing
            await new Promise(r => setTimeout(r, 3000)); // (3s) Filing - Smooth & Fast
            if (!mounted) return;

            setPhase(5); // Notify
            await new Promise(r => setTimeout(r, 3000)); // (3s) Read notify - Quick check
            if (!mounted) return;

            // --- NEW PHASES ---
            setTime("09:00"); // Next Day
            setPhase(6); // Daily Briefing
            await new Promise(r => setTimeout(r, 6000)); // (6s) Read briefing (Slightly longer)
            if (!mounted) return;

            setPhase(7); // RAG Q&A
            await new Promise(r => setTimeout(r, 12000)); // (12s) Q&A interaction (Extended per request)

            if (mounted && onComplete) {
                onComplete();
            }
        };
        sequence();
        return () => { mounted = false; };
    }, [onComplete]);

    // Random Icons (Stable on mount)
    const [randomIcons] = useState(() => Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 80 + 5,
        type: ['doc', 'xls', 'img', 'folder'][Math.floor(Math.random() * 4)],
        name: `Belge_${Math.floor(Math.random() * 100)}`
    })));

    return (
        <div className="w-full h-full bg-black text-white relative overflow-hidden font-sans select-none flex flex-col justify-center items-center mx-auto shrink-0">

            {/* Context Badge */}
            <div className="absolute top-8 z-[100] text-center pointer-events-none w-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={phase <= 2 ? 1 : phase === 3 ? 2 : 3}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="inline-block px-6 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-white/90 text-sm font-medium shadow-2xl z-[101]"
                    >
                        {phase <= 2 && "1. WhatsApp'tan Dosya İndirilir & Kutuya Atılır"}
                        {phase === 3 && "2. Yapay Zeka Veriyi Ayrıştırır (OCR)"}
                        {phase >= 4 && "3. Otomatik Klasörlenir & Raporlanır"}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* === PHASE 0-2: DESKTOP & WHATSAPP LAYER === */}
            {/* Standard div, no weird wrapper, absolute full size */}
            <motion.div
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-900 overflow-hidden"
                animate={phase >= 3 ? { opacity: 0, scale: 1.1, filter: "blur(10px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
            >
                <div
                    className="relative w-full max-w-[1400px] h-[800px] bg-[#004275] overflow-hidden border border-gray-800 rounded-xl shadow-2xl origin-center"
                >
                    {/* Windows 10 Hero Style Background (CSS) */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(0,100,200,0.5)_0%,_transparent_50%),_radial-gradient(circle_at_90%_80%,_rgba(0,0,0,0.8)_0%,_transparent_60%)] z-0"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,_#001a4d_0%,_#0066cc_40%,_#003366_100%)] opacity-80 z-0 mix-blend-overlay"></div>

                    {/* Windows 10 Taskbar */}
                    <div className="absolute bottom-0 w-full h-10 bg-[#101010]/95 backdrop-blur-md flex items-center justify-between px-2 z-[200] border-t border-white/10">
                        <div className="flex items-center gap-1">
                            {/* Start Button */}
                            <div className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <div className="grid grid-cols-2 gap-[1px]">
                                    <div className="w-1.5 h-1.5 bg-white"></div>
                                    <div className="w-1.5 h-1.5 bg-white"></div>
                                    <div className="w-1.5 h-1.5 bg-white"></div>
                                    <div className="w-1.5 h-1.5 bg-white"></div>
                                </div>
                            </div>
                            {/* Search */}
                            <div className="flex items-center bg-white/10 hover:bg-white/20 transition-colors h-8 px-2 md:px-3 w-auto md:w-64 mr-2 rounded-sm">
                                <Search size={14} className="text-white md:mr-2" />
                                <span className="text-xs text-gray-300 hidden md:block">Aramak için buraya yazın</span>
                            </div>
                            {/* Icons */}
                            <div className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Zap size={20} className="text-white" /> {/* Cortana/TaskView placeholder */}
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors border-b-2 border-blue-400 bg-white/5">
                                <Folder size={20} className="text-yellow-400 fill-yellow-400" />
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <div className="w-5 h-5 bg-[#0078d7] rounded-sm flex items-center justify-center text-[10px] font-bold text-white">W</div>
                            </div>
                        </div>
                        {/* System Tray */}
                        <div className="flex items-center gap-4 px-2 text-white text-xs">
                            <ChevronRight size={14} className="rotate-[-90deg]" />
                            <div className="flex flex-col items-end">
                                <span>14:45</span>
                                <span>12.02.2026</span>
                            </div>
                            <div className="w-1 h-4 border-l border-gray-500 ml-2"></div>
                        </div>
                    </div>

                    {/* Desktop Icons */}
                    {randomIcons.map((icon, i) => (
                        <div key={i} className="absolute w-20 flex flex-col items-center gap-1 opacity-100 hover:bg-white/10 border border-transparent hover:border-white/20 rounded-sm p-2 transition-colors z-[1] cursor-pointer" style={{ left: `${icon.x}%`, top: `${icon.y}%` }}>
                            {icon.type === 'doc' && <FileText className="text-blue-200 drop-shadow-md" size={32} strokeWidth={1.5} fill="#2b579a" />}
                            {icon.type === 'xls' && <FileText className="text-green-100 drop-shadow-md" size={32} strokeWidth={1.5} fill="#1d6f42" />}
                            {icon.type === 'img' && <ImageIcon className="text-purple-100 drop-shadow-md" size={32} strokeWidth={1.5} fill="#5c2d91" />}
                            {icon.type === 'folder' && <Folder className="text-yellow-400 drop-shadow-md" size={32} fill="#eaab00" />}
                            <span className="text-[11px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-1 rounded line-clamp-2 w-full text-center leading-tight shadow-sm font-medium">{icon.name}</span>
                        </div>
                    ))}

                    {/* Target Folder */}
                    <div className="absolute top-24 right-32 flex flex-col items-center gap-1 group w-24 p-2 rounded border border-transparent transition-all cursor-pointer z-[20]">
                        {phase === 2 && (
                            <motion.div
                                className="absolute inset-0 bg-blue-500/20 border-2 border-dashed border-blue-400 rounded-xl"
                                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        )}
                        <div className="relative">
                            <Folder size={64} className="text-blue-500 drop-shadow-2xl" fill="currentColor" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Zap size={24} className="text-white stroke-[3]" />
                            </div>
                        </div>
                        <span className="text-xs text-white text-center drop-shadow-md font-bold bg-blue-900/80 px-2 py-0.5 rounded shadow-sm border border-blue-500/30">
                            Domizan Gelen Kutusu
                        </span>
                    </div>

                    {/* WhatsApp Window */}
                    <motion.div
                        className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 w-[95%] md:w-[420px] h-[65%] md:h-[600px] bg-[#f0f2f5] rounded-lg shadow-black/50 shadow-2xl overflow-hidden flex flex-col font-sans border border-gray-400 z-[30]"
                    >
                        {/* Header */}
                        <div className="h-14 bg-[#00a884] flex items-center px-4 gap-3 text-white shadow-sm shrink-0">
                            {/* Profile Circle (CSS Only) */}
                            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-600 overflow-hidden">
                                KI
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold leading-tight">Kaya İnşaat A.Ş.</div>
                                <div className="text-[10px] opacity-90">çevrimiçi</div>
                            </div>
                            <MoreVertical size={20} />
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 bg-[#efeae2] p-4 relative flex flex-col">
                            {/* Pattern (CSS Grid) */}
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar z-10 relative">
                                <ChatMessage text="Pazartesi" isHeader={true} />
                                <ChatMessage text="Ahmet Bey, Şubat evraklarını bekliyoruz." time="09:15" sender="me" status="read" />
                                <ChatMessage text="Ay sonu sıkışıklık olmasın lütfen." time="09:16" sender="me" status="read" />
                                <ChatMessage text="Bugün" isHeader={true} />
                                <ChatMessage text="Ahmet Bey son gün bugün!" time="10:05" sender="me" status="read" />
                                <ChatMessage text="Sisteme girişi kapatacağız birazdan." time="10:06" sender="me" status="read" />

                                <AnimatePresence>
                                    {phase >= 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            className="bg-white p-1.5 rounded-lg self-start max-w-[90%] rounded-tl-none shadow border border-gray-200 mt-4 group cursor-pointer hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                        >
                                            <div className="relative h-10 w-8 bg-white border border-gray-300 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                                                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-bl-sm z-10"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <FileText size={16} className="text-red-500" />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0 pr-2">
                                                <div className="text-xs font-bold text-gray-800 truncate">Satis_Faturasi.pdf</div>
                                                <div className="text-[10px] text-gray-500">2 Sayfa • 1.4 MB • PDF</div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {phase >= 1 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="mt-2"
                                        >
                                            <ChatMessage text="Tamamdır üstadım, anca ofise geçtik, gönderiyorum kusura bakma." time="10:42" sender="them" status="read" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Drag Animation */}
                    <AnimatePresence>
                        {phase >= 2 && phase < 3 && (
                            <motion.div
                                key="drag-file"
                                className="absolute z-[100] pointer-events-none select-none"
                                initial={{ x: 120, y: 450, opacity: 0, scale: 0.5 }}
                                animate={[
                                    { opacity: 1, scale: 1, x: 120, y: 450 },
                                    { x: 1050, y: 100, scale: 0.8 },
                                    { x: 1050, y: 100, opacity: 0, scale: 0.2 }
                                ]}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, times: [0, 0.8, 1], ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-2 p-3 bg-white/90 backdrop-blur-md rounded shadow-2xl border border-red-500/50 w-56 rotate-6 cursor-grabbing shadow-red-500/20">
                                    <FileText size={24} className="text-red-500" />
                                    <div className="font-bold text-xs text-gray-800">Satis_Faturasi.pdf</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {phase >= 2 && phase < 3 && (
                            <motion.div
                                key="drag-cursor"
                                className="absolute z-[101] drop-shadow-xl pointer-events-none select-none"
                                animate={[
                                    { x: 200, y: 500 },
                                    { x: 150, y: 480 },
                                    { x: 1080, y: 130 },
                                    { x: 1080, y: 130, opacity: 0 }
                                ]}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            >
                                <MousePointer2 size={32} fill="black" className="text-white filter drop-shadow" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>


            {/* === PHASE 3-5: DOMIZAN APP (FULL SCREEN OVERLAY) === */}
            <AnimatePresence>
                {phase >= 3 && (
                    <motion.div
                        key="domizan-app"
                        className="fixed inset-0 z-[200] flex items-center justify-center p-8 bg-black/60 backdrop-blur-lg select-none"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full max-w-[1400px] h-[800px] bg-[#0f172a] rounded-xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col relative">
                            {/* Header */}
                            <div className="h-16 bg-[#1e293b] flex items-center justify-between px-8 border-b border-gray-700 shrink-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30"><Zap size={24} className="text-white" /></div>
                                    <span className="text-white font-bold text-2xl tracking-wide">Domizan AI Müşavir</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-4 h-4 rounded-full bg-red-500/20"></div>
                                    <div className="w-4 h-4 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-4 h-4 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>

                            <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
                                {/* Sidebar */}
                                <div className="hidden md:block w-80 bg-[#1e293b]/50 border-r border-gray-700 p-6 space-y-4">
                                    <div className={`p-4 rounded-lg text-lg font-bold flex items-center gap-4 border transition-colors ${phase >= 4 ? 'bg-green-600/20 text-green-400 border-green-500/30' : 'bg-transparent text-gray-400 border-transparent'}`}>
                                        <Folder size={24} />
                                        {phase >= 4 ? "Kaya İnşaat A.Ş." : "Mükellefler"}
                                    </div>
                                    <AnimatePresence>
                                        {phase >= 4 && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                className="pl-6 space-y-3 overflow-hidden"
                                            >
                                                <div className="p-3 text-base text-gray-300 flex items-center gap-3"><ChevronRight size={18} className="rotate-90" /> 2026</div>
                                                <div className="pl-6 p-3 text-base text-gray-300 flex items-center gap-3"><ChevronRight size={18} className="rotate-90" /> Şubat</div>
                                                <motion.div
                                                    initial={{ bg: "transparent" }}
                                                    animate={{ backgroundColor: "rgba(34,197,94,0.15)" }}
                                                    className="pl-12 p-3 text-base text-green-400 font-bold flex items-center gap-3 bg-green-500/10 rounded border border-green-500/20"
                                                >
                                                    <Folder size={18} fill="currentColor" /> <span>Faturalar</span>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-16 relative flex flex-col items-center justify-center bg-slate-900/95">

                                    {/* OCR Animation */}
                                    <AnimatePresence mode='wait'>
                                        {phase === 3 && (
                                            <motion.div
                                                key="ocr"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, x: 200, scale: 0.5, transition: { duration: 0.5 } }}
                                                className="w-full max-w-5xl"
                                            >
                                                <div className="flex justify-between items-end mb-8">
                                                    <h2 className="text-4xl font-bold text-white flex items-center gap-4">
                                                        <Zap className="text-blue-500" size={48} />
                                                        Yapay Zeka Okuması
                                                    </h2>
                                                    <div className="flex items-center gap-3 text-lg font-mono text-blue-400 bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20">
                                                        <Loader size={24} className="animate-spin" />
                                                        VERİLER AYRIŞTIRILIYOR...
                                                    </div>
                                                </div>

                                                <div className="bg-[#1e293b] rounded-2xl border border-gray-600 p-2 shadow-2xl relative overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px]">
                                                    <div className="w-full md:w-1/2 h-64 md:h-full bg-white p-4 md:p-8 opacity-100 relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center justify-center">
                                                        <motion.div
                                                            className="absolute top-0 left-0 w-full h-[10px] bg-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,1)] z-10"
                                                            animate={{ top: ["0%", "100%", "0%"] }}
                                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        />
                                                        <div className="w-full h-full border-4 border-gray-200 border-dashed rounded-xl flex flex-col items-center justify-center gap-6 bg-gray-50">
                                                            <FileText className="text-gray-400" size={60} />
                                                            <span className="text-gray-400 text-lg md:text-xl font-bold">BELGE TARANIYOR</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-full md:w-1/2 p-6 md:p-12 space-y-4 md:space-y-6 font-mono text-base flex flex-col justify-center bg-[#0f172a]">
                                                        <motion.div
                                                            initial={{ x: 50, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 1 }}
                                                            className="flex justify-between items-center p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors shadow-lg"
                                                        >
                                                            <span className="text-gray-400 text-lg">VKN</span>
                                                            <span className="text-white font-bold text-2xl">1234567890</span>
                                                            <Check className="text-green-500" size={32} />
                                                        </motion.div>
                                                        <motion.div
                                                            initial={{ x: 50, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 2.5 }}
                                                            className="flex justify-between items-center p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors shadow-lg"
                                                        >
                                                            <span className="text-gray-400 text-lg">Tarih</span>
                                                            <span className="text-white font-bold text-2xl">12.02.2026</span>
                                                            <Check className="text-green-500" size={32} />
                                                        </motion.div>
                                                        <motion.div
                                                            initial={{ x: 50, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 4 }}
                                                            className="flex justify-between items-center p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors shadow-lg"
                                                        >
                                                            <span className="text-gray-400 text-lg">Tutar</span>
                                                            <span className="text-green-400 font-bold text-3xl">45.000,00 ₺</span>
                                                            <Check className="text-green-500" size={32} />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Success State */}
                                        {phase >= 4 && (
                                            <motion.div
                                                key="success"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                className="text-center bg-[#1e293b]/90 backdrop-blur rounded-3xl p-6 md:p-12 border border-green-500/30 shadow-[0_0_150px_rgba(34,197,94,0.3)] z-[201] mx-4"
                                            >
                                                <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-tr from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 shadow-lg shadow-green-500/40 animate-pulse">
                                                    <CheckCheck size={40} className="text-white md:hidden" strokeWidth={3} />
                                                    <CheckCheck size={64} className="text-white hidden md:block" strokeWidth={3} />
                                                </div>
                                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Otomatik Arşivlendi</h3>
                                                <p className="text-gray-400 mb-6 md:mb-8 font-medium text-lg md:text-xl">Belge klasörüne taşındı ve sisteme işlendi.</p>

                                                <div className="inline-flex items-center gap-3 bg-black/40 px-6 py-3 rounded-xl text-lg text-green-300 border border-green-500/20 font-mono shadow-inner">
                                                    <Folder size={20} /> / 2026 / Şubat / Faturalar / 1234567890.pdf
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === TELEGRAM NOTIFICATION (Overlay) === */}
            <AnimatePresence>
                {phase >= 5 && (
                    <motion.div
                        key="telegram"
                        initial={{ y: -100, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        className="fixed top-12 right-12 z-[300] w-[450px] bg-[#17212b] rounded-2xl shadow-2xl border border-blue-500/20 overflow-hidden font-sans"
                    >
                        <div className="h-16 bg-[#242f3d] flex items-center px-6 gap-4 border-b border-gray-700">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <Zap size={22} className="text-white" fill="currentColor" />
                            </div>
                            <div className="flex-1">
                                <div className="text-white font-bold text-base">Domizan Asistan</div>
                                <div className="text-blue-400 text-xs">bot</div>
                            </div>
                            <span className="text-gray-500 text-xs text-nowrap">Şimdi</span>
                        </div>
                        <div className="p-6">
                            <div className="text-white text-lg mb-4 font-medium flex items-center gap-2">
                                🔔 <span className="text-green-400 font-bold">Yeni Belge İşlendi:</span> Kaya İnşaat
                            </div>

                            <div className="bg-[#0e1621] rounded-xl p-4 space-y-3 border border-gray-800 text-sm">
                                <div className="flex justify-between items-center text-gray-400 px-2 border-b border-gray-800 pb-3 mb-3">
                                    <span>Dönem</span>
                                    <span className="text-white font-mono text-base">Şubat 2026</span>
                                </div>
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-gray-400">Matrah</span>
                                    <span className="text-white font-mono text-base">37.500,00 ₺</span>
                                </div>
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-gray-400">KDV (%20)</span>
                                    <span className="text-white font-mono text-base">7.500,00 ₺</span>
                                </div>
                                <div className="flex justify-between items-center bg-green-500/10 p-3 rounded-lg border border-green-500/20 mt-3">
                                    <span className="text-green-400 font-bold text-base">TOPLAM</span>
                                    <span className="text-green-300 font-bold font-mono text-xl">45.000,00 ₺</span>
                                </div>
                            </div>

                            <div className="mt-6 flex gap-3">
                                <button className="flex-1 bg-[#2b5278] hover:bg-[#2b5278]/80 text-white py-3 rounded-lg text-sm font-bold transition-colors shadow-lg">Görüntüle</button>
                                <button className="flex-1 bg-[#242f3d] hover:bg-gray-700 text-white py-3 rounded-lg text-sm font-bold transition-colors shadow-lg">Excel Raporu</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === PHASE 6-7: FULL SCREEN TELEGRAM (RAG) === */}
            <AnimatePresence>
                {phase >= 6 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[300] flex items-center justify-center p-8 bg-black/60 backdrop-blur-md"
                    >
                        <div className="w-full max-w-[1200px] h-[90%] md:h-[750px] bg-[#17212b] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#0e1621]">
                            {/* Left Sidebar */}
                            <div className="w-full md:w-80 h-16 md:h-auto bg-[#17212b] border-r border-[#0e1621] flex md:flex-col items-center md:items-stretch overflow-x-auto md:overflow-visible shrink-0">
                                <div className="hidden md:flex h-14 items-center px-4 gap-4 border-b border-[#0e1621]">
                                    <div className="w-6 h-6 rounded bg-gray-600"></div>
                                    <div className="w-32 h-3 rounded bg-gray-700"></div>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    <div className="px-3 py-2 bg-[#2b5278] flex gap-3 items-center">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">DA</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-baseline">
                                                <span className="text-white font-bold truncate">Domizan Asistan</span>
                                                <span className="text-xs text-gray-400">09:05</span>
                                            </div>
                                            <div className="text-[#aebecd] text-sm truncate">
                                                {phase === 6 ? "Günaydın! Resmi Gazete..." : "Evet, bu tebliğ..."}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dummy chats */}
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="px-3 py-2 flex gap-3 items-center opacity-40">
                                            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                                            <div className="flex-1 space-y-2">
                                                <div className="w-20 h-3 bg-gray-700 rounded"></div>
                                                <div className="w-32 h-2 bg-gray-800 rounded"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Chat Area */}
                            <div className="flex-1 flex flex-col bg-[#0e1621] relative bg-[url('https://web.telegram.org/img/bg_0.png')]">
                                {/* Header */}
                                <div className="h-14 bg-[#17212b] flex items-center px-6 justify-between shrink-0 border-b border-[#0e1621]">
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold">Domizan Asistan</span>
                                        <span className="text-[#6c7883] text-sm">bot</span>
                                    </div>
                                    <Search className="text-[#6c7883]" size={20} />
                                </div>

                                {/* Messages */}
                                <div className="flex-1 p-8 space-y-6 overflow-y-auto custom-scrollbar">
                                    {/* Morning Briefing */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex gap-4 max-w-[80%]"
                                    >
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">DA</div>
                                        <div className="bg-[#182533] p-4 rounded-xl rounded-tl-none border border-[#0e1621] shadow-sm">
                                            <div className="text-[#64b5ef] font-bold text-sm mb-1">Domizan Asistan</div>
                                            <div className="text-white text-sm leading-relaxed">
                                                Günaydın Ahmet Bey! ☀️ <br />
                                                Bugün Resmi Gazete'de inşaat sektörünü ilgilendiren <span className="text-yellow-400 font-bold">7346 Sayılı KDV Genel Tebliği</span> yayınlandı.
                                                <div className="mt-3 p-3 bg-[#0e1621] rounded border-l-4 border-yellow-500 text-gray-300 text-xs">
                                                    "Demir-çelik ürünlerinin tesliminde KDV tevkifatı uygulamasına ilişkin alt sınır 5.000 TL'ye düşürülmüştür."
                                                </div>
                                                <div className="mt-2 text-gray-400 text-xs">Sizin için etkisi: Düşük, ancak tedarikçilerinizle görüşmenizde fayda var.</div>
                                            </div>
                                            <div className="text-[#6c7883] text-[10px] text-right mt-1">09:00</div>
                                        </div>
                                    </motion.div>

                                    {/* User Question (Phase 7) */}
                                    {phase >= 7 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 2 }}
                                            className="flex gap-4 max-w-[80%] self-end ml-auto flex-row-reverse"
                                        >
                                            <div className="bg-[#2b5278] p-3 rounded-xl rounded-tr-none text-white text-sm shadow-sm">
                                                Peki Şubat ayında tahmini ne kadar KDV ödeyeceğim?
                                                <div className="text-[#64b5ef] text-[10px] text-right mt-1 flex items-center justify-end gap-1">09:02 <CheckCheck size={12} /></div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Bot RAG Answer (Phase 7) */}
                                    {phase >= 7 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 5.5 }}
                                        >
                                            <motion.div
                                                className="flex gap-4 max-w-[80%]"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                            >
                                                <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">DA</div>
                                                <div className="bg-[#182533] p-4 rounded-xl rounded-tl-none border border-[#0e1621] shadow-sm">
                                                    <div className="text-[#64b5ef] font-bold text-sm mb-1">Domizan Asistan</div>
                                                    <div className="text-white text-sm leading-relaxed">
                                                        Sisteme yüklenen son faturalara göre Şubat ayı tahmini raporunuz:
                                                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                                                            <li>Satış KDV: <span className="text-white font-mono">145.000 TL</span></li>
                                                            <li>Alış KDV: <span className="text-white font-mono">100.000 TL</span></li>
                                                            <li><span className="text-yellow-400 font-bold">Ödenecek KDV:</span> <span className="text-yellow-400 font-bold font-mono">45.000 TL</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="text-[#6c7883] text-[10px] text-right mt-1">09:02</div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SimulationSlide;

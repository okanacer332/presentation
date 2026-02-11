import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, BellRing, FileText, ArrowRight } from 'lucide-react';

const TelegramDemoSlide = () => {
    const [messages, setMessages] = useState([]);

    // Chat Simulation Script
    useEffect(() => {
        const script = [
            { id: 1, type: 'system', text: '📅 12 Şubat 2026 - Günlük Brifing Hazır.', delay: 500 },
            { id: 2, type: 'bot', text: 'Günaydın! Dün gece ofis bilgisayarınızda **14 Mükellef** için toplam **342 Belge** işlendi ve muhasebeleştirildi. Hata yok. ✅', delay: 1500 },
            { id: 3, type: 'system', text: '🔔 RESMİ GAZETE UYARISI', delay: 4000 },
            { id: 4, type: 'bot', text: '⚠️ Dikkat: Az önce 7324 sayılı kanunla ilgili yeni bir tebliğ yayınlandı. KDV iadelerinde süreç değişti. Özeti notlarınıza ekledim.', delay: 5000 },
            { id: 5, type: 'user', text: 'Ahmet Yılmaz inşaatın KDV durumu ne?', delay: 8000 },
            { id: 6, type: 'bot', text: '🔍 **Ahmet Yılmaz İnşaat A.Ş.**\n\nBu ayki KDV Ödemesi: **45.250,00 TL**\nSon Ödeme: **Bugün**\n\nEkstra: 1 adet eksik banka dekontu var, kendisine hatırlatmamı ister misiniz?', delay: 10000 },
        ];

        let timeoutIds = [];
        script.forEach(({ type, text, delay }) => {
            const id = setTimeout(() => {
                setMessages(prev => [...prev, { type, text, timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) }]);
            }, delay);
            timeoutIds.push(id);
        });

        return () => timeoutIds.forEach(clearTimeout);
    }, []);

    return (
        <div className="slide-content h-full flex md:items-center items-start justify-center bg-white text-[#1D1D1F] md:overflow-hidden p-4 md:p-8 pt-24 pb-24 md:pt-8 md:pb-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-6xl">

                {/* Text Content */}
                <div className="order-2 md:order-1 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-center md:text-left">
                            Ofisiniz Cebinizde.<br />
                            <span className="text-blue-600">7/24 Canlı Asistan.</span>
                        </h2>
                        <ul className="space-y-4 md:space-y-6 text-sm md:text-lg text-gray-600">
                            <li className="flex items-start gap-3 md:gap-4 bg-gray-50 p-3 rounded-xl md:bg-transparent md:p-0">
                                <div className="bg-green-100 p-2 rounded-lg text-green-700 mt-1 shrink-0"><BellRing size={20} /></div>
                                <div>
                                    <strong className="text-gray-900 block">Resmi Gazete Takibi</strong>
                                    Sizi ilgilendiren bir tebliğ çıktığında anında özet bildirim.
                                </div>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 bg-gray-50 p-3 rounded-xl md:bg-transparent md:p-0">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-700 mt-1 shrink-0"><Bot size={20} /></div>
                                <div>
                                    <strong className="text-gray-900 block">Soru - Cevap</strong>
                                    "Ahmet Bey'in KDV'si ne kadar?" diye sorun, saniyesinde cevap alın.
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Phone Simulator */}
                <div className="order-1 md:order-2 flex justify-center perspective-1000 mb-8 md:mb-0">
                    <motion.div
                        initial={{ rotateY: -15, scale: 0.9, opacity: 0 }}
                        animate={{ rotateY: -5, scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-[240px] h-[500px] md:w-[380px] md:h-[750px] bg-gray-900 rounded-[30px] md:rounded-[50px] border-[8px] md:border-[14px] border-gray-900 shadow-2xl overflow-hidden relative mx-auto"
                    >
                        {/* Status Bar */}
                        <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-between px-6 items-center text-white text-[10px] font-bold">
                            <span>09:41</span>
                            <div className="flex gap-1">
                                <span>5G</span>
                                <span>100%</span>
                            </div>
                        </div>

                        {/* Telegram Header */}
                        <div className="bg-[#242f3d] text-white p-4 pt-12 flex items-center gap-3 shadow-md relative z-10">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold">D</div>
                            <div>
                                <div className="font-bold">Domizan Asistan</div>
                                <div className="text-blue-300 text-xs">bot • çevrimiçi</div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div
                            className="bg-[#0e1621] h-full overflow-y-auto p-4 space-y-4 pb-24 scroll-smooth"
                            ref={(el) => { if (el) el.scrollTop = el.scrollHeight; }} // Auto-scroll
                        >
                            <div className="text-center text-xs text-gray-500 my-4">Bugün</div>

                            <AnimatePresence>
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className={`flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        {msg.type === 'system' ? (
                                            <div className="bg-[#17212b] text-blue-300 text-xs py-1 px-3 rounded-full border border-blue-900/30 mx-auto mb-2 text-center max-w-[90%]">
                                                {msg.text}
                                            </div>
                                        ) : (
                                            <div
                                                className={`max-w-[85%] p-3 rounded-2xl text-sm relative shadow-sm ${msg.type === 'user'
                                                    ? 'bg-[#2b5278] text-white rounded-tr-none'
                                                    : 'bg-[#182533] text-white rounded-tl-none'
                                                    }`}
                                            >
                                                {/* Markdown-ish formatting for bold */}
                                                <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                                                <div className="text-[10px] text-gray-400 text-right mt-1 opacity-70 flex justify-end gap-1 items-center">
                                                    {msg.timestamp}
                                                    {msg.type === 'user' && <span>✓✓</span>}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Input Area (Fake) */}
                        <div className="absolute bottom-0 w-full bg-[#17212b] p-3 flex items-center gap-3 border-t border-gray-800">
                            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                            <div className="flex-1 bg-[#0e1621] h-9 rounded-full px-4 text-gray-500 text-sm flex items-center">Mesaj yaz...</div>
                            <div className="text-blue-500"><Send size={20} /></div>
                        </div>

                        {/* Home Bar */}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20"></div>

                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default TelegramDemoSlide;

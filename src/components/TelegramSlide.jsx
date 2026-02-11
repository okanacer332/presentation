import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

const TelegramSlide = () => {
    const [messages, setMessages] = useState([]);

    // Script for the animation
    const script = [
        { type: 'user', text: "Bugünkü durumu özetler misin?", delay: 1000 },
        { type: 'bot', text: "📊 **Günlük Özet - 11 Şubat 2026**\n\n✅ İşlenen belgeler: 47\n⚠️ Bekleyen onay: 2\n📈 Verimlilik: %96.8", delay: 2000 },
        { type: 'bot', text: "❗ **Dikkat:**\nABC Ltd. için 2 fatura onay bekliyor.", delay: 3500 },
        { type: 'user', text: "/onayla ABC Ltd", delay: 5000 },
        { type: 'bot', text: "✅ **Başarılı:**\nABC Ltd faturaları onaylandı ve arşivlendi.", delay: 6500 }
    ];

    useEffect(() => {
        let timeoutIds = [];
        let accumulatedDelay = 0;

        script.forEach((step, index) => {
            accumulatedDelay += step.delay;
            const id = setTimeout(() => {
                setMessages(prev => [...prev, step]);
            }, accumulatedDelay);
            timeoutIds.push(id);
        });

        return () => timeoutIds.forEach(clearTimeout);
    }, []);

    return (
        <div className="slide-content flex items-center justify-between gap-12">
            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6 text-blue-400">
                    Mobil Asistan & Bildirimler
                </h2>
                <div className="space-y-6 text-lg text-gray-300">
                    <p>
                        Ofis dışında olsanız bile işler durmaz. Domizan, <span className="text-white font-bold">Telegram</span> üzerinden sizinle konuşur.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <span className="bg-blue-500/20 p-2 rounded text-blue-400">📢</span>
                            <span>Günlük Özeti ceibinize gönderir.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="bg-green-500/20 p-2 rounded text-green-400">⚡</span>
                            <span>Acil onay gerektiren işlemleri anında bildirir.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="bg-purple-500/20 p-2 rounded text-purple-400">💬</span>
                            <span>Yapay zeka ile sohbet ederek rapor alabilirsiniz.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Phone Mockup */}
            <div className="w-[320px] h-[600px] bg-gray-900 border-8 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden relative">
                {/* Header */}
                <div className="bg-[#1c232d] p-4 flex items-center gap-3 shadow-md border-b border-gray-800">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">DA</div>
                    <div>
                        <div className="text-white font-bold text-sm">Domizan Asistan</div>
                        <div className="text-blue-400 text-xs">bot</div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="bg-[#0e1621] h-full p-4 overflow-y-auto pb-20 flex flex-col gap-3" style={{ backgroundImage: "url('https://telegram.org/file/464001925/11511/8p-yN7c_k5s.17411/14da70425a198086bd')" }}>
                    <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`max-w-[85%] rounded-lg p-3 text-sm whitespace-pre-line ${msg.type === 'user'
                                        ? 'bg-[#2b5278] text-white self-end rounded-br-none'
                                        : 'bg-[#182533] text-white self-start rounded-bl-none'
                                    }`}
                            >
                                {msg.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="absolute bottom-0 w-full bg-[#1c232d] p-3 flex gap-2">
                    <div className="flex-1 bg-[#0e1621] rounded-full px-4 py-2 text-gray-500 text-xs flex items-center">
                        Mesaj yaz...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <Send size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TelegramSlide;

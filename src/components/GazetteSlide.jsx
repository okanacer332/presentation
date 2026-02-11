import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, BellRing } from 'lucide-react';

const GazetteSlide = () => {
    const [messages, setMessages] = useState([]);

    // Script for the animation
    const script = [
        { type: 'bot', text: "📢 **Resmi Gazete Analizi (11.02.2026)**\n\nYeni yayınlanan tebliğde mali müşavirleri ilgilendiren önemli bir değişiklik tespit edildi.", delay: 1000 },
        { type: 'bot', text: "📄 **Konu:** KDV Genel Uygulama Tebliğinde Değişiklik\n\n📌 **Özet:**\nİnşaat işlerinde tevkifat oranı 3/10'dan 4/10'a yükseltildi.", delay: 3000 },
        { type: 'bot', text: "💡 **Aksiyon Önerisi:**\nİnşaat sektöründeki mükellefleriniz (Yılmaz İnşaat, Demir Yapı) için gelecek ay beyannamelerinde bu oranı dikkate almalısınız.", delay: 5000 }
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
            <div className="flex-1 order-2">
                <h2 className="text-4xl font-bold mb-6 text-red-400">
                    Proaktif Mevzuat Takibi
                </h2>
                <div className="space-y-6 text-lg text-gray-300">
                    <p>
                        Her sabah Resmi Gazete'yi sizin yerinize okuyan ve <span className="text-white font-bold">sadece sizi ilgilendiren</span> kısımları özetleyen bir asistan.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                            <Scroll className="text-red-400 mb-2" />
                            <h4 className="font-bold">Otomatik Tarama</h4>
                            <p className="text-xs text-gray-500">Milyonlarca satır metin saniyeler içinde taranır.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                            <BellRing className="text-yellow-400 mb-2" />
                            <h4 className="font-bold">Kişiye Özel Uyarı</h4>
                            <p className="text-xs text-gray-500">Sadece portföyünüzdeki sektörlerle ilgili uyarılırsınız.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phone Mockup (Left Side) */}
            <div className="w-[320px] h-[600px] bg-gray-900 border-8 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden relative order-1">
                {/* Header */}
                <div className="bg-[#1c232d] p-4 flex items-center gap-3 shadow-md border-b border-gray-800">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">RG</div>
                    <div>
                        <div className="text-white font-bold text-sm">Resmi Gazete Botu</div>
                        <div className="text-red-400 text-xs">bot</div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="bg-[#0e1621] h-full p-4 overflow-y-auto pb-20 flex flex-col gap-3">
                    <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="bg-[#182533] text-white self-start rounded-lg rounded-bl-none p-3 text-sm whitespace-pre-line border-l-4 border-red-500"
                            >
                                {msg.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default GazetteSlide;

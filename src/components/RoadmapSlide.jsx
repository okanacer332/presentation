import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Network, ShieldCheck } from 'lucide-react';

const RoadmapSlide = () => {
    const roadmap = [
        { phase: "Faz 1", title: "Backend & AI Core", status: "completed", desc: "Güçlü altyapı ve temel OCR/AI entegrasyonu tamamlandı." },
        { phase: "Faz 2", title: "Desktop Beta", status: "completed", desc: "Ofis içi dosya otomasyonu ve kullanıcı arayüzü hazır." },
        { phase: "Faz 3", title: "Mobil Asistan", status: "in-progress", desc: "Telegram bot ve mobil bildirim entegrasyonu." },
        { phase: "Faz 4", title: "Federatif Öğrenme", status: "planned", desc: "Müşterilerden öğrenen kolektif zeka ağının aktifleşmesi." },
        { phase: "Faz 5", title: "Ekosistem", status: "planned", desc: "Luca, Zirve gibi programlarla doğrudan entegrasyon." }
    ];

    return (
        <div className="slide-content">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Yol Haritası ve Teknoloji
            </h2>

            <div className="grid grid-cols-2 gap-12">
                {/* Roadmap */}
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Network className="text-blue-400" /> Gelişim Süreci
                    </h3>
                    <div className="space-y-6 relative border-l-2 border-gray-700 ml-4 pl-8">
                        {roadmap.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] bg-gray-900 p-1 rounded-full border border-gray-700">
                                    {item.status === 'completed' ? <CheckCircle2 className="text-green-500 w-4 h-4" /> :
                                        item.status === 'in-progress' ? <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" /> :
                                            <Circle className="text-gray-500 w-4 h-4" />}
                                </span>
                                <div className="text-xs font-mono text-gray-500 mb-1">{item.phase}</div>
                                <h4 className={`font-bold ${item.status === 'in-progress' ? 'text-blue-400' : 'text-white'}`}>
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Highlights */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gray-800 p-6 rounded-2xl border border-gray-700"
                    >
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <ShieldCheck className="text-green-400" /> Federatif Öğrenme
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Müşteri verileri cihazdan çıkmaz. Sadece "öğrenilen desenler" anonim olarak buluta gönderilir.
                        </p>
                        <img src="/network.png" alt="Federated Learning" className="rounded-lg w-full h-32 object-cover opacity-80" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="bg-blue-600 p-6 rounded-2xl shadow-lg hover:bg-blue-700 transition cursor-pointer text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Bize Katılın</h3>
                        <p className="text-blue-100">Geleceğin muhasebe ofislerini birlikte inşa edelim.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapSlide;

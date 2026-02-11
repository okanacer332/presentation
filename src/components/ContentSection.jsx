import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Server, Shield, Cpu, Workflow, MessageCircle,
    Database, Lock, Layers, Zap, GitBranch,
    Terminal, Fingerprint, Eye, FileText, CheckCircle2, ArrowRight
} from 'lucide-react';

const ContentSection = () => {
    const [activeSection, setActiveSection] = useState('architecture');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // idle, success

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        // Auto close after 3 seconds
        setTimeout(() => {
            setIsModalOpen(false);
            setFormStatus('idle'); // Reset for next time
        }, 3000);
    };

    // Scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['architecture', 'ai', 'security', 'workflow', 'telegram'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const sections = [
        {
            id: 'architecture',
            title: 'Teknolojik Altyapı',
            icon: <Server className="w-5 h-5" />,
            content: (
                <div className="space-y-12">
                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        Karşınızda <span className="text-blue-600 font-bold">Türkiye'nin İlk Hibrit Yapay Zeka Mimarisi.</span>
                        <br />
                        Sektördeki standart yazılımları unutun. Domizan, teknolojinin en uç noktasında,
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-bold"> "Rakipsiz"</span> bir altyapı sunar.
                    </p>

                    {/* Animated Tech Stack Showcase */}
                    <div className="relative bg-slate-900 rounded-3xl p-8 overflow-hidden shadow-2xl border border-slate-700">
                        {/* Background Glow Effects */}
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-75"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center gap-4 text-white"
                                >
                                    <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                                        <Cpu className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Nöral İşlem Merkezi</h4>
                                        <p className="text-slate-400 text-xs">Milisaniyeler içinde karar veren merkezi zeka.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-4 text-white"
                                >
                                    <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                                        <Database className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Vektörel Hafıza (ChromaDB)</h4>
                                        <p className="text-slate-400 text-xs">Asla unutmayan, sürekli öğrenen fotografik bellek.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center gap-4 text-white"
                                >
                                    <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                                        <Zap className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Hyper-Scalable Microservices</h4>
                                        <p className="text-slate-400 text-xs">Siz büyüdükçe güçlenen esnek yapı.</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center Visual - Abstract Representation */}
                            <div className="hidden md:flex justify-center items-center relative h-64">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-48 h-48 border border-slate-700 rounded-full border-dashed"
                                ></motion.div>
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-36 h-36 border border-blue-500/30 rounded-full"
                                ></motion.div>
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center"
                                >
                                    <Server className="text-white w-10 h-10" />
                                </motion.div>

                                {/* Orbiting Particles */}
                                <motion.div
                                    className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                                    animate={{
                                        x: [0, 80, 0, -80, 0],
                                        y: [-80, 0, 80, 0, -80]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"
                                    animate={{
                                        x: [0, -60, 0, 60, 0],
                                        y: [60, 0, -60, 0, 60]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                                />
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap gap-4 justify-center">
                            {['Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'MongoDB', 'Python', 'Node.js', 'React', 'Electron'].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-slate-400 text-xs font-mono hover:text-white hover:bg-slate-700 transition cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai',
            title: 'Yapay Zeka ve Öğrenme',
            icon: <Cpu className="w-5 h-5" />,
            content: (
                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">
                                Sıradan Bir Yazılım Değil, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    "Dikey Öğrenen" Bir Zeka.
                                </span>
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Domizan, yatayda her şeyi az bilen genel yapay zekaların aksine,
                                <strong>Mali Müşavirlik dikeyinde uzmanlaşmış</strong> bir asistandır.
                                Binlerce fatura, makbuz ve beyanname ile eğitildi. Sizin dilinizden anlar.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img src="/domizan-new/domizan.png" alt="AI Brain" className="w-48 opacity-90 drop-shadow-2xl animate-pulse" />
                        </div>
                    </div>

                    {/* Vertical Learning Showcase */}
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 group-hover:bg-blue-100 transition-colors"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-100">
                            <div className="p-6 text-center space-y-4">
                                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                    <Database size={32} />
                                </div>
                                <h4 className="font-bold text-gray-900">Ham Veri Değil, Bilgi</h4>
                                <p className="text-sm text-gray-500">
                                    Piksel okumaz, bağlam kurar. Bir faturanın sadece tutarını değil, <strong className="text-blue-600">muhasebeleşme mantığını</strong> çözer.
                                </p>
                            </div>

                            <div className="p-6 text-center space-y-4">
                                <div className="mx-auto w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                                    <GitBranch size={32} />
                                </div>
                                <h4 className="font-bold text-gray-900">Asistanlaşma Evrimi</h4>
                                <p className="text-sm text-gray-500">
                                    İlk gün "Bu nedir?" diye sorar. İkinci gün "Bunu böyle yapıyorum" der. Üçüncü gün sessizce halleder.
                                </p>
                            </div>

                            <div className="p-6 text-center space-y-4">
                                <div className="mx-auto w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                    <Zap size={32} />
                                </div>
                                <h4 className="font-bold text-gray-900">Sektörel Uzmanlık</h4>
                                <p className="text-sm text-gray-500">
                                    KDV, Tevkifat, ÖTV... Genel amaçlı modellerin tökezlediği yerde, Domizan <strong className="text-green-600">mevzuata hakim</strong> bir uzman gibi çalışır.
                                </p>
                            </div>
                        </div>

                        {/* Learning Loop Visual */}
                        <div className="mt-8 bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                <span>Hata Tespiti</span>
                            </div>
                            <ArrowRight size={14} className="text-gray-300" />
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-75"></span>
                                <span>Kullanıcı Müdahalesi</span>
                            </div>
                            <ArrowRight size={14} className="text-gray-300" />
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></span>
                                <span>Kalıcı Öğrenme (Vector DB)</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'security',
            title: 'Güvenlik ve Gizlilik',
            icon: <Shield className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Gizlilik Garantisi:</strong> Belgeleriniz ve bilgileriniz <strong>sadece sizin bilgisayarınızda</strong> saklanır.
                        Domizan, belgelerinizin içeriğiyle <strong>ilgilenmez</strong>, sadece işler ve size sunar. Verileriniz ofisinizden dışarı çıkmaz.
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <Lock className="w-5 h-5 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">AES-256 Şifreleme</h4>
                                <p className="text-xs text-gray-500 mt-1">Tüm hassas veriler ve API anahtarları veritabanında şifreli saklanır.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <Fingerprint className="w-5 h-5 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Cihaz Parmak İzi</h4>
                                <p className="text-xs text-gray-500 mt-1">Lisansınız sadece yetkilendirilmiş ofis cihazlarında çalışır.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <Shield className="w-5 h-5 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">TLS 1.3</h4>
                                <p className="text-xs text-gray-500 mt-1">Veri transferi sırasında en güncel güvenli iletişim protokolü kullanılır.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <Users className="w-5 h-5 text-red-500 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Yerel Depolama</h4>
                                <p className="text-xs text-gray-500 mt-1">Belgeler buluta değil, kendi yerel sunucunuza veya bilgisayarınıza kaydedilir.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: 'workflow',
            title: 'Otomatik İş Akışı',
            icon: <Workflow className="w-5 h-5" />,
            content: (
                <div className="space-y-6">
                    <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 py-2">
                        <div className="relative pl-8">
                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></span>
                            <h4 className="font-bold text-gray-900">1. Otomatik Algılama (Folder Watch)</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Masaüstü uygulaması belirlenen klasörleri dinler. Yeni bir tarama veya PDF düştüğü anda işlem başlar.
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-2 border-white"></span>
                            <h4 className="font-bold text-gray-900">2. Akıllı Sınıflandırma</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Belge Fatura mı? Makbuz mu? Hangi mükellefe ait? Tutarı ne? Saniyeler içinde analiz edilir.
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                            <h4 className="font-bold text-gray-900">3. Dosyalama ve İsimlendirme</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                <code className="bg-gray-100 px-1 py-0.5 rounded text-xs text-gray-700">Mükellef/Yıl/Ay/FaturaTipi</code>
                                formatında otomatik klasör oluşturulur ve dosya yeniden isimlendirilir.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'telegram',
            title: 'Telegram Asistanı',
            icon: <MessageCircle className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                    <p className="text-lg text-gray-700">
                        Domizan sadece masaüstünde değil, cebinizde de yanınızdadır.
                        <strong>RAG (Retrieval-Augmented Generation)</strong> teknolojisi ile belgelerinizle sohbet edin.
                    </p>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto">
                        <div className="bg-[#5ea4d1] p-3 text-white font-bold flex items-center gap-2">
                            <MessageCircle size={20} /> DomizanBot
                        </div>
                        <div className="p-4 bg-[#e4ebf0] space-y-3 h-64 overflow-y-auto">
                            <div className="bg-white p-2 rounded-lg rounded-tl-none self-start max-w-[85%] text-sm shadow-sm">
                                👨‍💼 Ahmet Bey'in geçen ayki KDV tahakkuku ne kadardı?
                            </div>
                            <div className="bg-[#efffde] p-2 rounded-lg rounded-tr-none self-end max-w-[90%] ml-auto text-sm shadow-sm">
                                🤖 Ahmet Yılmaz İnşaat A.Ş. için Ocak 2026 KDV Tahakkuku:
                                <br /><strong>Ödenecek KDV:</strong> 12.450,00 TL
                                <br />📄 <span className="text-blue-600 underline cursor-pointer">Belgeyi Görüntüle</span>
                            </div>
                        </div>
                        <div className="p-3 bg-white border-t text-xs text-gray-400 text-center">
                            Dinamik Hatırlatıcılar & Raporlar
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="w-full bg-white py-12 md:py-24 px-4 md:px-8 lg:px-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-50 text-blue-600 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm mb-4"
                    >
                        TEKNİK DETAYLAR
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Geleceğin Muhasebe Teknolojisi
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        Domizan, basit bir otomasyon aracı değil; mali müşavirlik mesleğini geleceğe taşıyan, <strong>güvenli</strong>, <strong>hızlı</strong> ve <strong>akıllı</strong> bir yapay zeka asistanıdır.
                    </p>
                </div>

                {/* Mobile Navigation (Premium Sticky Header) */}
                <div className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 mb-8 -mx-4 px-4 py-3 shadow-sm transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <img src="/domizan-new/domizan.png" alt="Domizan" className="h-6 object-contain" />
                            <span className="font-bold text-gray-900 text-sm tracking-tight">AI Müşavir</span>
                        </div>
                        <button className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                            Hemen Başla
                        </button>
                    </div>

                    {/* Compact Chip Navigation */}
                    <div className="overflow-x-auto flex gap-2 no-scrollbar pb-1 px-1">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all text-xs font-bold border ${activeSection === section.id
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200 scale-105'
                                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                                    }`}
                            >
                                <span>
                                    {React.cloneElement(section.icon, { className: "w-3.5 h-3.5" })}
                                </span>
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sticky Sidebar Navigation (Desktop) */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-12 space-y-2">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${activeSection === section.id
                                        ? 'bg-gray-900 text-white shadow-lg shadow-gray-200 scale-105'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <span className={activeSection === section.id ? 'text-blue-400' : 'text-gray-400'}>
                                        {section.icon}
                                    </span>
                                    <span className="font-medium text-sm">{section.title}</span>
                                </button>
                            ))}

                            <div className="pt-8 mt-8 border-t border-gray-100">
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
                                    <h4 className="font-bold mb-2">Erken Erişim</h4>
                                    <p className="text-blue-100 text-xs mb-4">Domizan'ı ilk deneyimleyen ofislerden biri olun.</p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full py-2 bg-white text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors"
                                    >
                                        Başvuru Yap
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-9 space-y-20 md:space-y-32">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.7 }}
                                className="scroll-mt-32"
                            >
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="p-3 bg-gray-100 rounded-2xl text-gray-900">
                                        {React.cloneElement(section.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{section.title}</h3>
                                </div>

                                {section.content}

                                {index !== sections.length - 1 && (
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-20 md:mt-32"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div className="mt-20 md:mt-32 border-t border-gray-200 py-12 bg-gray-50 flex items-center justify-center gap-2 text-center">
                <span className="text-gray-500 text-sm font-medium">Domizan, bir</span>
                <a href="https://acrtech.com.tr" target="_blank" rel="noopener noreferrer" className="inline-block opacity-80 hover:opacity-100 transition-opacity align-middle">
                    <img src="/domizan-new/acrtech.png" alt="ACRTECH" className="h-6 mb-1 object-contain" />
                </a>
                <span className="text-gray-500 text-sm font-medium">ürünüdür.</span>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            {formStatus === 'idle' && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                            <Zap size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Erken Erişim Başvurusu</h3>
                                        <p className="text-gray-500 text-sm mt-2">Domizan'ı ilk deneyimleyen ofislerden biri olmak için bilgilerinizi bırakın.</p>
                                    </div>

                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Ad Soyad</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                                                placeholder="Örn: Ahmet Yılmaz"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">E-Posta</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                                                placeholder="ornek@ofis.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Telefon</label>
                                            <input
                                                required
                                                type="tel"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                                                placeholder="05XX XXX XX XX"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-[#1D1D1F] text-white font-bold py-4 rounded-xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg text-lg mt-2"
                                        >
                                            Başvuru Gönder
                                        </button>
                                    </form>
                                </div>
                            )}

                            {formStatus === 'success' && (
                                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        type="spring"
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2"
                                    >
                                        <CheckCircle2 size={40} />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900">Başvurunuz Alındı!</h3>
                                    <p className="text-gray-500 max-w-xs">
                                        İlginiz için teşekkürler. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
                                    </p>
                                    <div className="w-full bg-gray-100 rounded-full h-1 mt-6 overflow-hidden">
                                        <motion.div
                                            initial={{ width: "100%" }}
                                            animate={{ width: "0%" }}
                                            transition={{ duration: 3, ease: "linear" }}
                                            className="h-full bg-green-500"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">Pencere otomatik kapanıyor...</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Simple User Icon component since it wasn't imported in the original list but used in Security
const Users = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={className}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

export default ContentSection;

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BRAND_NAME } from '@/lib/brand';
import { BrandBackdrop } from './BrandBackdrop';
import { NavLogo, HeroLogoMarkGlow, FooterBrandBlock, CtaBrandAccent } from './BrandLogo';
import { PageHero } from './PageHero';
import { BookDemoButton } from './BookDemoButton';

/**
 * ============================================================================
 * NEONEX MINDX - ENTERPRISE GRADE EDUTECH PLATFORM
 * "Learn Today, Lead Tomorrow"
 * ============================================================================
 * 
 * DESIGN PRINCIPLES:
 * 1. Authority: High-contrast headings, spacious layouts.
 * 2. Innovation: Mesh gradients, glassmorphism, dynamic accents.
 * 3. Trust: Professional alumni portraits, real company logos.
 * 4. SEO: Robust semantic hierarchy and JSON-LD structured data.
 */

const Replica = () => {
    const [activeTab, setActiveTab] = useState<'home' | 'courses' | 'pricing' | 'success'>('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (tab: typeof activeTab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // SEO Structured Data for the Institute
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": BRAND_NAME,
        "description": "India's premier Data Science, AI/ML, and Business Analytics training institute.",
        "url": "https://neonexminds.com",
        "logo": "https://neonexminds.com/images/main-logo.png",
        "slogan": "Learn Today, Lead Tomorrow",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "India",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "8088104708",
            "contactType": "admissions",
            "email": "neonexminds@gmail.com"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-blue-600/10 selection:text-blue-700">
                
                {/* ================= HEADER / NAVIGATION ================= */}
                <header 
                    className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                        scrolled ? 'bg-white/80 border-b border-slate-200 shadow-sm backdrop-blur-xl py-3' : 'bg-transparent py-5'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                        <div className="cursor-pointer" onClick={() => handleNav('home')}>
                            <NavLogo />
                        </div>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center gap-10">
                            {[
                                { id: 'home', label: 'Home' },
                                { id: 'courses', label: 'Programs' },
                                { id: 'pricing', label: 'Fees & Offers' },
                                { id: 'success', label: 'Alumni' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNav(item.id as any)}
                                    className={`text-sm font-bold tracking-tight uppercase transition-colors hover:text-blue-600 ${
                                        activeTab === item.id ? 'text-blue-600 ring-b-2 ring-blue-600' : 'text-slate-600'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        <div className="flex items-center gap-6">
                            <span className="hidden lg:block text-sm font-black text-slate-800 tracking-tighter">8088104708</span>
                            <BookDemoButton trigger={
                                <button className="px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.15em] rounded-full shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
                                    Enquire Now
                                </button>
                            } />
                        </div>
                    </div>
                </header>

                <main>
                    {/* ================= PAGE : HOME ================= */}
                    {activeTab === 'home' && (
                        <div id="page-home" className="animate-in fade-in duration-700">
                            
                            {/* HERO SECTION - ENTERPRISE GRADE */}
                            <section className="relative min-h-[92vh] flex items-center overflow-hidden">
                                <BrandBackdrop />
                                
                                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24 pb-20">
                                    
                                    <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                                        {/* Premium Tagline Badge */}
                                        <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm animate-bounce-subtle">
                                            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                                            <span className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-blue-200">
                                                Learn Today, Lead Tomorrow
                                            </span>
                                        </div>

                                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
                                            India&apos;s Elite 
                                            <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent italic">
                                                Data &amp; AI Academy
                                            </span>
                                        </h1>

                                        <p className="text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-xl mb-12">
                                            Mastering Data Science, Machine Learning, and Analytics through high-authority mentorship and real-business-use-case projects.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                                            <button 
                                                onClick={() => handleNav('courses')}
                                                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-blue-600/40 hover:bg-blue-500 transition-all active:scale-95"
                                            >
                                                Explore Programs
                                            </button>
                                            <BookDemoButton trigger={
                                                <button className="px-8 py-4 bg-white/5 text-white border border-white/20 backdrop-blur-md rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                                                    Book a Demo
                                                </button>
                                            } />
                                        </div>
                                        
                                        {/* Hero Social Proof */}
                                        <div className="mt-12 flex items-center gap-6 opacity-60">
                                            <div className="h-px w-12 bg-white/20" />
                                            <p className="text-[0.6rem] font-bold text-white uppercase tracking-[0.3em]">Trusted by 1000+ Alumni</p>
                                        </div>
                                    </div>

                                    <div className="order-1 lg:order-2 flex justify-center items-center">
                                        <HeroLogoMarkGlow />
                                    </div>
                                </div>
                                
                                {/* Bottom Wave / Deco */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
                            </section>

                            {/* VALUE PROPS - ENTERPRISE GRID */}
                            <section className="bg-slate-50 py-24 lg:py-32">
                                <div className="max-w-7xl mx-auto px-6">
                                    <div className="text-center mb-20">
                                        <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Why Choose Us</h2>
                                        <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Enterprise-Grade Training</p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        {[
                                            { t: "Hands-on Learning", d: "Live classes, assignments, and real datasets to ensure deep technical competence.", icon: "🔬" },
                                            { t: "Latest Curriculum", d: "Content precisely aligned with current industry needs and evolving AI trends.", icon: "📚" },
                                            { t: "100% Job Assistance", d: "Dedicated PAT team for placement preparation, referrals, and career coaching.", icon: "💼" },
                                            { t: "Real-Time Projects", d: "Capstone projects based on actual business use cases provided by our partners.", icon: "🏗️" },
                                            { t: "Industry Mentors", d: "Learn directly from working professionals from MAANG and Tier-1 startups.", icon: "👨‍🏫" },
                                            { t: "Internship Experience", d: "3–6 month guaranteed internship with certification to bridge the experience gap.", icon: "🏅" }
                                        ].map((p, i) => (
                                            <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
                                                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{p.icon}</div>
                                                <h3 className="text-xl font-black text-slate-900 mb-4">{p.t}</h3>
                                                <p className="text-slate-500 leading-relaxed text-sm">{p.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* CORE CTA */}
                            <section className="bg-slate-900 py-32 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px]" />
                                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                                    <CtaBrandAccent className="mb-12" />
                                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Transition to AI?</h2>
                                    <p className="text-lg text-slate-400 mb-12">Your career transformation starts with a single high-impact decision. Join the NeoNex community today.</p>
                                    <BookDemoButton trigger={
                                        <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                            Talk to an Expert
                                        </button>
                                    } />
                                </div>
                            </section>
                        </div>
                    )}

                    {/* ================= PAGE : COURSES ================= */}
                    {activeTab === 'courses' && (
                        <div id="page-courses" className="animate-in fade-in duration-500">
                            <PageHero 
                                eyebrow="Elite Learning"
                                title="Industry-Mastery Programs"
                                description="Deep-dive into specialized domains designed for the next generation of data leaders."
                            />

                            <section className="bg-white py-24">
                                <div className="max-w-7xl mx-auto px-6">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {[
                                            { t: "Data Analytics", h: "Master Excel, SQL, Tableau & Power BI", d: "Perfect for beginners starting their journey in data visualization.", p: "₹19,999", img: "https://images.unsplash.com/photo-1551288049-bbbda5366fd9?q=80&w=2670&auto=format&fit=crop" },
                                            { t: "Data Science", h: "Python, Stats & Machine Learning", d: "Comprehensive end-to-end data science track with Python focus.", p: "₹24,999", img: "https://images.unsplash.com/photo-1518186239124-77a834cc7062?q=80&w=2670&auto=format&fit=crop", best: true },
                                            { t: "AI / ML Engineering", h: "Deep Learning, NLP & LLMs", d: "Advanced specialization in cutting-edge AI and LLM architectures.", p: "₹29,999", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop" },
                                            { t: "Data Engineering", h: "AWS, Azure, Spark & Databases", d: "Learn to build high-scale data pipelines and cloud infrastructure.", p: "₹24,999", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2670&auto=format&fit=crop" },
                                            { t: "Business Analytics", h: "Strategy, Forecasting & SQL", d: "Bridge the gap between data insights and high-level business strategy.", p: "₹19,999", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" }
                                        ].map((c, i) => (
                                            <div key={i} className={`relative group bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm transition-all hover:shadow-2xl ${c.best ? 'ring-2 ring-blue-600' : ''}`}>
                                                {c.best && (
                                                    <div className="absolute top-6 right-6 z-10 bg-blue-600 text-[0.55rem] font-black text-white px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                                        Most Popular
                                                    </div>
                                                )}
                                                <div className="h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                                    <Image src={c.img} alt={c.t} width={500} height={300} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                </div>
                                                <div className="p-8">
                                                    <h3 className="text-2xl font-black text-slate-900 mb-2">{c.t}</h3>
                                                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">{c.h}</p>
                                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{c.d}</p>
                                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                                        <div className="font-black text-xl text-slate-900">{c.p}</div>
                                                        <BookDemoButton trigger={
                                                            <button className="text-xs font-black uppercase text-blue-600 tracking-widest hover:underline hover:translate-x-1 transition-all">View Details →</button>
                                                        } />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* ================= PAGE : PRICING ================= */}
                    {activeTab === 'pricing' && (
                        <div id="page-pricing" className="animate-in fade-in duration-500">
                            <PageHero 
                                eyebrow="Investment"
                                title="Flexible Learning and Pricing"
                                description="Transparent pricing models designed to bring world-class education to every ambitious professional."
                            />

                            <section className="bg-slate-50 py-24">
                                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        { t: "Standard Pricing", h: "₹19,999 - ₹29,999", d: "Full course access, live mentorship, and lifetime materials." },
                                        { t: "Corporate Training", h: "Custom Quote", d: "Designed for engineering teams. Private batches and custom curriculum." },
                                        { t: "Master Class", h: "₹49,999", d: "Direct 1:1 mentorship from the founder. Highly limited slots." }
                                    ].map((plan, i) => (
                                        <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm text-center">
                                            <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{plan.t}</h3>
                                            <div className="text-4xl font-black mb-6">{plan.h}</div>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-10">{plan.d}</p>
                                            <BookDemoButton trigger={
                                                <button className="w-full py-4 rounded-2xl border-2 border-slate-900 font-black uppercase tracking-widest transition-all hover:bg-slate-900 hover:text-white">
                                                    Get Quote
                                                </button>
                                            } />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}

                    {/* ================= PAGE : SUCCESS ================= */}
                    {activeTab === 'success' && (
                        <div id="page-success" className="animate-in fade-in duration-500">
                            <PageHero 
                                eyebrow="Alumni Impact"
                                title="Real Stories, Elite Careers"
                                description="Join the ranks of professionals who have secured roles at MAANG and global tech leaders."
                            />

                            <section className="bg-white py-24">
                                <div className="max-w-7xl mx-auto px-6">
                                    <div className="grid md:grid-cols-3 gap-10">
                                        {[
                                            { 
                                                name: "Ananya Reddy", 
                                                role: "Data Analyst", 
                                                company: "Accenture", 
                                                image: "https://images.unsplash.com/photo-1623184122025-203b26373d09?q=80&w=2681&auto=format&fit=crop",
                                                quote: "NeoNex MindX transformed my career completely. Coming from a non-technical background, the structured mentorship was life-changing."
                                            },
                                            { 
                                                name: "Vikram Singh", 
                                                role: "ML Engineer", 
                                                company: "Swiggy", 
                                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
                                                quote: "The deep-technical accuracy of the AI/ML program is unmatched. I felt fully prepared for my interviews at top-tier startups."
                                            },
                                            { 
                                                name: "Meera Krishnan", 
                                                role: "Data Engineer", 
                                                company: "Zomato", 
                                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop",
                                                quote: "Switching from testing to engineering was high-risk, but NeoNex provided the roadmap and support I needed to succeed."
                                            }
                                        ].map((t, i) => (
                                            <div key={i} className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="h-16 w-16 rounded-2xl overflow-hidden grayscale">
                                                        <Image src={t.image} alt={t.name} width={64} height={64} className="h-full w-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-slate-900">{t.name}</h4>
                                                        <p className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">{t.role} @ {t.company}</p>
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed italic">&quot;{t.quote}&quot;</p>
                                                <div className="mt-6 flex gap-1 text-yellow-400">★★★★★</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="bg-slate-900 py-32 text-center text-white relative">
                                <div className="max-w-3xl mx-auto px-6 relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Be Our Next Elite Alumni Success Story</h2>
                                    <p className="text-slate-400 mb-12 max-w-xl mx-auto">Join the ranks of India&apos;s leading technical professionals and change the trajectory of your professional life.</p>
                                    <BookDemoButton trigger={
                                        <button className="px-12 py-5 bg-blue-600 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all">
                                            Apply Now
                                        </button>
                                    } />
                                </div>
                            </section>
                        </div>
                    )}
                </main>

                {/* ================= FOOTER ================= */}
                <footer className="bg-slate-950 text-slate-400 py-24">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                        <div className="min-w-0 col-span-1 lg:col-span-2">
                            <FooterBrandBlock className="mb-8" />
                            <p className="max-w-sm text-sm leading-relaxed font-medium">
                                India&apos;s premier training institute for Data Science, AI/ML, and Analytics. We build high-caliber professionals for the global economy.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-6">Institute</h4>
                            <ul className="space-y-4 text-sm font-bold">
                                <li onClick={() => handleNav('home')} className="hover:text-white cursor-pointer transition-colors">Academy Home</li>
                                <li onClick={() => handleNav('courses')} className="hover:text-white cursor-pointer transition-colors">Programs</li>
                                <li onClick={() => handleNav('pricing')} className="hover:text-white cursor-pointer transition-colors">Fees & Pricing</li>
                                <li onClick={() => handleNav('success')} className="hover:text-white cursor-pointer transition-colors">Alumni Network</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-6">Contact</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li>📞 8088104708</li>
                                <li>✉ neonexminds@gmail.com</li>
                                <li>📍 Remote Training (India)</li>
                                <li>⏰ Mon–Sat: 9AM – 8PM</li>
                            </ul>
                        </div>
                    </div>
                </footer>

                {/* ================= MOBILE BOTTOM NAV ================= */}
                <nav className="md:hidden fixed bottom-6 left-6 right-6 z-[100] bg-white/80 border border-slate-200 shadow-2xl backdrop-blur-2xl rounded-3xl p-3 flex justify-around">
                     {[
                        { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                        { id: 'courses', label: 'Programs', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                        { id: 'pricing', label: 'Fees', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                        { id: 'success', label: 'Impact', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
                    ].map((item) => (
                        <button key={item.id} onClick={() => handleNav(item.id as any)} className={`flex flex-col items-center gap-1 transition-all ${activeTab === item.id ? 'text-blue-600 scale-110' : 'text-slate-400 hover:text-slate-600'}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={item.icon} /></svg>
                            <span className="text-[0.55rem] font-black uppercase tracking-widest">{item.label}</span>
                        </button>
                    ))}
                </nav>

            </div>
        </>
    );
};

export default Replica;

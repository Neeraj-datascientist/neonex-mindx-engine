"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BrandBackdrop } from "@/components/BrandBackdrop";
import BookDemoButton from "@/components/BookDemoButton";
import {
    CtaBrandAccent,
    FooterBrandBlock,
    HeroLogoMarkGlow,
    NavLogo,
} from "@/components/BrandLogo";
import { PageHero } from "@/components/PageHero";
import { BRAND_NAME } from "@/lib/brand";
import { Phone, Menu, X } from "lucide-react";

type Tab = 'home' | 'courses' | 'pricing' | 'success';

const Replica = () => {
    const [activeTab, setActiveTab] = useState<Tab>('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Helper to toggle FAQ visibility
    const toggleFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        const answer = btn.nextElementSibling;
        const allAnswers = document.querySelectorAll('.faq-answer');

        // Close others
        allAnswers.forEach(ans => {
            if (ans !== answer) ans.classList.add('hidden');
        });

        // Toggle current
        answer?.classList.toggle('hidden');
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleNav = (tab: Tab) => {
        setActiveTab(tab);
        setMobileMenuOpen(false);
        scrollToTop();
    };
    // JSON-LD structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://neonexminds.com/#organization",
                "name": BRAND_NAME,
                "url": "https://neonexminds.com",
                "logo": "https://neonexminds.com/images/main-logo.png",
                "description": "India's leading Data Science, AI/ML, and Business Analytics training institute with 100% placement assistance",
                "email": "neonexminds@gmail.com",
                "telephone": "+91-8088104708",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                },
                "sameAs": []
            },
            {
                "@type": "EducationalOrganization",
                "@id": "https://neonexminds.com/#school",
                "name": BRAND_NAME,
                "description": "Premier training institute for Data Science, AI/ML, and Analytics",
                "areaServed": "India"
            },
            {
                "@type": "Course",
                "name": "Data Science & AI Training Program",
                "description": "Comprehensive Data Science and AI/ML training with hands-on projects and placement support",
                "provider": { "@id": "https://neonexminds.com/#organization" },
                "educationalLevel": "Beginner to Advanced",
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "Online",
                    "duration": "P6M"
                }
            }
        ]
    };

    return (
        <>
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-blue-600/15 selection:text-blue-900">

                {/* ================= HEADER ================= */}
                <header className="glass-nav sticky top-0 z-50">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8 sm:py-4">
                        <div
                            className="flex min-w-0 shrink cursor-pointer items-center hover:opacity-80 transition-opacity"
                            onClick={() => handleNav("home")}
                        >
                            <NavLogo />
                        </div>

                        <nav className="hidden gap-1 text-sm font-medium text-slate-600 md:flex">
                            <button type="button" onClick={() => handleNav("home")} className={`rounded-xl px-4 py-2 transition ${activeTab === "home" ? "bg-blue-600/10 text-blue-600" : "hover:bg-slate-100 hover:text-blue-600"}`}>Home</button>
                            <button type="button" onClick={() => handleNav("courses")} className={`rounded-xl px-4 py-2 transition ${activeTab === "courses" ? "bg-blue-600/10 text-blue-600" : "hover:bg-slate-100 hover:text-blue-600"}`}>Courses</button>
                            <button type="button" onClick={() => handleNav("pricing")} className={`rounded-xl px-4 py-2 transition ${activeTab === "pricing" ? "bg-blue-600/10 text-blue-600" : "hover:bg-slate-100 hover:text-blue-600"}`}>Fees & Offers</button>
                            <button type="button" onClick={() => handleNav("success")} className={`rounded-xl px-4 py-2 transition ${activeTab === "success" ? "bg-blue-600/10 text-blue-600" : "hover:bg-slate-100 hover:text-blue-600"}`}>Success Stories</button>
                        </nav>

                        <div className="flex items-center gap-3">
                            <a href="tel:8088104708" className="hidden text-sm font-medium text-slate-600 transition hover:text-blue-600 lg:block">
                                8088104708
                            </a>
                            <div className="hidden md:block">
                                <BookDemoButton
                                    trigger={
                                        <button type="button" className="btn-primary-brand">
                                            Enquire Now
                                        </button>
                                    }
                                />
                            </div>
                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <nav className="border-t border-slate-200/80 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-md">
                            <div className="flex flex-col gap-1">
                                <button
                                    onClick={() => handleNav('home')}
                                    className={`text-left px-4 py-3 rounded-lg font-medium transition ${activeTab === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => handleNav('courses')}
                                    className={`text-left px-4 py-3 rounded-lg font-medium transition ${activeTab === 'courses' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    Courses
                                </button>
                                <button
                                    onClick={() => handleNav('pricing')}
                                    className={`text-left px-4 py-3 rounded-lg font-medium transition ${activeTab === 'pricing' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    Fees & Offers
                                </button>
                                <button
                                    onClick={() => handleNav('success')}
                                    className={`text-left px-4 py-3 rounded-lg font-medium transition ${activeTab === 'success' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    Success Stories
                                </button>
                                <div className="mt-2 pt-2 border-t border-gray-100">
                                    <a href="tel:8088104708" className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                                        <Phone size={18} />
                                        <span className="font-medium">8088104708</span>
                                    </a>
                                    <div className="px-4 py-2">
                                        <BookDemoButton
                                            trigger={
                                                <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
                                                    Enquire Now
                                                </button>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* ================= MAIN CONTENT AREA ================= */}
                <main className="flex-grow">

                    {/* ================= PAGE : HOME ================= */}
                    {activeTab === 'home' && (
                        <div id="page-home" className="animate-in fade-in duration-300">
                            {/* HERO — gradient + embedded mark (no box); enterprise split ≥lg */}
                            <section className="relative overflow-hidden text-white">
                                <BrandBackdrop />
                                {/* Dynamic background glows for Wicked aesthetic */}
                                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
                                
                                <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 md:pb-28 md:pt-20 lg:pb-32 lg:pt-24">
                                    <div className="flex flex-col items-center gap-12 md:gap-14 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
                                        <div className="flex w-full shrink-0 justify-center lg:w-[48%] lg:max-w-none lg:justify-end lg:pr-2">
                                            <HeroLogoMarkGlow />
                                        </div>
                                        <div className="w-full max-w-xl flex-1 text-center lg:max-w-[26rem] lg:text-left xl:max-w-lg">
                                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/90">
                                                Data · AI · Innovation
                                            </p>
                                            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.15] xl:text-5xl">
                                                Empowering Intelligence with{" "}
                                                <span className="bg-gradient-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent">
                                                    {BRAND_NAME}
                                                </span>
                                            </h1>
                                            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg lg:mx-0">
                                                Build expertise in artificial intelligence, data science, and modern analytics — with live mentorship, real projects, and outcomes that scale with your ambition.
                                            </p>
                                            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-center lg:justify-start lg:gap-5">
                                                <button
                                                    type="button"
                                                    onClick={() => handleNav("courses")}
                                                    className="rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/35"
                                                >
                                                    Explore programs
                                                </button>
                                                <BookDemoButton
                                                    trigger={
                                                        <button
                                                            type="button"
                                                            className="rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-base font-semibold text-white shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                                                        >
                                                            Book a free session
                                                        </button>
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* STATS */}
                            <section className="bg-white py-12">
                                <div className="max-w-7xl mx-auto px-6">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">1000+</div>
                                            <p className="text-gray-600 text-xs md:text-sm">Students Trained</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">4.8/5</div>
                                            <p className="text-gray-600 text-xs md:text-sm">User Satisfaction</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">4.9/5</div>
                                            <p className="text-gray-600 text-xs md:text-sm">Faculty Rating</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">95%</div>
                                            <p className="text-gray-600 text-xs md:text-sm">Program Completion</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">92%</div>
                                            <p className="text-gray-600 text-xs md:text-sm">Successful Placements</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">65%</div>
                                            <p className="text-gray-600 text-xs md:text-sm">Average Salary Hike</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* BATCH TIMING */}
                            <section className="bg-white">
                                <div className="max-w-5xl mx-auto px-6 py-16">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold mb-3">Choose Your Batch Timing</h2>
                                        <p className="text-gray-600">Flexible schedules designed for working professionals</p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div className="glass-panel border-t-4 border-t-blue-600 p-8 text-center hover:-translate-y-1 transition duration-300">
                                            <div className="text-2xl font-bold text-blue-600 mb-2">Weekend Batch</div>
                                            <div className="text-3xl font-bold text-gray-900 mb-3">9:00 AM - 1:30 PM</div>
                                            <p className="text-sm text-gray-600 font-medium">Saturday & Sunday</p>
                                        </div>
                                        <div className="glass-panel border-t-4 border-t-green-600 p-8 text-center hover:-translate-y-1 transition duration-300">
                                            <div className="text-2xl font-bold text-green-600 mb-2">Weekday Morning</div>
                                            <div className="text-3xl font-bold text-gray-900 mb-3">7:00 AM - 9:30 AM</div>
                                            <p className="text-sm text-gray-600 font-medium">Monday to Friday</p>
                                        </div>
                                        <div className="glass-panel border-t-4 border-t-purple-600 p-8 text-center hover:-translate-y-1 transition duration-300">
                                            <div className="text-2xl font-bold text-purple-600 mb-2">Weekday Evening</div>
                                            <div className="text-3xl font-bold text-gray-900 mb-3">8:00 PM - 10:30 PM</div>
                                            <p className="text-sm text-gray-600 font-medium">Monday to Friday</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* JOB MARKET */}
                            <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white">
                                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                                    <span className="inline-block mb-4 px-4 py-1 text-xs bg-red-700 rounded-full">
                                        AI & Data Revolution
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        The Job Market is Shifting Fast
                                    </h2>
                                    <p className="max-w-3xl mx-auto text-red-100 text-base md:text-lg mb-12">
                                        Traditional roles are disappearing. AI & Data skills are no longer optional —
                                        they are essential for survival and growth in the modern workforce.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                        <div className="bg-red-800/80 p-8 rounded-xl">
                                            <div className="text-4xl font-bold mb-2">85%</div>
                                            <p className="text-sm text-red-100">Jobs will require AI & Data skills</p>
                                        </div>
                                        <div className="bg-red-800/80 p-8 rounded-xl">
                                            <div className="text-4xl font-bold mb-2">2.7M</div>
                                            <p className="text-sm text-red-100">New AI & Data jobs every year</p>
                                        </div>
                                        <div className="bg-red-800/80 p-8 rounded-xl">
                                            <div className="text-4xl font-bold mb-2">42%</div>
                                            <p className="text-sm text-red-100">Salary premium for AI-skilled roles</p>
                                        </div>
                                    </div>
                                    <div className="mt-14">
                                        <p className="text-yellow-300 font-medium mb-4">
                                            Don&apos;t get left behind. Start your transformation today.
                                        </p>
                                        <BookDemoButton trigger={
                                            <button className="px-8 py-3 bg-white text-red-800 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                                                Reserve a Callback
                                            </button>
                                        } />
                                    </div>
                                </div>
                            </section>

                            {/* QUOTE */}
                            <section className="bg-slate-50">
                                <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                                    <p className="text-xl md:text-2xl font-medium text-gray-700 italic leading-relaxed">
                                        “The future belongs to those who learn more skills and combine them in creative ways.”
                                    </p>
                                    <p className="mt-4 text-sm text-gray-500">— Robert Greene</p>
                                </div>
                            </section>

                            {/* MISSION */}
                            <section className="bg-white">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center max-w-3xl mx-auto mb-16">
                                        <span className="inline-block mb-3 px-4 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                                            Our Mission
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                            Your Success is Our Mission
                                        </h2>
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                            We provide end-to-end career-focused learning with hands-on training,
                                            real-world projects, and strong placement support — helping learners
                                            confidently transition into Data, AI & Analytics roles.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {[
                                            { icon: "/images/highlights/hands_on.png", title: "Hands-on Learning", desc: "Live classes, assignments, and real datasets." },
                                            { icon: "/images/highlights/curriculum.png", title: "Latest Curriculum", desc: "Content aligned with current industry needs." },
                                            { icon: "/images/highlights/job_assistance.png", title: "100% Job Assistance", desc: "Dedicated PAT team for placements & referrals." },
                                            { icon: "/images/highlights/projects.png", title: "Real-Time Projects", desc: "Capstone projects based on real business use cases." },
                                            { icon: "/images/highlights/mentors.png", title: "Industry Mentors", desc: "Learn directly from working professionals." },
                                            { icon: "/images/highlights/internship.png", title: "Internship Experience", desc: "3–6 month internship with certification." },
                                        ].map((item, idx) => (
                                            <div key={idx} className="border bg-white rounded-xl p-6 hover:shadow-xl hover:ring-1 hover:ring-blue-100 transition transform hover:-translate-y-1">
                                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 p-2.5">
                                                    <Image
                                                        src={item.icon}
                                                        alt=""
                                                        width={32}
                                                        height={32}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* TRAINERS */}
                            <section className="bg-slate-50">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-16">
                                        <span className="inline-block mb-3 px-4 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">Expert Trainers</span>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn from Industry Leaders</h2>
                                        <p className="text-gray-600 max-w-2xl mx-auto">Our trainers bring real-world industry experience into the classroom.</p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* Trainer 1 */}
                                        <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                                            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg relative ring-2 ring-blue-100">
                                                <Image
                                                    src="/images/neeraj.png"
                                                    alt="Neeraj PC"
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                                />
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900">Neeraj PC</h3>
                                            <p className="text-sm text-blue-600">AI/ML Engineer at Computhink</p>
                                            <p className="text-xs text-gray-500 mt-1">5+ years in Data Analytics, Science & AI/ML</p>
                                        </div>

                                        {/* Trainer 2 */}
                                        <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                                            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg relative ring-2 ring-blue-100">
                                                <Image
                                                    src="/images/lakshmi.png"
                                                    alt="Lakshmi Achar"
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                                />
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900">Lakshmi Achar</h3>
                                            <p className="text-sm text-blue-600">Head of AI/ML Department</p>
                                            <p className="text-xs text-gray-500 mt-1">St. Claret Educational Institution</p>
                                        </div>

                                        {/* Trainer 3 */}
                                        <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                                            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg relative ring-2 ring-blue-100">
                                                <Image
                                                    src="/images/megha.png"
                                                    alt="Megha"
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                                />
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900">Megha</h3>
                                            <p className="text-sm text-blue-600">Lead of Operations Team</p>
                                            <p className="text-xs text-gray-500 mt-1">PwC</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQ */}
                            <section className="bg-white">
                                <div className="max-w-6xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-2">FAQ</h2>
                                        <p className="text-gray-600">Got questions? We&apos;ve got answers</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { q: "What are the eligibility criteria for joining?", a: "Anyone with basic computer knowledge can join our courses. A graduation degree is preferred but not mandatory. We welcome freshers, working professionals, and career switchers." },
                                            { q: "Do you provide placement assistance?", a: "Yes! We have a dedicated PAT (Placement Assistance Team) that provides 100% job assistance, including resume building, mock interviews, and direct company referrals. Weekly job openings are shared with students." },
                                            { q: "Can I take individual modules instead of full courses?", a: "Absolutely! We offer individual modules like Python (₹15k), SQL (₹10k), Power BI/Tableau/Excel (₹15k), and Machine Learning (₹20k)." },
                                            { q: "What is the mode of training?", a: "All training is conducted online through live interactive sessions. LMS access with recordings, notes, and additional resources is provided." },
                                            { q: "How long do I have access to course materials?", a: "You get lifetime access to all course materials, recordings, and LMS content. Unlimited retakes are allowed at no extra cost." },
                                            { q: "What if I miss a class?", a: "All sessions are recorded. You can watch recordings, attend the same session in the next batch, or opt for doubt-solving sessions." },
                                            { q: "Do you provide internship certificates?", a: "Yes, all courses include a 3–6 month internship component with an internship certificate." },
                                            { q: "What are the payment options?", a: "We accept UPI, credit/debit cards, bank transfers, and EMI options for courses above ₹40,000." }
                                        ].map((faq, i) => (
                                            <div key={i} className="glass-panel !rounded-xl !bg-white/40 overflow-hidden">
                                                <button onClick={toggleFaq} className="w-full text-left p-5 font-semibold text-slate-900 faq-question hover:bg-white/40 transition-colors flex justify-between items-center group">
                                                    <span>{faq.q}</span>
                                                    <span className="text-blue-500 group-hover:translate-y-0.5 transition-transform">▼</span>
                                                </button>
                                                <div className="faq-answer hidden px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* FINAL CTA */}
                            <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                                    <CtaBrandAccent className="mb-10" />
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
                                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">Join 1000+ learners who have accelerated their careers with {BRAND_NAME}.</p>
                                    <div className="flex justify-center gap-4 flex-wrap">
                                        <button onClick={() => handleNav('courses')} className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition">View All Courses</button>
                                        <a href="tel:8088104708" className="px-8 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-blue-500 transition">Call 8088104708</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}


                    {/* ================= PAGE : COURSES ================= */}
                    {activeTab === 'courses' && (
                        <div id="page-courses" className="animate-in fade-in duration-300">
                            <PageHero
                                variant="blue"
                                eyebrow="Programs"
                                title="Industry-leading courses"
                                description="Comprehensive training designed to make you job-ready in 4–9 months — with hands-on projects and placement support."
                            />

                            <section className="bg-slate-50">
                                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                                    <p className="text-lg md:text-xl italic text-gray-700">“Artificial intelligence is the new electricity.”</p>
                                    <p className="mt-3 text-sm text-gray-500">— Andrew Ng, Stanford University</p>
                                </div>
                            </section>

                            <section className="bg-white">
                                <div className="max-w-7xl mx-auto px-6 py-20">
                                    <div className="text-center mb-14">
                                        <h2 className="text-3xl font-bold mb-3">Complete Training Programs</h2>
                                        <p className="text-gray-600">Job-focused programs with hands-on projects & placement support</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[
                                            { title: "Data Analytics", desc: "Master data analysis, visualization & business intelligence", duration: "4-5 months", price: "40,000", strike: "50,000", popular: true, img: "/images/data_analytics.jpeg", features: ["Python, SQL, Excel", "Power BI / Tableau", "Statistics & Analytics", "Real-world Projects", "Placement Support"] },
                                            { title: "Business Analytics", desc: "Learn business metrics, KPIs & strategic decision-making", duration: "4-5 months", price: "45,000", strike: "55,000", popular: false, img: "/images/business_analytics.jpg", features: ["Excel & SQL", "Business Intelligence", "Data Visualization", "Case Studies", "Internship Certificate"] },
                                            { title: "Data Science", desc: "Deep dive into statistics, ML algorithms & predictive modeling", duration: "5-7 months", price: "55,000", strike: "65,000", popular: true, img: "/images/data_science.webp", features: ["Python & R", "Machine Learning", "Statistics", "Deep Learning Basics", "Capstone Project"] },
                                            { title: "Data Science & AI", desc: "Advanced AI/ML, deep learning & neural networks", duration: "6-9 months", price: "65,000", strike: "75,000", popular: true, img: "/images/data_science_and_ai.jpg", features: ["Advanced ML & AI", "Deep Learning", "NLP & Computer Vision", "Gen AI Fundamentals", "Industry Projects"] },
                                            { title: "Data Engineering", desc: "Build robust data pipelines, ETL & cloud infrastructure", duration: "6-8 months", price: "70,000", strike: "80,000", popular: false, img: "/images/data_engineering.jpg", features: ["SQL & NoSQL", "ETL Pipelines", "Cloud (AWS/Azure)", "Big Data Tools", "Real-time Processing"] },
                                            { title: "AI / ML Engineering", desc: "Production ML systems, MLOps & model deployment", duration: "7-9 months", price: "90,000", strike: "1,00,000", popular: true, img: "/images/ai_ml_engineering.jpg", features: ["Advanced ML", "MLOps & Deployment", "Model Optimization", "Cloud ML Services", "End-to-end Projects"] }
                                        ].map((course, i) => (
                                            <div key={i} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-500 transition-all duration-300 bg-white">
                                                <div className="relative h-56 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                                                    <Image
                                                        src={course.img}
                                                        alt={course.title}
                                                        width={600}
                                                        height={400}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {course.popular && (
                                                        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
                                                    )}
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="font-bold text-2xl mb-2 text-gray-900">{course.title}</h3>
                                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{course.desc}</p>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{course.duration}</span>
                                                    </div>
                                                    <div className="mb-4 space-y-2">
                                                        {course.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                                <span className="text-green-500 mt-0.5">✓</span>
                                                                <span>{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-baseline gap-3 mb-4">
                                                        <span className="text-3xl font-bold text-gray-900">₹{course.price}</span>
                                                        <span className="text-lg text-gray-400 line-through">₹{course.strike}</span>
                                                    </div>
                                                    <BookDemoButton trigger={
                                                        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md">
                                                            Enquire Now
                                                        </button>
                                                    } />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gray-50">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <h2 className="text-4xl font-bold mb-4">Individual Modules</h2>
                                        <p className="text-gray-600 text-lg">Master specific skills at your own pace</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {[
                                            { t: "Python", time: "6–8 weeks", p: "15,000", img: "/images/python.jpg", features: ["Python Basics", "Data Structures", "OOP Concepts", "Libraries & Frameworks"] },
                                            { t: "SQL", time: "4–6 weeks", p: "10,000", img: "/images/sql.png", features: ["Database Fundamentals", "Queries & Joins", "Optimization", "Real-world Projects"] },
                                            { t: "Power BI / Tableau", time: "5–6 weeks", p: "15,000", img: "/images/data_visualization.jpg", features: ["Dashboard Creation", "Data Modeling", "DAX Functions", "Interactive Reports"] },
                                            { t: "Machine Learning", time: "8–10 weeks", p: "20,000", img: "/images/machine_learning.jpg", features: ["ML Algorithms", "Model Training", "Scikit-learn", "Hands-on Projects"] }
                                        ].map((m, i) => (
                                            <div key={i} className="border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-blue-500 transition-all bg-white">
                                                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-3">
                                                    <Image
                                                        src={m.img}
                                                        alt={m.t}
                                                        width={80}
                                                        height={80}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <h3 className="font-bold text-xl mb-2">{m.t}</h3>
                                                <p className="text-sm text-gray-500 mb-4">{m.time}</p>
                                                <div className="mb-4 space-y-1 text-left">
                                                    {m.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                                            <span className="text-green-500 mt-0.5">✓</span>
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="text-2xl font-bold text-gray-900 mb-4">₹{m.p}</div>
                                                <BookDemoButton trigger={
                                                    <button className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm">
                                                        Enroll Now
                                                    </button>
                                                } />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="bg-slate-50">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <h2 className="text-3xl font-bold mb-3">Choose Your Batch Timing</h2>
                                        <p className="text-gray-600 text-sm">Weekday and weekend flexibility</p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                        <div className="bg-white border rounded-xl p-6">
                                            <h3 className="font-semibold text-lg text-blue-700 mb-2">Morning Batch</h3>
                                            <p className="text-sm text-gray-600">⏰ 7:00 AM – 9:30 AM</p>
                                            <p className="text-xs text-gray-500">Mon–Thu + Friday soft skills</p>
                                        </div>
                                        <div className="bg-white border rounded-xl p-6">
                                            <h3 className="font-semibold text-lg text-blue-700 mb-2">Evening Batch</h3>
                                            <p className="text-sm text-gray-600">⏰ 8:00 PM – 10:00 PM</p>
                                            <p className="text-xs text-gray-500">Mon–Thu + Friday soft skills</p>
                                        </div>
                                        <div className="bg-white border rounded-xl p-6">
                                            <h3 className="font-semibold text-lg text-blue-700 mb-2">Weekend Batch</h3>
                                            <p className="text-sm text-gray-600">⏰ 9:00 AM – 1:30 PM</p>
                                            <p className="text-xs text-gray-500">Saturday & Sunday<br />Last Sunday: Soft Skills Training<br />Other weekends: Regular Training</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}


                    {/* ================= PAGE : FEES & OFFERS ================= */}
                    {activeTab === 'pricing' && (
                        <div id="page-pricing" className="animate-in fade-in duration-300">
                            <PageHero
                                variant="emerald"
                                eyebrow="Fees & offers"
                                title="Transparent pricing"
                                description="Invest in your future with clear pricing, EMI options, and limited-time benefits."
                            />

                            {/* OFFERS */}
                            <section className="bg-green-50">
                                <div className="max-w-7xl mx-auto px-6 py-16">
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl font-bold mb-3">Current Offers & Benefits</h2>
                                        <p className="text-gray-600">Limited time offers to kickstart your career</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                        {[
                                            "3–6 months internship with certificate included",
                                            "EMI options available for courses above ₹40,000",
                                            "Early bird discount: Additional 5% off for first 10 enrollments",
                                            "Refer a friend and get ₹5,000 cashback",
                                            "Group discount: 10% off for groups of 3 or more",
                                            "Lifetime access to course materials and updates"
                                        ].map((offer, i) => (
                                            <div key={i} className="bg-white border-2 border-green-200 rounded-xl p-5 flex gap-3 items-start">
                                                <div className="text-green-600 text-lg mt-0.5">✓</div>
                                                <p className="text-sm text-gray-700 leading-relaxed">{offer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* PROGRAMS PRICING */}
                            <section className="bg-white">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <h2 className="text-4xl font-bold mb-4">Complete Training Programs</h2>
                                        <p className="text-gray-600 text-lg">Choose the program that fits your career goals</p>
                                    </div>
                                    <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-8 rounded-r-lg">
                                        <div className="flex items-start">
                                            <span className="text-green-500 mr-2">ℹ️</span>
                                            <p className="text-green-700 font-medium">Important: Internship opportunity and certificate of 3-6 months will be provided for any course candidate picks. Job-focused programs with hands-on projects & placement support.</p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[
                                            { t: "Data Analytics", d: "4–5 months", p: "40,000", s: "50,000", save: "10,000", img: "/images/data_analytics.jpeg", features: ["Python, SQL, Excel", "Power BI / Tableau", "Statistics & Analytics", "Real-world Projects", "Placement Support"] },
                                            { t: "Business Analytics", d: "4–5 months", p: "45,000", s: "55,000", save: "10,000", img: "/images/business_analytics.jpg", features: ["Excel & SQL", "Business Intelligence", "Data Visualization", "Case Studies", "Internship Certificate"] },
                                            { t: "Data Science", d: "5–7 months", p: "55,000", s: "65,000", save: "10,000", img: "/images/data_science.webp", features: ["Python & R", "Machine Learning", "Statistics", "Deep Learning Basics", "Capstone Project"] },
                                            { t: "Data Science & AI", d: "6–9 months", p: "65,000", s: "75,000", save: "10,000", img: "/images/data_science_and_ai.jpg", features: ["Advanced ML & AI", "Deep Learning", "NLP & Computer Vision", "Gen AI Fundamentals", "Industry Projects"] },
                                            { t: "Data Engineering", d: "6–8 months", p: "70,000", s: "80,000", save: "10,000", img: "/images/data_engineering.jpg", features: ["SQL & NoSQL", "ETL Pipelines", "Cloud (AWS/Azure)", "Big Data Tools", "Real-time Processing"] },
                                            { t: "AI / ML Engineering", d: "7–9 months", p: "90,000", s: "1,00,000", save: "10,000", img: "/images/ai_ml_engineering.jpg", features: ["Advanced ML", "MLOps & Deployment", "Model Optimization", "Cloud ML Services", "End-to-end Projects"] },
                                        ].map((item, i) => (
                                            <div key={i} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-500 transition-all bg-white">
                                                <div className="relative">
                                                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg">SAVE ₹{item.save}</span>
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="font-bold text-2xl mb-2 text-gray-900">{item.t}</h3>
                                                    <p className="text-sm text-gray-500 mb-4">{item.d}</p>

                                                    <div className="flex items-baseline gap-3 mb-4">
                                                        <span className="text-4xl font-bold text-gray-900">₹{item.p}</span>
                                                        <span className="text-xl text-gray-400 line-through">₹{item.s}</span>
                                                    </div>

                                                    <div className="mb-4 space-y-2">
                                                        {item.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                                <span className="text-green-500 mt-0.5">✓</span>
                                                                <span>{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <BookDemoButton trigger={
                                                        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md">
                                                            Enroll Now
                                                        </button>
                                                    } />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* INDIVIDUAL MODULES CTA */}
                            <section className="bg-gray-50">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <h2 className="text-4xl font-bold mb-4">Individual Modules</h2>
                                        <p className="text-gray-600 text-lg">Learn specific skills at your own pace</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {[
                                            { t: "Python", time: "6–8 weeks", p: "15,000", img: "/images/python.jpg" },
                                            { t: "SQL", time: "4–6 weeks", p: "10,000", img: "/images/sql.png" },
                                            { t: "Power BI / Tableau", time: "5–6 weeks", p: "15,000", img: "/images/data_visualization.jpg" },
                                            { t: "Machine Learning", time: "8–10 weeks", p: "20,000", img: "/images/machine_learning.jpg" }
                                        ].map((m, i) => (
                                            <div key={i} className="border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-blue-500 transition-all bg-white">
                                                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-3">
                                                    <Image
                                                        src={m.img}
                                                        alt={m.t}
                                                        width={80}
                                                        height={80}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <h3 className="font-bold text-xl mb-2">{m.t}</h3>
                                                <p className="text-sm text-gray-500 mb-4">{m.time}</p>
                                                <div className="text-3xl font-bold text-gray-900 mb-4">₹{m.p}</div>
                                                <BookDemoButton trigger={
                                                    <button className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm">
                                                        Enroll
                                                    </button>
                                                } />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* EVERY COURSE INCLUDES */}
                            <section className="bg-slate-50">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <h2 className="text-2xl font-bold mb-2">Every Course Includes</h2>
                                        <p className="text-gray-500 text-sm">Comprehensive support and resources for your success</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-sm">
                                        {[
                                            "Unlimited module retakes at no extra cost",
                                            "100% job assistance with PAT team support",
                                            "4+ Capstone & 2+ Real-time industry projects",
                                            "Lifetime LMS access with notes & recordings",
                                            "Weekly job openings and career guidance",
                                            "Soft skills training & resume building"
                                        ].map((inc, i) => (
                                            <div key={i} className="bg-white border rounded-xl p-6 flex items-center gap-2">
                                                <span className="text-green-600">✔</span> {inc}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* PRICING CTA */}
                            <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
                                <div className="max-w-7xl mx-auto px-6 py-28 sm:py-32 text-center">
                                    <CtaBrandAccent className="mb-10" />
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Invest in Your Future?</h2>
                                    <p className="text-blue-100 max-w-2xl mx-auto mb-10">Don’t let budget be a barrier. We offer flexible EMI options and special discounts.</p>
                                    <div className="flex justify-center gap-6">
                                        <BookDemoButton trigger={
                                            <button className="px-8 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition">Chat with Our Team</button>
                                        } />
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}


                    {/* ================= PAGE : SUCCESS STORIES ================= */}
                    {activeTab === 'success' && (
                        <div id="page-success" className="animate-in fade-in duration-300">
                            <PageHero
                                variant="blue"
                                eyebrow="Success stories"
                                title="Real people, real outcomes"
                                description={`Join thousands of learners who have transformed their careers with ${BRAND_NAME}.`}
                            />

                            {/* STATS */}
                            <section className="bg-white">
                                <div className="max-w-7xl mx-auto px-6 py-16">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                        {[
                                            { v: "1000+", l: "Graduates and Non-Graduates" },
                                            { v: "92%", l: "Success Rate" },
                                            { v: "4.5/5", l: "Rating" },
                                            { v: "30+", l: "Companies" }
                                        ].map((s, i) => (
                                            <div key={i}>
                                                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{s.v}</div>
                                                <p className="text-sm text-gray-600">{s.l}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* TESTIMONIALS */}
                            <section className="bg-gray-50">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <h2 className="text-4xl font-bold mb-4">Student Testimonials</h2>
                                        <p className="text-gray-600 text-lg">Hear from our successful graduates</p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {[
                                            {
                                                name: "Ananya Reddy",
                                                role: "Data Analyst",
                                                company: "Accenture",
                                                image: "https://images.unsplash.com/photo-1623184122025-203b26373d09?q=80&w=2681&auto=format&fit=crop",
                                                quote: "\"NeoNex MindX transformed my career completely. Coming from a non-technical background, I gained confidence through hands-on projects and industry-focused training. The placement support was exceptional!\"",
                                            },
                                            {
                                                name: "Vikram Singh",
                                                role: "ML Engineer",
                                                company: "Swiggy",
                                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
                                                quote: "\"The AI/ML Engineering program was extremely comprehensive. The projects and mentorship prepared me well for industry-level challenges. I landed my dream job within 2 months of completing the course.\"",
                                            },
                                            {
                                                name: "Meera Krishnan",
                                                role: "Data Engineer",
                                                company: "Zomato",
                                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop",
                                                quote: "\"Switching from manual testing to data engineering felt risky, but NeoNex MindX made the transition smooth with structured learning and real-time projects. Best decision of my career!\"",
                                            },
                                            {
                                                name: "Rohit Sharma",
                                                role: "Business Analyst",
                                                company: "Nykaa",
                                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
                                                quote: "\"As someone from a commerce background, I was nervous about transitioning to analytics. The structured approach and constant support helped me confidently move into the field. Highly recommended!\"",
                                            }
                                        ].map((t, i) => (
                                            <div key={i} className={`border-2 border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-all ${i === 3 ? "md:col-span-3 lg:col-span-1" : ""}`}>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={t.image}
                                                            alt={t.name}
                                                            width={64}
                                                            height={64}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                                                        <p className="text-sm text-gray-500">{t.role} · {t.company}</p>
                                                    </div>
                                                </div>
                                                <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
                                                <button className="text-blue-600 text-sm font-medium hover:underline">Read More →</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* CTA STRIP */}
                            <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Success Story Starts Here</h2>
                                        <p className="text-blue-100 text-sm max-w-xl">Join 1000+ professionals who made successful career transitions with our guidance and support.</p>
                                    </div>
                                    <BookDemoButton trigger={
                                        <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition">Start Your Journey</button>
                                    } />
                                </div>
                            </section>

                            {/* COMPANIES */}
                            <section className="bg-white">
                                <div className="max-w-7xl mx-auto px-6 py-24">
                                    <div className="text-center mb-14">
                                        <span className="inline-block mb-3 px-4 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Alumni Network</span>
                                        <h2 className="text-3xl font-bold mb-3">Where Our Alumni Work</h2>
                                        <p className="text-gray-500 text-sm">Our graduates are now working at leading tech companies</p>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
                                        {[
                                            { name: "Razorpay", img: "/images/razorpay.png" },
                                            { name: "Swiggy", img: "/images/swiggy.png" },
                                            { name: "Zomato", img: "/images/zomato.png" }
                                        ].map((c, i) => (
                                            <div key={i} className="border rounded-xl p-6 hover:shadow-md transition">
                                                <div className="w-20 h-12 mx-auto mb-3 flex items-center justify-center">
                                                    <Image
                                                        src={c.img}
                                                        alt={c.name}
                                                        width={80}
                                                        height={48}
                                                        className="max-w-full max-h-full object-contain"
                                                    />
                                                </div>
                                                <p className="text-sm font-medium">{c.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-center text-xs text-gray-500 mt-10">And many more at Myntra, Meesho, Paytm, Accenture, TCS, Infosys, Wipro, and growing startups!</p>
                                </div>
                            </section>

                            {/* ARTICLES */}
                            <section className="bg-white">
                                <div className="max-w-7xl mx-auto px-6 py-24 pt-0">
                                    <div className="text-center mb-14">
                                        <span className="inline-block mb-3 px-4 py-1 text-xs bg-green-100 text-green-700 rounded-full">Learning Resources</span>
                                        <h2 className="text-3xl font-bold mb-3">Latest Insights & Articles</h2>
                                        <p className="text-gray-500 text-sm">Expert advice on career growth and industry trends</p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-10">
                                        {[
                                            { cat: "Career Advice", t: "Why 2025 is the Best Time to Start a Career in Data Science", a: "Rajesh Kumar • 5 min read", img: "/images/article_ds_2025.png" },
                                            { cat: "Career Transition", t: "From Non-Tech to Data Analyst: A Complete Roadmap", a: "Priya Sharma • 7 min read", img: "/images/article_non_tech_roadmap.png" },
                                            { cat: "Technology Trends", t: "Top 10 AI Skills That Will Make You Irreplaceable in 2025", a: "Ankit Patel • 6 min read", img: "/images/article_ai_skills.png" }
                                        ].map((art, i) => (
                                            <div key={i} className="border rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer group">
                                                <div className="h-44 bg-gray-200 overflow-hidden">
                                                    <Image
                                                        src={art.img}
                                                        alt={art.t}
                                                        width={400}
                                                        height={250}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                                    />
                                                </div>
                                                <div className="p-5">
                                                    <p className="text-xs text-blue-600 mb-2">{art.cat}</p>
                                                    <h3 className="font-semibold text-sm mb-2 group-hover:text-blue-600 transition">{art.t}</h3>
                                                    <p className="text-xs text-gray-500">By {art.a}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* SUCCESS CTA */}
                            <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
                                <div className="max-w-7xl mx-auto px-6 py-28 sm:py-32 text-center">
                                    <CtaBrandAccent className="mb-10" />
                                    <div className="text-4xl mb-4">🏆</div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Our Next Success Story</h2>
                                    <p className="text-blue-100 max-w-2xl mx-auto mb-10">Your career transformation is just one decision away. Let&apos;s make it happen together.</p>
                                    <BookDemoButton trigger={
                                        <button className="px-8 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition">Get Started Today</button>
                                    } />
                                </div>
                            </section>
                        </div>
                    )}
                </main>

                {/* ================= FOOTER ================= */}
                <footer className="bg-slate-900 text-slate-300">
                    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
                        <div className="min-w-0">
                            <div className="mb-6">
                                <FooterBrandBlock />
                            </div>
                            <p className="text-sm text-slate-400">Premier training institute for Data Science, AI/ML, and Analytics. Transforming careers with hands-on, practical learning.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li onClick={() => handleNav('home')} className="cursor-pointer hover:text-white">Home</li>
                                <li onClick={() => handleNav('courses')} className="cursor-pointer hover:text-white">Courses</li>
                                <li onClick={() => handleNav('pricing')} className="cursor-pointer hover:text-white">Fees & Offers</li>
                                <li onClick={() => handleNav('success')} className="cursor-pointer hover:text-white">Success Stories</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Popular Courses</h4>
                            <ul className="text-sm space-y-2">
                                <li>Data Analytics</li>
                                <li>Data Science</li>
                                <li>AI / ML Engineering</li>
                                <li>Data Engineering</li>
                                <li>Business Analytics</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                            <ul className="text-sm space-y-2">
                                <li>📞 8088104708</li>
                                <li>✉ neonexminds@gmail.com</li>
                                <li>📍 Online Training (India)</li>
                                <li>⏰ Mon–Sat: 9AM – 8PM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-xs text-slate-500 py-6 border-t border-slate-800 pb-24 md:pb-6">© 2026 {BRAND_NAME}. All rights reserved.</div>
                </footer>

                {/* ================= MOBILE BOTTOM NAVIGATION ================= */}
                <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                    <div className="flex justify-around items-center py-2">
                        <button
                            onClick={() => handleNav('home')}
                            className={`flex flex-col items-center px-3 py-2 min-w-[60px] ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-xs mt-1 font-medium">Home</span>
                        </button>
                        <button
                            onClick={() => handleNav('courses')}
                            className={`flex flex-col items-center px-3 py-2 min-w-[60px] ${activeTab === 'courses' ? 'text-blue-600' : 'text-gray-600'}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="text-xs mt-1 font-medium">Courses</span>
                        </button>
                        <button
                            onClick={() => handleNav('pricing')}
                            className={`flex flex-col items-center px-3 py-2 min-w-[60px] ${activeTab === 'pricing' ? 'text-blue-600' : 'text-gray-600'}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs mt-1 font-medium">Fees</span>
                        </button>
                        <button
                            onClick={() => handleNav('success')}
                            className={`flex flex-col items-center px-3 py-2 min-w-[60px] ${activeTab === 'success' ? 'text-blue-600' : 'text-gray-600'}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span className="text-xs mt-1 font-medium">Success</span>
                        </button>
                    </div>
                </nav>

            </div>
        </>
    );
};

export default Replica;


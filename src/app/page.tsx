import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NSKAILabs - India's First AI-Assisted Photonics Platform",
  description:
    "India's first AI-assisted Photonics platform. Pioneering AI-driven Photonic Design, Hail Prediction Systems for Himachal Pradesh, and Quantum Research initiatives.",
  openGraph: {
    title: "NSKAILabs - India's First AI-Assisted Photonics Platform",
    description:
      "Pioneering AI-driven Photonic Design, Climate Intelligence, and Quantum Research.",
  },
};

const coreValues = [
  {
    title: "AI-Driven Photonic Design",
    description:
      "India's pioneering platform for AI-assisted photonic device simulation, optimization, and fabrication-ready exports.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Hail Prediction Systems",
    description:
      "Advanced AI models for hailstorm prediction and early warning systems, protecting agriculture and communities in Himachal Pradesh.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Quantum Research",
    description:
      "Cutting-edge quantum computing research and applications, pushing the boundaries of computational physics and cryptography.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
  },
];

const announcements = [
  {
    id: 1,
    title: "Hail Prediction System for Himachal Pradesh",
    description: "We're developing AI-powered hail prediction models to protect apple orchards and agricultural communities across Himachal Pradesh.",
    category: "hail_prediction",
    is_featured: true,
  },
  {
    id: 2,
    title: "Quantum Research Initiative Launched",
    description: "NSKAILabs enters quantum computing research, exploring quantum photonics and computational applications.",
    category: "quantum_research",
    is_featured: true,
  },
  {
    id: 3,
    title: "MetaOptics AI Platform Now Live",
    description: "Our AI-assisted photonic design software is now available. Design, simulate, and optimize photonic devices with unprecedented speed.",
    category: "product",
    is_featured: false,
  },
];

const audience = [
  {
    title: "Researchers",
    description: "Accelerate photonic device research and quantum experiments with AI-powered simulation and optimization tools.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Students",
    description: "Learn AI, photonics, and quantum computing through hands-on projects with real-world datasets and industry tools.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Industry Partners",
    description: "Enterprise-grade photonic design solutions and custom AI integrations for semiconductor and tech companies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
];

const stats = [
  { value: "1st", label: "AI Photonics Platform in India" },
  { value: "3", label: "Research Verticals" },
  { value: "HP", label: "Hail Prediction Coverage" },
  { value: "∞", label: "Possibilities in Quantum" },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'hail_prediction':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case 'quantum_research':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      );
    case 'product':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      );
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'hail_prediction':
      return 'from-cyan-500 to-blue-500';
    case 'quantum_research':
      return 'from-emerald-500 to-teal-500';
    case 'product':
      return 'from-violet-500 to-fuchsia-500';
    default:
      return 'from-indigo-500 to-cyan-500';
  }
};

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-cyan-300">India&apos;s First AI-Assisted Photonics Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                AI & Photonic Intelligence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              From AI-driven photonic design to climate intelligence and quantum research — 
              we&apos;re building technologies that shape tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/product" className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Access MetaOptics AI</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-violet-500/50 text-violet-300 font-semibold hover:bg-violet-500/10 transition-all duration-300"
              >
                Our Vision
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Latest <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Announcements</span>
              </h2>
              <p className="text-gray-400 mt-2">What we&apos;re building and where we&apos;re headed</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`relative group bg-dark-900/50 border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  announcement.is_featured 
                    ? 'border-violet-500/50 hover:border-violet-400/70' 
                    : 'border-dark-700 hover:border-cyan-500/50'
                }`}
              >
                {announcement.is_featured && (
                  <div className="absolute -top-3 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xs font-semibold text-white">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${getCategoryColor(announcement.category)} text-white mb-4`}>
                  {getCategoryIcon(announcement.category)}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {announcement.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {announcement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / What We Build */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Three Pillars of <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Converging AI, photonics, and quantum technologies to solve real-world challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((item) => (
              <div key={item.title} className="group relative bg-dark-900/50 border border-dark-700 rounded-2xl p-8 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-violet-500/10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="relative text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="relative text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/product" className="group relative bg-gradient-to-br from-violet-950/50 to-dark-900 border border-violet-500/30 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors duration-500" />
              <div className="relative">
                <div className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-2">
                  AI-Powered Software
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  MetaOptics AI
                </h3>
                <p className="text-lg text-gray-300 mb-4">
                  India&apos;s First AI-Assisted Photonics Platform
                </p>
                <p className="text-gray-400 mb-6">
                  Design, simulate, and optimize photonic devices with AI-powered tools. 
                  From meta-atoms to fabrication-ready GDS exports.
                </p>
                <span className="inline-flex items-center text-violet-400 font-semibold group-hover:gap-3 transition-all duration-200">
                  Launch Platform
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/bharat-pro" className="group relative bg-gradient-to-br from-cyan-950/50 to-dark-900 border border-cyan-500/30 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30">
                <span className="text-xs font-semibold text-amber-400">Coming Soon</span>
              </div>
              <div className="relative">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Education Platform
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Bharat-Pro
                </h3>
                <p className="text-lg text-gray-300 mb-4">
                  AutoML Training & AI Education
                </p>
                <p className="text-gray-400 mb-6">
                  Comprehensive AutoML training with explainable ML/DL modules, 
                  real-world datasets, and industry-ready skills.
                </p>
                <span className="inline-flex items-center text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Who We <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Empowering researchers, students, and industry leaders across the AI and photonics ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audience.map((item) => (
              <div key={item.title} className="bg-dark-900/50 border border-dark-700 rounded-2xl p-8 text-center transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-violet-950/30 via-dark-900 to-cyan-950/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="relative bg-gradient-to-br from-violet-950/50 to-cyan-950/50 border border-violet-500/30 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Shape the Future?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Join researchers, students, and industry leaders who are leveraging 
                AI-powered photonics to drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/product" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105">
                  Get Started with MetaOptics
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-violet-500/50 text-violet-300 font-semibold hover:bg-violet-500/10 transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
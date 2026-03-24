import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NSKAILabs - India's first AI-assisted Photonics platform. Our mission spans AI-driven Photonic Design, Hail Prediction Systems, and Quantum Research.",
  openGraph: {
    title: "About NSKAILabs",
    description:
      "India's first AI-assisted Photonics platform. Pioneering photonic design, climate intelligence, and quantum research.",
  },
};

const pillars = [
  {
    title: "AI-Driven Photonic Design",
    description:
      "We're building India's first AI-assisted photonics platform, making advanced simulation and optimization accessible to researchers, students, and industry professionals.",
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
      "Developing AI-powered hailstorm prediction models to protect agriculture and communities in Himachal Pradesh, where apple orchards are particularly vulnerable to hail damage.",
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
      "Exploring the frontiers of quantum computing and quantum photonics, pushing the boundaries of computational physics, cryptography, and fundamental science.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "MetaOptics AI Launch",
    description:
      "Launch India's first AI-assisted photonic design platform. Establish core simulation and optimization capabilities.",
    status: "Complete",
    statusColor: "bg-emerald-500/20 text-emerald-400",
  },
  {
    phase: "Phase 2",
    title: "Hail Prediction Initiative",
    description:
      "Deploy AI models for hailstorm prediction in Himachal Pradesh. Partner with agricultural agencies and meteorological departments.",
    status: "In Progress",
    statusColor: "bg-cyan-500/20 text-cyan-400",
  },
  {
    phase: "Phase 3",
    title: "Quantum Research Program",
    description:
      "Establish quantum computing research initiatives. Explore quantum photonics applications and fundamental physics experiments.",
    status: "Upcoming",
    statusColor: "bg-violet-500/20 text-violet-400",
  },
  {
    phase: "Phase 4",
    title: "Bharat-Pro Education Platform",
    description:
      "Launch comprehensive AutoML training platform with explainable ML/DL modules for the next generation of AI practitioners.",
    status: "Planned",
    statusColor: "bg-gray-500/20 text-gray-400",
  },
];

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and challenge conventional approaches to solve real-world problems with cutting-edge technology.",
  },
  {
    title: "Accessibility",
    description: "Advanced technology should be accessible to all — from students to researchers to industry professionals.",
  },
  {
    title: "Impact-Driven",
    description: "Every project we undertake is measured by its real-world impact on communities, industries, and scientific progress.",
  },
  {
    title: "Collaborative",
    description: "We believe in the power of collaboration across disciplines, institutions, and borders to achieve breakthrough results.",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 mb-6">
              <span className="text-sm font-medium text-cyan-300">🇮🇳 Made in India</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">NSKAILabs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              India&apos;s First AI-Assisted Photonics Platform
            </p>
            <p className="text-lg text-gray-400">
              We exist to democratize advanced technologies through innovation,
              making AI-powered photonics, climate intelligence, and quantum research
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gradient-to-br from-violet-950/30 via-dark-900 to-cyan-950/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-900/50 border border-violet-500/30 rounded-2xl p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the pioneering force in democratizing AI-powered photonics, 
                  climate intelligence, and quantum technologies — empowering researchers, 
                  students, and industries across India and beyond.
                </p>
              </div>
              
              <div className="bg-dark-900/50 border border-cyan-500/30 rounded-2xl p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  Democratize AI & Photonics through education and automation. 
                  Protect communities through climate intelligence. 
                  Advance fundamental science through quantum research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Three Pillars of <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Our work spans three interconnected domains, each addressing critical challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item) => (
              <div key={item.title} className="group relative bg-dark-900/50 border border-dark-700 rounded-2xl p-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-violet-500/10 overflow-hidden">
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

      {/* Founder Story */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Our <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Story</span>
            </h2>
            <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white text-xl font-bold">
                  N
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Founded with Purpose
                  </h3>
                  <p className="text-sm text-gray-400">
                    Student-Driven Innovation
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                NSKAILabs was born from a simple observation: the gap between
                academic knowledge and real-world impact in AI and photonics is
                enormous. Traditional tools for photonic design were inaccessible, 
                AI education lacked practical depth, and critical challenges like 
                climate prediction remained underserved.
              </p>
              <p className="text-gray-400 mb-4">
                What started as a student-driven initiative has evolved into
                India&apos;s first AI-assisted photonics platform. We&apos;ve since expanded 
                our mission to include climate intelligence — specifically hail prediction 
                systems for Himachal Pradesh&apos;s vulnerable apple orchards — and quantum 
                research initiatives.
              </p>
              <p className="text-gray-400">
                Today, we&apos;re building the technologies that will shape tomorrow: 
                making advanced photonic design accessible, protecting agricultural 
                communities from extreme weather, and pushing the boundaries of 
                quantum science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/50">
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {roadmap.map((item, index) => (
              <div key={item.phase} className="relative bg-dark-900/50 border border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/50">
                {index < roadmap.length - 1 && (
                  <div className="absolute left-10 top-full w-px h-6 bg-gradient-to-b from-violet-500/50 to-transparent" />
                )}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-violet-400">
                      {item.phase.replace("Phase ", "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
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
                Join Our Mission
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Whether you&apos;re a researcher, student, or industry professional, 
                there&apos;s a place for you in our journey to democratize advanced technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/product" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105">
                  Explore MetaOptics AI
                </a>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-violet-500/50 text-violet-300 font-semibold hover:bg-violet-500/10 transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
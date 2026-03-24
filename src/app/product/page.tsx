import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetaOptics AI - Photonic Design Software",
  description:
    "India's first AI-assisted photonic device simulation and optimization platform. Meta-atom design, RCWA/FDTD workflows, GDS export.",
  openGraph: {
    title: "MetaOptics AI - India's First AI-Assisted Photonics Platform",
    description:
      "AI-assisted simulation & optimization for photonic device design. From weeks to hours.",
  },
};

const features = [
  {
    title: "Meta-Atom / Unit-Cell Design",
    description: "Design and optimize individual meta-atoms and unit cells for photonic metasurfaces with AI-guided parameter selection.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "RCWA & FDTD-Assisted Workflows",
    description: "Integrate rigorous coupled-wave analysis and finite-difference time-domain simulations into streamlined design pipelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "AI-Based Parameter Optimization",
    description: "Leverage machine learning models to automatically explore design spaces and find optimal photonic device parameters.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "GDS Export",
    description: "Export finalized designs directly to GDSII format, ready for fabrication at semiconductor foundries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: "Simulation-to-Fabrication Flow",
    description: "End-to-end pipeline from initial concept through simulation, optimization, and fabrication-ready output.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    ),
  },
  {
    title: "Real-Time Analysis",
    description: "Monitor simulation progress and analyze results in real time with interactive visualization dashboards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const targetUsers = [
  {
    title: "Researchers",
    description: "Accelerate photonic device research with AI-powered simulation and optimization.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Students",
    description: "Access affordable photonic design tools for academic projects and thesis research.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Industry",
    description: "Scale photonic design workflows with enterprise-grade tools and custom integrations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function Product() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-300">Live Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">MetaOptics AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              India&apos;s First AI-Assisted Photonics Platform
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Manual photonic design is slow, expensive, and expert-dependent.
              Our AI-assisted simulation & optimization accelerates photonic device design from weeks to hours.
            </p>
            
            <a
              href="#platform"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105"
            >
              Launch Platform
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Core <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to design, simulate, and fabricate photonic devices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="group bg-dark-900/50 border border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold text-violet-400/60">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Platform Section */}
      <section id="platform" className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Access <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">MetaOptics AI</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start designing photonic devices with AI assistance. Purchase licenses, manage subscriptions, and access the full platform below.
            </p>
          </div>
          
          {/* Platform Embed Container */}
          <div className="relative bg-dark-950 border border-violet-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/10">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-violet-950/80 to-cyan-950/80 border-b border-dark-700">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-sm text-gray-400 font-mono">metaoptics.nskailabs.com</span>
              </div>
              <a
                href="https://nskailabs-metaopticsai-license-server.hf.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-300 text-sm font-medium hover:bg-violet-500/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in New Tab
              </a>
            </div>
            
            {/* Iframe */}
            <div className="relative" style={{ paddingTop: '75%' }}>
              <iframe
                src="https://dghfngbdfvxc-metaopticsai-license-server.hf.space/"
                className="absolute inset-0 w-full h-full"
                title="MetaOptics AI Platform"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            All payments and license management are handled securely through the platform above.
          </p>
        </div>
      </section>

      {/* Target Users */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Built For <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">You</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {targetUsers.map((user) => (
              <div key={user.title} className="bg-dark-900/50 border border-dark-700 rounded-2xl p-8 text-center transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-400 mb-4">
                  {user.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {user.title}
                </h3>
                <p className="text-sm text-gray-400">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-violet-950/30 via-dark-900 to-cyan-950/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions? <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Let&apos;s Talk</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Need help getting started or have questions about enterprise licensing?
              Our team is here to help.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-violet-500/50 text-violet-300 font-semibold hover:bg-violet-500/10 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

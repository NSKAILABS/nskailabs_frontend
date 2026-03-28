import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore open-source research and tutorials on metasurfaces, flat optics, and computational photonics from the NSKAILabs community.",
};

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE || "https://discord.gg/3adKwxNYw";
const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://substack.com/@nskailabs";

const upcomingTopics = [
  {
    title: "Metasurface Fundamentals",
    description: "Introduction to ultrathin optical devices and how they manipulate light at the nanoscale.",
    icon: "🔬",
  },
  {
    title: "Generalized Laws of Refraction",
    description: "Understanding phase discontinuities and how they enable unprecedented control over light.",
    icon: "📐",
  },
  {
    title: "Flat Lens Design",
    description: "Principles and techniques for designing metalenses that focus light without curvature.",
    icon: "🔍",
  },
  {
    title: "Phase Gradient Engineering",
    description: "How to design nanostructures that impart specific phase profiles to transmitted light.",
    icon: "⚡",
  },
  {
    title: "Computational Methods",
    description: "Simulation tools and algorithms for modeling metasurface behavior and optimization.",
    icon: "💻",
  },
  {
    title: "Fabrication Techniques",
    description: "Overview of nanofabrication methods used to create metasurfaces in the lab.",
    icon: "🛠️",
  },
];

const whatToExpect = [
  "In-depth explanations of key papers in the field",
  "Step-by-step tutorials on simulation tools",
  "Code examples and Jupyter notebooks",
  "Visual guides to complex optical phenomena",
  "Community-contributed research notes",
  "Curated reading lists for different skill levels",
];

export default function ResearchPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-primary-400">Coming Soon</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Research & <span className="gradient-text">Tutorials</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              We&apos;re building an open-source library of research explanations, tutorials, 
              and tools for the nanophotonics community. Subscribe to get notified when we launch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FF6719] text-white font-semibold hover:bg-[#E55A14] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Subscribe for Updates
              </a>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#5865F2]/50 text-[#5865F2] font-semibold hover:bg-[#5865F2]/10 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Contribute via Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Topics Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Upcoming <span className="gradient-text">Topics</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here&apos;s a preview of the research areas we&apos;ll be covering. 
            Have suggestions? Let us know on Discord!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingTopics.map((topic) => (
              <div
                key={topic.title}
                className="bg-dark-800/50 border border-dark-700 rounded-xl p-6 hover:border-primary-500/30 transition-colors"
              >
                <span className="text-3xl mb-4 block">{topic.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{topic.title}</h3>
                <p className="text-gray-400 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What to <span className="gradient-text">Expect</span>
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-8">
              <ul className="space-y-4">
                {whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-950/30 via-dark-900 to-accent-950/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to contribute?
            </h2>
            <p className="text-gray-400 mb-8">
              We&apos;re looking for contributors to help explain research papers, write tutorials, 
              and build open-source tools. Join our Discord to get started.
            </p>
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Join Discord Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

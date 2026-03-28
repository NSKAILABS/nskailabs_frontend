import type { Metadata } from "next";
import DiscordCard from "@/components/community/DiscordCard";
import SubstackCard from "@/components/community/SubstackCard";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the NSKAILabs community on Discord and Substack. Connect with researchers and students exploring nanophotonics and metasurfaces.",
};

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE || "https://discord.gg/3adKwxNYw";
const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://substack.com/@nskailabs";

const discordChannels = [
  {
    name: "#general",
    description: "Introduce yourself and chat with the community",
  },
  {
    name: "#research",
    description: "Discuss papers, share findings, and ask questions",
  },
  {
    name: "#help",
    description: "Get help with simulations, code, or concepts",
  },
  {
    name: "#tools",
    description: "Share and discuss open-source photonics tools",
  },
];

const substackContent = [
  "Research paper breakdowns and explanations",
  "Tutorials on simulation tools and techniques",
  "Community highlights and contributor spotlights",
  "Announcements about new tools and resources",
  "Curated reading lists and learning paths",
];

const contributeWays = [
  {
    title: "Write Explanations",
    description: "Help break down complex papers into accessible tutorials for the community.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Build Tools",
    description: "Contribute to open-source simulation and design tools for photonics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Answer Questions",
    description: "Help fellow community members by answering questions on Discord.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Share Resources",
    description: "Curate and share papers, videos, and resources with the community.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
];

export default function CommunityPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Connect with researchers and students from around the world exploring 
              nanophotonics, metasurfaces, and computational photonics.
            </p>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 mb-4">
                  <svg className="w-4 h-4 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                  <span className="text-sm font-medium text-[#5865F2]">Discord Community</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  Real-time discussions and collaboration
                </h2>
                <p className="text-gray-400 mb-6">
                  Our Discord server is the heart of the community. Ask questions, share your research, 
                  get feedback on simulations, and connect with others who share your interests.
                </p>
                
                <div className="space-y-3 mb-8">
                  {discordChannels.map((channel) => (
                    <div key={channel.name} className="flex items-start gap-3">
                      <span className="text-[#5865F2] font-mono text-sm mt-0.5">{channel.name}</span>
                      <span className="text-gray-400 text-sm">— {channel.description}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                  Join Discord Server
                </a>
              </div>
              
              <div className="hidden lg:block">
                <div className="bg-dark-800/50 border border-[#5865F2]/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-dark-700">
                    <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">NSKAILabs</h4>
                      <p className="text-xs text-gray-500">Nanophotonics Community</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-dark-700/50 rounded-lg p-3">
                      <p className="text-sm text-gray-400">
                        <span className="text-[#5865F2] font-medium">@researcher</span>: Just finished reading the metasurface paper. The phase gradient explanation was so helpful! 🙌
                      </p>
                    </div>
                    <div className="bg-dark-700/50 rounded-lg p-3">
                      <p className="text-sm text-gray-400">
                        <span className="text-primary-400 font-medium">@student</span>: Can anyone recommend a good starting point for learning about flat lenses?
                      </p>
                    </div>
                    <div className="bg-dark-700/50 rounded-lg p-3">
                      <p className="text-sm text-gray-400">
                        <span className="text-accent-400 font-medium">@contributor</span>: Working on a new simulation tool. Would love some feedback from the community!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Substack Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 hidden lg:block">
                <div className="bg-dark-800/50 border border-[#FF6719]/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-dark-700">
                    <div className="w-10 h-10 rounded-full bg-[#FF6719]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF6719]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">NSKAILabs</h4>
                      <p className="text-xs text-gray-500">Newsletter</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-dark-700/50 rounded-lg p-4">
                      <p className="text-xs text-[#FF6719] font-medium mb-1">LATEST POST</p>
                      <h5 className="text-white font-medium mb-1">Understanding Metasurface Phase Control</h5>
                      <p className="text-sm text-gray-400">A deep dive into how nanostructures manipulate the phase of light...</p>
                    </div>
                    <div className="bg-dark-700/50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 font-medium mb-1">PREVIOUS</p>
                      <h5 className="text-white font-medium mb-1">Getting Started with FDTD Simulations</h5>
                      <p className="text-sm text-gray-400">A beginner&apos;s guide to running your first photonics simulation...</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6719]/20 border border-[#FF6719]/30 mb-4">
                  <svg className="w-4 h-4 text-[#FF6719]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                  <span className="text-sm font-medium text-[#FF6719]">Substack Newsletter</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  In-depth content delivered to your inbox
                </h2>
                <p className="text-gray-400 mb-6">
                  Subscribe to our Substack for regular updates on research, tutorials, and community news. 
                  Perfect for staying up to date without checking Discord every day.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {substackContent.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#FF6719] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FF6719] text-white font-semibold hover:bg-[#E55A14] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                  Subscribe on Substack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ways to <span className="gradient-text">Contribute</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              NSKAILabs is a community-driven project. Here&apos;s how you can get involved 
              and help make nanophotonics more accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contributeWays.map((way) => (
              <div key={way.title} className="card-dark text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 mb-4">
                  {way.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{way.title}</h3>
                <p className="text-gray-400 text-sm">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Coming Soon */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-400">Coming Soon</span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">GitHub Organization</h3>
              <p className="text-gray-400 mb-6">
                We&apos;re setting up our GitHub organization with open-source tools and 
                resources for the nanophotonics community. Stay tuned!
              </p>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
              >
                Get notified on Discord
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NSKAILabs - an open-source nanophotonics research community founded to make metasurface research accessible to everyone.",
};

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE || "https://discord.gg/3adKwxNYw";
const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://substack.com/@nskailabs";

const whatWeDo = [
  {
    title: "Research Explanations",
    description:
      "Breaking down complex academic papers into accessible tutorials and explanations for students and researchers at all levels.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Open-Source Tools",
    description:
      "Building and curating computational tools for photonics simulation, metasurface design, and optical analysis.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Community Building",
    description:
      "Connecting researchers, students, and enthusiasts worldwide through Discord discussions and collaborative projects.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const getInvolved = [
  {
    title: "Join Discord",
    description: "Connect with the community, ask questions, and collaborate.",
    href: discordUrl,
    external: true,
    color: "#5865F2",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    title: "Subscribe on Substack",
    description: "Get updates on research, tutorials, and community news.",
    href: substackUrl,
    external: true,
    color: "#FF6719",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    description: "Contribute to our open-source projects and tools.",
    href: "#",
    external: false,
    comingSoon: true,
    color: "#6e7681",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">NSKAILabs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              An open-source research community dedicated to making nanophotonics 
              and metasurface research accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Nanophotonics and metasurfaces represent one of the most exciting frontiers in 
                modern physics and engineering. These ultrathin optical devices can manipulate 
                light in ways that were once thought impossible — bending it at arbitrary angles, 
                focusing it with unprecedented precision, and creating optical effects that 
                challenge our intuitions about how light behaves.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Yet despite their revolutionary potential, these topics remain largely inaccessible 
                to students and early-career researchers. Academic papers are dense, computational 
                tools are scattered, and there&apos;s a lack of community spaces where people can 
                learn together.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                NSKAILabs exists to change that. We&apos;re building an open-source community where 
                anyone can learn about metasurfaces, contribute to research explanations, and 
                collaborate on tools that push the field forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What We <span className="gradient-text">Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whatWeDo.map((item) => (
              <div key={item.title} className="card-dark text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Meet the <span className="gradient-text">Founder</span>
            </h2>
            <div className="card-dark inline-block">
              <div className="flex flex-col items-center p-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-3xl font-bold text-white mb-4">
                  DG
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Dishant Gupta</h3>
                <p className="text-primary-400 font-medium mb-2">Founder, NSKAILabs</p>
                <p className="text-gray-400 text-sm mb-4">
                  Final Year B.Tech Physics<br />
                  NIT Hamirpur
                </p>
                <p className="text-gray-400 text-sm max-w-md">
                  Passionate about making cutting-edge physics research accessible to everyone. 
                  Building NSKAILabs to create an open community around nanophotonics and metasurfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get <span className="gradient-text">Involved</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {getInvolved.map((item) => (
              <div
                key={item.title}
                className="bg-dark-900/50 border border-dark-700 rounded-xl p-6 hover:border-opacity-50 transition-colors"
                style={{ borderColor: item.comingSoon ? undefined : `${item.color}30` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  {item.title}
                  {item.comingSoon && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-400">
                      Coming Soon
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                {!item.comingSoon && (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: item.color }}
                  >
                    {item.title.includes("Discord") ? "Join Server" : "Subscribe"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions or want to collaborate? Reach out through our community channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Ask on Discord
              </a>
              <a
                href={substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#FF6719]/50 text-[#FF6719] font-semibold hover:bg-[#FF6719]/10 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Follow on Substack
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

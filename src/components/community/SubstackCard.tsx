interface SubstackCardProps {
  compact?: boolean;
}

const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://substack.com/@nskailabs";

export default function SubstackCard({ compact = false }: SubstackCardProps) {
  if (compact) {
    return (
      <a
        href={substackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6719]/20 border border-[#FF6719]/30 text-[#FF6719] hover:bg-[#FF6719]/30 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
        <span className="font-medium">Subscribe</span>
      </a>
    );
  }

  return (
    <div className="bg-dark-900/50 border border-[#FF6719]/30 rounded-2xl p-6 hover:border-[#FF6719]/50 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#FF6719]/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-[#FF6719]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Subscribe on Substack</h3>
          <p className="text-sm text-gray-400">Get updates in your inbox</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        Subscribe for research updates, tutorials, interesting papers in the field, 
        community highlights, and open-source tool releases.
      </p>
      <a
        href={substackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-[#FF6719] text-white font-semibold hover:bg-[#E55A14] transition-colors"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
        Subscribe on Substack
      </a>
    </div>
  );
}

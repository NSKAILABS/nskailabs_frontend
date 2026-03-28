import Link from "next/link";

interface ComingSoonCardProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
}

export default function ComingSoonCard({
  title,
  description,
  ctaText,
  ctaHref,
  ctaExternal = false,
}: ComingSoonCardProps) {
  return (
    <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
        </span>
        <span className="text-xs font-medium text-primary-400">Coming Soon</span>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      {ctaText && ctaHref && (
        ctaExternal ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )
      )}
    </div>
  );
}

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  highlight?: string
  tagline?: string
  rotation?: number
  variant?: 'default' | 'hero'
}

export function SectionHeader({
  title,
  highlight,
  tagline,
  rotation = -2,
  variant = 'default',
}: SectionHeaderProps) {
  if (variant === 'hero') {
    return (
      <div className="relative mb-16 md:mb-24">
        {/* Scribble Arrow */}
        <div className="absolute -top-10 -left-6 md:-left-20 transform -rotate-12 opacity-80 z-0">
          <svg
            className="text-primary-container"
            fill="none"
            height="180"
            viewBox="0 0 200 200"
            width="180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 160C40 160 60 40 160 40M160 40L140 30M160 40L170 60"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-headline font-black text-7xl md:text-9xl tracking-tighter uppercase text-white leading-none relative z-10"
        >
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-primary-container">{highlight}</span>
            </>
          )}
        </h2>

        {/* Tagline */}
        {tagline && (
          <p className="font-marker text-hot-pink text-2xl md:text-4xl mt-4 -rotate-2 transform translate-x-4"
          >
            {tagline}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="mb-8"
    >
      <div
        className={cn(
          'inline-block bg-primary-container text-on-primary-container',
          'px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none"
        >
          {title}
        </h2>
      </div>

      {tagline && (
        <p className="font-mono text-lg md:text-xl max-w-md mt-6 opacity-80 leading-tight"
        >
          {tagline}
        </p>
      )}
    </div>
  )
}

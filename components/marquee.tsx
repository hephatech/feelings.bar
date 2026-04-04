interface MarqueeProps {
  text: string
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
}

const speedStyles = {
  slow: 'animate-marquee-slow',
  normal: 'animate-marquee',
  fast: 'animate-marquee-fast',
}

export function Marquee({ text, className, speed = 'normal' }: MarqueeProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-8 bg-black flex items-center overflow-hidden"
    >
      <div
        className={[
          'whitespace-nowrap font-headline font-black text-xs text-primary tracking-widest px-4',
          speedStyles[speed],
        ].join(' ')}
      >
        {text}
      </div>
    </div>
  )
}

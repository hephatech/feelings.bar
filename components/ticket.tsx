import { cn } from '@/lib/utils'

interface TicketProps {
  day: string
  month: string
  time: string
  title: string
  subtitle?: string
  price?: string
  children?: React.ReactNode
  variant?: 'primary' | 'dark' | 'sold-out'
  rotation?: number
  stamp?: 'sold-out' | 'free' | 'hot'
}

export function Ticket({
  day,
  month,
  time,
  title,
  subtitle,
  price,
  children,
  variant = 'primary',
  rotation = 0,
  stamp,
}: TicketProps) {
  const variantStyles = {
    primary: 'bg-primary-container text-black',
    dark: 'bg-surface-container-highest border-4 border-white text-white',
    'sold-out': 'bg-surface-container-highest border-4 border-white/30 text-white/50',
  }

  const stampContent = {
    'sold-out': { text: 'SOLD OUT', color: 'border-hot-pink text-hot-pink' },
    'free': { text: 'FREE!', color: 'border-hot-pink text-hot-pink' },
    'hot': { text: 'HOT!', color: 'border-primary-container text-primary-container' },
  }

  return (
    <div
      className={cn(
        'relative p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
        'ticket-jagged-right paper-texture',
        'transition-transform duration-300 hover:rotate-0',
        variantStyles[variant]
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Stamp */}
      {stamp && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className={cn(
            'border-8 font-headline font-black text-6xl md:text-8xl',
            'px-12 py-4 uppercase -rotate-12 opacity-90 scale-110',
            stampContent[stamp].color
          )}>
            {stampContent[stamp].text}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Date Column */}
        <div className={cn(
          'md:w-1/3 flex flex-col justify-center',
          'border-b-2 md:border-b-0 md:border-r-2 border-dashed',
          variant === 'primary' ? 'border-black/30' : 'border-white/20',
          'pb-6 md:pb-0 md:pr-8'
        )}>
          <span className="font-headline font-black text-6xl leading-none">{day}</span>
          <span className="font-marker text-2xl uppercase">{month}</span>
          <div className="mt-4 font-bold text-lg">{time}</div>
          {price && <div className="mt-2 font-bold">{price}</div>}
        </div>

        {/* Content Column */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <h3 className="font-headline font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-2">
            {title}
          </h3>
          {subtitle && (
            <p className={cn(
              'font-mono text-lg',
              variant === 'primary' ? 'opacity-80' : 'opacity-60'
            )}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

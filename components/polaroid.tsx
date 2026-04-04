import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PolaroidProps {
  imageUrl: string
  alt: string
  caption?: string
  rotation?: number
  size?: 'sm' | 'md' | 'lg'
  tape?: 'none' | 'top' | 'bottom' | 'corners' | 'custom'
  customTape?: ReactNode
  grayscale?: boolean
  aspectRatio?: 'square' | 'portrait' | 'video' | 'four-five'
  className?: string
  children?: ReactNode
}

const sizeStyles = {
  sm: 'w-48',
  md: 'w-64',
  lg: 'w-80',
}

const aspectStyles = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  video: 'aspect-video',
  'four-five': 'aspect-[4/5]',
}

export function Polaroid({
  imageUrl,
  alt,
  caption,
  rotation = 0,
  size = 'md',
  tape = 'none',
  customTape,
  grayscale = false,
  aspectRatio = 'square',
  className,
  children,
}: PolaroidProps) {
  return (
    <div
      className={cn(
        'bg-white p-3 md:p-4 pb-10 md:pb-12',
        'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
        'transition-transform duration-500',
        'hover:rotate-0',
        sizeStyles[size],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Image Container */}
      <div className={cn(
        'relative overflow-hidden mb-3',
        'bg-surface-container polaroid-inner-glow',
        aspectStyles[aspectRatio]
      )}
      >
        <img
          src={imageUrl}
          alt={alt}
          className={cn(
            'w-full h-full object-cover',
            grayscale && 'grayscale',
            'transition-all duration-700',
            'hover:grayscale-0'
          )}
        />

        {/* Tape */}
        {tape === 'top' && (
          <>
            <div className="absolute -top-2 -left-4 w-12 h-6 masking-tape -rotate-45" />
            <div className="absolute -top-2 -right-4 w-12 h-6 masking-tape rotate-45" />
          </>
        )}
        {tape === 'bottom' && (
          <>
            <div className="absolute -bottom-2 -left-4 w-12 h-6 masking-tape rotate-12" />
            <div className="absolute -bottom-2 -right-4 w-12 h-6 masking-tape -rotate-12" />
          </>
        )}
        {tape === 'corners' && (
          <>
            <div className="absolute -top-2 -left-4 w-12 h-6 masking-tape -rotate-45" />
            <div className="absolute -top-2 -right-4 w-12 h-6 masking-tape rotate-45" />
            <div className="absolute -bottom-2 -left-4 w-12 h-6 masking-tape rotate-12" />
            <div className="absolute -bottom-2 -right-4 w-12 h-6 masking-tape -rotate-12" />
          </>
        )}
        {tape === 'custom' && customTape}
        {children}
      </div>

      {/* Caption */}
      {caption && (
        <p className="font-marker text-black text-center text-2xl">
          {caption}
        </p>
      )}
    </div>
  )
}

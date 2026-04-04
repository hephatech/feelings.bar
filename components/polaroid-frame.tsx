// Server Component - Polaroid Frame
// Displays content in a polaroid-style frame with optional rotation

import { cn } from '@/lib/utils'

interface PolaroidFrameProps {
  children?: React.ReactNode
  caption?: string
  rotation?: number
  className?: string
  imageUrl?: string
  imageAlt?: string
  aspectRatio?: '4/5' | '1/1' | '16/9'
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'max-w-xs',
  md: 'max-w-md',
  lg: 'max-w-lg',
}

export default function PolaroidFrame({
  children,
  caption,
  rotation = 0,
  className,
  imageUrl,
  imageAlt = 'Image',
  aspectRatio = '4/5',
  size = 'md',
}: PolaroidFrameProps) {
  return (
    <div
      className={cn(
        'bg-white p-4 pb-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
        'w-full grainy-overlay',
        sizeClasses[size],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {imageUrl ? (
        <div
          className={cn(
            'overflow-hidden bg-black relative',
            aspectRatio === '4/5' && 'aspect-[4/5]',
            aspectRatio === '1/1' && 'aspect-square',
            aspectRatio === '16/9' && 'aspect-video'
          )}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover grayscale brightness-75 contrast-125 mix-blend-screen opacity-90"
          />
          <div className="absolute inset-0 bg-[#fddc00]/5 mix-blend-multiply" />
        </div>
      ) : (
        children
      )}

      {caption && (
        <div className="mt-6 font-mono text-black text-center text-sm font-bold italic">
          {caption}
        </div>
      )}
    </div>
  )
}

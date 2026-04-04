// Server Component - Splash Splatters
// Decorative blurred circles for background ambiance

import { cn } from '@/lib/utils'

interface SplatterProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg'
  opacity?: number
  className?: string
}

const positionClasses = {
  'top-left': 'top-1/4 -left-10',
  'top-right': 'top-1/3 -right-10',
  'bottom-left': 'bottom-1/4 -left-5',
  'bottom-right': 'bottom-1/3 -right-5',
}

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-32 h-32',
  lg: 'w-48 h-48',
}

function Splatter({ position, size = 'md', opacity = 0.2, className }: SplatterProps) {
  return (
    <div
      className={cn(
        'absolute blur-3xl rounded-full pointer-events-none',
        positionClasses[position],
        sizeClasses[size],
        className
      )}
      style={{ backgroundColor: `rgba(253, 220, 0, ${opacity})` }}
    />
  )
}

interface SplashSplattersProps {
  showTopLeft?: boolean
  showTopRight?: boolean
  showBottomLeft?: boolean
  showBottomRight?: boolean
}

export default function SplashSplatters({
  showTopLeft = true,
  showTopRight = false,
  showBottomLeft = false,
  showBottomRight = true,
}: SplashSplattersProps) {
  return (
    <>
      {showTopLeft && <Splatter position="top-left" size="md" opacity={0.2} />}
      {showTopRight && <Splatter position="top-right" size="sm" opacity={0.15} />}
      {showBottomLeft && <Splatter position="bottom-left" size="sm" opacity={0.1} />}
      {showBottomRight && <Splatter position="bottom-right" size="lg" opacity={0.1} />}
    </>
  )
}

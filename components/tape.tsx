// Server Component - Tape Effect
// Visual tape element for scrapbook aesthetic

import { cn } from '@/lib/utils'

interface TapeProps {
  className?: string
  rotation?: number
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  width?: number
  height?: number
}

export default function Tape({
  className,
  rotation = 0,
  position = 'top-left',
  width = 80,
  height = 32,
}: TapeProps) {
  const positionClasses = {
    'top-left': '-top-4 -left-4',
    'top-right': '-top-4 -right-4',
    'bottom-left': '-bottom-4 -left-4',
    'bottom-right': '-bottom-4 -right-4',
  }

  return (
    <div
      className={cn(
        'absolute tape z-20 opacity-80',
        positionClasses[position],
        className
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  )
}

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ScrapbookCardProps {
  children: ReactNode
  rotation?: number
  className?: string
  variant?: 'default' | 'primary' | 'dark' | 'white'
  shadow?: 'sm' | 'md' | 'lg' | 'xl'
  jaggedEdge?: 'none' | 'right' | 'left'
  paperTexture?: boolean
}

const variantStyles = {
  default: 'bg-surface-container-highest text-white',
  primary: 'bg-primary-container text-black',
  dark: 'bg-surface-container-highest border-4 border-white text-white',
  white: 'bg-white text-black',
}

const shadowStyles = {
  sm: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  md: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
  lg: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
  xl: 'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
}

export function ScrapbookCard({
  children,
  rotation = 0,
  className,
  variant = 'default',
  shadow = 'lg',
  jaggedEdge = 'none',
  paperTexture = false,
}: ScrapbookCardProps) {
  return (
    <div
      className={cn(
        'relative p-6 md:p-8 transition-transform duration-300',
        variantStyles[variant],
        shadowStyles[shadow],
        jaggedEdge === 'right' && 'ticket-jagged-right',
        jaggedEdge === 'left' && 'ticket-jagged-left',
        paperTexture && 'paper-texture',
        rotation !== 0 && `rotate-[${rotation}deg]`,
        'hover:rotate-0',
        className
      )}
      style={{ transform: rotation !== 0 ? `rotate(${rotation}deg)` : undefined }}
    >
      {children}
    </div>
  )
}

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BrutalistButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'dark' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  rotation?: number
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variantStyles = {
  primary: 'bg-black text-primary-container hover:bg-gray-900',
  dark: 'bg-primary-container text-black hover:bg-yellow-400',
  outline: 'bg-transparent border-4 border-white text-white hover:bg-white/10',
  ghost: 'bg-transparent text-white hover:text-primary-container',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function BrutalistButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  rotation = 0,
  className,
  type = 'button',
}: BrutalistButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'font-headline font-black uppercase tracking-tighter',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        'transition-all duration-200',
        'hover:translate-x-[2px] hover:translate-y-[2px]',
        'hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
        'active:translate-x-[4px] active:translate-y-[4px]',
        'active:shadow-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{ transform: rotation !== 0 ? `rotate(${rotation}deg)` : undefined }}
    >
      {children}
    </button>
  )
}

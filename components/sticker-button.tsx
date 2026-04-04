// Client Component - Sticker Button
// Interactive button with sticker aesthetic

'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

interface StickerButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  rotation?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

const sizeClasses = {
  sm: 'text-sm px-4 py-2',
  md: 'text-xl px-8 py-4',
  lg: 'text-2xl px-10 py-5',
}

export default function StickerButton({
  children,
  onClick,
  href,
  rotation = -5,
  size = 'md',
  className,
  type = 'button',
}: StickerButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    onClick?.()
  }

  const baseClasses = cn(
    'bg-primary-container text-black font-black font-headline',
    'shadow-hard-lg transition-all uppercase',
    'hover:translate-y-1 hover:shadow-hard active:translate-y-2 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    sizeClasses[size],
    className
  )

  const style = {
    transform: `rotate(${rotation}deg) ${isPressed ? 'translate(2px, 2px)' : ''}`,
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} style={style}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={baseClasses}
      style={style}
    >
      {children}
    </button>
  )
}

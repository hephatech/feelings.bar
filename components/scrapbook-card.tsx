// Server Component - Scrapbook Card
// Used for content entries with border-top styling

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ScrapbookCardProps {
  entryNumber: string
  title: string
  description: string
  href?: string
  linkText?: string
  variant?: 'primary' | 'default'
  className?: string
}

export default function ScrapbookCard({
  entryNumber,
  title,
  description,
  href,
  linkText = 'Read more →',
  variant = 'default',
  className,
}: ScrapbookCardProps) {
  const borderColor = variant === 'primary' ? 'border-primary-container' : 'border-outline-variant'
  const titleColor = variant === 'primary' ? 'text-primary-container' : 'text-on-surface-variant'

  return (
    <div className={cn('border-t-2 pt-4', borderColor, className)}>
      <h3 className={cn('font-mono text-xs font-bold mb-2 uppercase tracking-widest', titleColor)}>
        {entryNumber}: {title}
      </h3>
      <p className="text-on-surface-variant font-body">{description}</p>
      {href && (
        <Link
          href={href}
          className="inline-block mt-4 font-headline font-bold text-sm uppercase hover:underline decoration-primary-container decoration-4 underline-offset-4"
        >
          {linkText}
        </Link>
      )}
    </div>
  )
}

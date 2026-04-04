// ============================================================================
// COMPONENT ARCHITECTURE
// ============================================================================
//
// Server Components (default): No 'use client' directive
// - page.tsx, layout.tsx
// - Data fetching components
// - Static content
//
// Client Components: 'use client' directive
// - Interactive elements (buttons with onClick)
// - Forms
// - Animations that require useState/useEffect
//
// ============================================================================

export { default as PolaroidFrame } from './polaroid-frame'
export { default as ScrapbookCard } from './scrapbook-card'
export { default as StickerButton } from './sticker-button'
export { default as Tape } from './tape'
export { default as NoiseBackground } from './noise-background'
export { default as SplashSplatters } from './splash-splatters'

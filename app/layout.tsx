import type { Metadata } from 'next'
import { getSiteMetadata } from '@/lib/boneyard'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteMetadata()
  
  return {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    keywords: ['bar', 'cocktails', 'nightlife', 'music', 'events'],
    authors: [{ name: site.name }],
    openGraph: {
      title: site.name,
      description: site.description,
      type: 'website',
      locale: 'en_US',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700;900&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Permanent+Marker&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased min-h-screen overflow-x-hidden bg-surface text-on-surface font-headline">
        {children}
      </body>
    </html>
  )
}

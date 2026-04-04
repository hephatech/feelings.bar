import type { ProjectConfig } from '@hephatech/core'

export default {
  name: 'feelings-bar',
  description: 'Bar website with cocktail menu, events, and reservations',
  defaultCollections: ['users', 'customers', 'bookings', 'media', 'pages', 'navigation', 'menu', 'events'],
  defaultComponents: ['button', 'card', 'form', 'input', 'label', 'dialog'],
} satisfies ProjectConfig

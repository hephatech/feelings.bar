import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

// Simplified config - Payload collections will be added when needed
export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'development-secret',
  collections: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/feelings_bar',
    },
  }),
})

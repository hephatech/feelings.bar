/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */

import { RootLayout } from '@payloadcms/next/layouts'
import type { ServerFunctionClient } from 'payload'
import type React from 'react'

import { importMap } from './importMap'
import './styles.css'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async (args) => {
  'use server'
  const { renderRSC, payloadRequest } = args
  const result = await renderRSC({
    payloadRequest,
  })

  return result
}

const Layout = ({ children }: Args) => (
  <RootLayout
    configPath="../../../../payload.config.ts"
    importMap={importMap}
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
)

export default Layout

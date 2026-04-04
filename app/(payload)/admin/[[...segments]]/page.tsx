/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

import { generatePageMetadata, RootPage } from '@payloadcms/next/views'
import type { Metadata } from 'next'
import { importMap } from './importMap'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({
    configPath: '../../../payload.config.ts',
    params,
    searchParams,
  })

const Page = ({ params, searchParams }: Args) =>
  RootPage({
    configPath: '../../../payload.config.ts',
    importMap,
    params,
    searchParams,
  })

export default Page

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  perspective: 'published', // Only fetch published documents
  stega: {
    enabled: false, // Disable for production
    studioUrl: '/admin',
  },
})

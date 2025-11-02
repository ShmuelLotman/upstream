import { serve } from 'inngest/next'
import { inngest } from '@/inngest/client'
import { createWorkflow } from '@/inngest/functions'

export const { GET, PUT, POST } = serve({
  client: inngest,
  functions: [createWorkflow],
})

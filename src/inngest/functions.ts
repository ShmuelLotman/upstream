import prisma from '@/lib/database'
import { inngest } from './client'

export const createWorkflow = inngest.createFunction(
  {
    id: 'createWorkflow',
  },
  { event: 'workflow.created' },
  async ({ event, step }) => {
    await step.run('createWorkflow', async () => {
      return prisma.workflow.create({
        data: {
          name: 'foobar',
        },
      })
    })
  }
)

import { inngest } from '@/inngest/client'
import { createTRPCRouter, protectedProcedure } from '../init'
import prisma from '@/lib/database'

export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    })
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany()
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: 'workflow.created',
      data: {
        workflowId: '123',
      },
    })

    return {
      success: true,
      message: 'Workflow queued for creation',
    }
  }),
})
// export type definition of API
export type AppRouter = typeof appRouter

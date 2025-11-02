'use client'
import { useTRPC } from '@/trpc/client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

export default function Home() {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.getWorkflows.queryOptions())

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success('Workflow queued for creation')
      },
    })
  )

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Upstream</h1>
      {JSON.stringify(data)}
      <button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </button>
    </div>
  )
}

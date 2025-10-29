import { SignupForm } from '@/features/auth/components/signup-form'
import { requireGuest } from '@/lib/auth-utils'

const SignupPage = async () => {
  await requireGuest()
  return <SignupForm />
}

export default SignupPage

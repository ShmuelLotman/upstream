import { requireGuest } from '@/lib/auth-utils'
import { LoginForm } from '@/features/auth/components/login-form'

const LoginPage = async () => {
  await requireGuest()
  return <LoginForm />
}

export default LoginPage

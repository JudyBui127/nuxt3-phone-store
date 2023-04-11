export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth()
  const router = useRouter()

  if (!auth.value.isAuthenticated) {
    router.push('/login')
  }
})
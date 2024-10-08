import { useMutation } from '@tanstack/react-query'
import { Eye, EyeOff, KeySquare, Mail, MoveRight } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import Cookies from 'universal-cookie'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { env } from '@/env'
import { cn } from '@/lib/utils'

const SignInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
type SignInForm = z.infer<typeof SignInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const [showPassword, setShowPassoword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
      password: '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      const response = await authenticate({
        email: data.email,
        password: data.password,
      })
      console.log(env.VITE_API_URL)
      const cookies = new Cookies(null, { path: '/' })
      cookies.set('auth', response.accessToken)
    } catch {
      toast.error('Credenciais inválidas')
    }
  }

  function handleShowPassword(e: FormEvent<SVGSVGElement>) {
    e.preventDefault()

    setShowPassoword(!showPassword)
  }

  const email = watch('email')
  const password = watch('password')
  return (
    <>
      <Helmet title="Login" />
      <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-white p-20">
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex h-[350px] w-full flex-col justify-between"
        >
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Acesse sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Informe seu e-mail e senha para entrar
            </p>
          </div>
          <div>
            <div className="group">
              <Label
                className="group-has-[#email:focus]:text-orange-base dark:text-orange-dark"
                htmlFor="email"
              >
                E-mail
              </Label>
              <div className="relative mb-6">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-0.5">
                  <Mail
                    className={cn(
                      'h-4 w-4 text-gray-200 group-has-[#email:focus]:text-orange-base dark:text-orange-dark',
                      email.length && 'text-orange-base',
                    )}
                  />
                </div>
                <Input
                  id="email"
                  type="email"
                  hasPrependIcon
                  autoComplete="username"
                  placeholder="Seu e-mail cadastrado"
                  {...register('email')}
                />
              </div>
            </div>

            <div className="group">
              <Label
                className="group-has-[#password:focus]:text-orange-base dark:text-orange-dark"
                htmlFor="password"
              >
                Senha
              </Label>
              <div className="relative mb-6">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-1">
                  <KeySquare
                    className={cn(
                      'h-4 w-4 text-gray-200 group-has-[#password:focus]:text-orange-base dark:text-orange-dark',
                      password.length && 'text-orange-base',
                    )}
                  />
                </div>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  hasAppendIcon
                  hasPrependIcon
                  autoComplete="current-password"
                  placeholder="Sua senha de acesso"
                  {...register('password')}
                />

                <div className="pointer-events-none absolute inset-y-0 start-0 flex w-full items-center justify-end pe-1">
                  {!showPassword ? (
                    <Eye
                      className="pointer-events-auto h-4 w-4 cursor-pointer text-gray-300 dark:text-gray-100"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <EyeOff
                      className="pointer-events-auto h-4 w-4 cursor-pointer text-gray-300 dark:text-gray-100"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button
              disabled={isSubmitting}
              className="flex w-full items-center justify-between rounded-md bg-orange-base p-5 text-white dark:bg-orange-dark"
            >
              Acessar
              <MoveRight />
            </Button>
          </div>
        </form>
        <div className="space-y-2">
          <p className="text-muted-foreground">Ainda não tem uma conta?</p>

          <Button
            className="flex w-full items-center justify-between rounded-md border-orange-base bg-transparent p-5 text-orange-base dark:border-orange-dark dark:text-orange-dark"
            variant="outline"
            asChild
          >
            <Link to="/sign-up">
              Cadastrar
              <MoveRight />
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

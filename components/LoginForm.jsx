
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-4 py-16 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-zinc-800">
        <div className="flex items-center justify-center">
          <LockIcon className="h-10 w-10 text-zinc-500 dark:text-zinc-400" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-zinc-900 dark:text-white">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6">
          <div>
            <Label className="text-zinc-700 dark:text-zinc-200" htmlFor="email">
              Email address
            </Label>
            <Input
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white sm:text-sm"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <Label className="text-zinc-700 dark:text-zinc-200" htmlFor="password">
              Password
            </Label>
            <Input
              autoComplete="current-password"
              className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white sm:text-sm"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                className="h-4 w-4 rounded border-zinc-300 text-zinc-600 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-700 dark:ring-offset-zinc-800"
                id="remember-me"
                name="remember-me"
              />
              <Label className="ml-2 block text-sm text-zinc-900 dark:text-white" htmlFor="remember-me">
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link className="font-medium text-zinc-600 hover:text-zinc-500 dark:text-zinc-400" href="#">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Don't have an account?
          <Link className="font-semibold text-zinc-600 hover:text-zinc-500 dark:text-zinc-400" href="#">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  )
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
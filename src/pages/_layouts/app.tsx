import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="m-auto flex min-h-screen max-w-[1366px] flex-col antialiased">
      <Header />
      <div className="mt-16 flex-1 flex-col">{<Outlet />}</div>
    </div>
  )
}

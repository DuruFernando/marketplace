import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary data-[current=true]:bg-primary/10 data-[current=true]:text-primary"
      {...props}
    ></Link>
  )
}

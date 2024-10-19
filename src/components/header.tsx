import { LayoutDashboard, Package, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { Button } from './ui/button'

export function Header() {
  return (
    <>
      <div className="border-b">
        <div className="grid h-16 grid-cols-12 items-center px-6">
          <img
            className="col-span-3"
            src="logo-simple.svg"
            alt="Logo marketplace"
          />
          <nav className="col-span-6 flex items-center justify-center space-x-4 lg:space-x-6">
            <NavLink to="/">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink to="/products">
              <Package className="h-4 w-4" />
              Produtos
            </NavLink>
          </nav>
          <div className="col-span-3 flex items-center justify-end space-x-4 lg:space-x-6">
            <Button
              asChild
              className="bg-orange-base font-thin text-white dark:bg-orange-dark"
            >
              <Link to="/new-product">
                <Plus className="mr-2 h-4 w-4 font-light" /> Novo Produto
              </Link>
            </Button>
            <AccountMenu />
          </div>
        </div>
      </div>
    </>
  )
}

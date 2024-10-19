import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          className="flex h-10 w-10 cursor-pointer select-none items-center"
          src="background.png"
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-25 px-5">
        <DropdownMenuLabel className="flex items-center gap-1.5">
          <img className="h-10 w-10" src="background.png" alt="" />
          <span>Fernando Duru Santos</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            className="flex w-full select-none items-center justify-between border-orange-base bg-transparent text-orange-base dark:border-orange-dark dark:text-orange-dark"
            variant="secondary"
          >
            Sair
            <LogOut className="h-4 w-4" />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

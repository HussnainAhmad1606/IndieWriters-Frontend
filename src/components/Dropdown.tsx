import {
    Crown,
    LogOut, User2Icon,

} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from "next/link"
import { DashboardIcon, Link1Icon } from "@radix-ui/react-icons"


export function AvatarDropDown({ logout, userName, role }:any) {

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Avatar>
                        <AvatarImage src="/" />
                        <AvatarFallback>{userName.substring(0,2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-4">
                <DropdownMenuLabel>Hi, {userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        role=="admin"?(
                            <DropdownMenuItem>
                        <Link href={`/admin`} className="flex items-center justify-between">
                            <Crown className="mr-2 h-4 w-4" />
                            <span>Admin Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                        ):null
                    }
                    
                    {
                        role=="writer"?(
                            <DropdownMenuItem>
                        <Link href={`/dashboard`} className="flex items-center justify-between">
                            <DashboardIcon className="mr-2 h-4 w-4" />
                            <span>Writer Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                        ):null
                    }
                    
                    <DropdownMenuItem>
                        <Link href={`/settings`} className="flex items-center justify-between">
                            <User2Icon className="mr-2 h-4 w-4" />
                            <span>Profile Settings</span>
                        </Link>
                    </DropdownMenuItem>
                    
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button onClick={logout} className="flex items-center justify-between">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
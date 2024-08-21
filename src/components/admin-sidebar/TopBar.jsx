import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import image from "@/assets/image_1.png"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function TopBar({ toggle, setToggle }) {
   return (
      <div className='flex items-center sticky top-0 justify-between px-5 z-50 bg-white  py-3'>
         <div className='flex items-center gap-8'>
            <button onClick={() => setToggle(!toggle)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg></button>
            <Link to={'/'} className='text-[20px] font-medium'>  User Management</Link>
         </div>
         <div>
            <DropdownMenu>
               <DropdownMenuTrigger> <Avatar className="ring ring-blue-300">
                  <AvatarImage src={image} alt="@shadcn" />
                  <AvatarFallback>SM</AvatarFallback>
               </Avatar></DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   )
}

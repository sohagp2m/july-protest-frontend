import React, { useState } from 'react'

import image from "@/assets/image_1.png"
import SidebarItems from './SidebarItem';
export default function Sidebar() {
   const [openItems, setOpenItems] = useState({});

   const handleToggle = (label) => {
      setOpenItems((prev) => ({ ...prev, [label]: !prev[label] }));
   };


   const items = [
      {
         to: "/dashboard",
         label: "Dashboard",
         icon: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-6h2v6h-2zm0-8V7h2v4h-2z" /></svg>,
      },
      {
         to: "/admin/dashboard/users",
         label: "Users",
         icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15.8369C19.4559 16.5683 20.7041 17.742 21.6152 19.2096C21.7956 19.5003 21.8858 19.6456 21.917 19.8468C21.9804 20.2558 21.7008 20.7585 21.3199 20.9204C21.1325 21 20.9216 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9852 12 9.49996 12C7.01468 12 4.99996 9.98528 4.99996 7.5C4.99996 5.01472 7.01468 3 9.49996 3C11.9852 3 14 5.01472 14 7.5ZM2.55919 18.9383C4.1535 16.5446 6.66933 15 9.49996 15C12.3306 15 14.8464 16.5446 16.4407 18.9383C16.79 19.4628 16.9646 19.725 16.9445 20.0599C16.9289 20.3207 16.7579 20.64 16.5495 20.7976C16.2819 21 15.9138 21 15.1776 21H3.82232C3.08613 21 2.71804 21 2.4504 20.7976C2.24201 20.64 2.07105 20.3207 2.05539 20.0599C2.03529 19.725 2.20992 19.4628 2.55919 18.9383Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>,
         subItems: [
            {
               to: "/admin/dashboard/users/list",
               label: "Users List",
               icon: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 13h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 17h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 9h2v2H3V9zm4 0h2v2H7V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zM3 5h2v2H3V5zm4 0h2v2H7V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5z" /></svg>,
            },
            {
               to: "/admin/dashboard/users/add",
               label: "Add User",
               icon: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16h-2v-4H6v-2h4V8h2v4h4v2h-4v4zm0-8h-2V8h2v2z" /></svg>,
            }
         ]
      }
   ];






   return (
      <div className='w-72 flex flex-col h-screen bg-white '>

         <div className='flex items-center py-2 justify-center pe-2'>
            <img src={image} alt="" className='w-[180px]' />
         </div>


         <div className='p-0 m-0'>
            {items.map((item, index) => (
               <SidebarItems
                  key={index}
                  to={item.to}
                  label={item.label}
                  subItems={item.subItems}
                  isOpen={!!openItems[item.label]}
                  onToggle={() => handleToggle(item.label)}
                  icon={item.icon}
               />
            ))}
         </div>
      </div>
   )
}


import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const SidebarItems = ({ to, label, subItems, isOpen, onToggle, icon }) => {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   const isSubActive = (path) => pathname === path;

   // Check if any subItems or resubItems are active
   const isActive =
      pathname === to ||
      (subItems &&
         subItems?.some((subItem) => {
            return (
               isSubActive(subItem.to) ||
               (subItem.resubItems &&
                  subItem.resubItems.some((resubItem) => isSubActive(resubItem.to)))
            );
         }));

   // Manage state for each subItem to toggle resubItems visibility
   const [openSubItems, setOpenSubItems] = useState({});

   const handleClick = () => {
      if (subItems) {
         onToggle();
      } else {
         navigate(to);
      }
   };

   const toggleResubItems = (index) => {
      setOpenSubItems((prev) => ({ ...prev, [index]: !prev[index] }));
   };

   return (
      <>
         <div
            onClick={handleClick}
            className={`rounded-[4px] text-[20px] font-normal py-[10px] ps-[10px] pe-[12px] cursor-pointer ${isActive ? "bg-[#F0F4FF]" : ""
               }`}>
            <div className="w-full bg-transparent">
               <p className="flex items-center w-full bg-transparent gap-[16px] h-full">
                  {icon && <span className={`${isActive ? "text-blue-600" : ""}`}>{icon}</span>}
                  {label}
                  {subItems && (
                     <span
                        className={`flex items-center transition-all duration-300 transform justify-center ml-auto ${isActive ? "primary-text" : ""
                           } ${!isOpen ? "rotate-180" : ""}`}>
                        <svg
                           width="14"
                           height="10"
                           viewBox="0 0 14 10"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M12 7.5L7 2.5L2 7.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </span>
                  )}
               </p>
            </div>
         </div>
         {subItems && (
            <div
               className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
               style={{ transitionTimingFunction: "ease-in-out" }}>
               <div className="mt-3 w-full grid gap-1">
                  {subItems?.map((subItem, index) => {
                     const subItemActive =
                        isSubActive(subItem.to) ||
                        (subItem.resubItems &&
                           subItem.resubItems.some((resubItem) => isSubActive(resubItem.to)));
                     const isSubOpen = openSubItems[index] || false;

                     return (
                        <div key={index} className="w-full">
                           <div onClick={() => toggleResubItems(index)}>
                              <NavLink
                                 className={`rounded-[4px] whitespace-nowrap text-[20px] font-normal pl-[24px] flex items-center gap-[4px] py-[10px] pe-[12px] cursor-pointer ${subItemActive ? "bg-[#F0F4FF]" : ""
                                    }`}
                                 to={subItem.to}>
                                 <span className={isActive ? "text-blue-600" : ""}> {subItem.icon}</span> {subItem.label}
                              </NavLink>
                           </div>

                        </div>
                     );
                  })}
               </div>
            </div>
         )}
      </>
   );
};

export default SidebarItems;

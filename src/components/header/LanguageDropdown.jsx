import React, { useState, useRef, useEffect } from "react";

const BanglaIcon = () => (
   <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_126_98)">
         <path d="M0 0H22V22H0V0Z" fill="#006A4E" />
         <path
            d="M9.88282 18.3348C13.9337 18.3348 17.2176 15.0509 17.2176 11C17.2176 6.94911 13.9337 3.66522 9.88282 3.66522C5.83194 3.66522 2.54805 6.94911 2.54805 11C2.54805 15.0509 5.83194 18.3348 9.88282 18.3348Z"
            fill="#F42A41"
         />
      </g>
      <defs>
         <clipPath id="clip0_126_98">
            <rect width="22" height="22" rx="11" fill="white" />
         </clipPath>
      </defs>
   </svg>
);

const EnglishIcon = () => (
   <svg
      width="20"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_117_69)">
         <path d="M0 0H24V24H0V0Z" fill="#012169" />
         <path
            d="M24 0V3L15.0938 12L24 20.7656V24H20.8594L11.9062 15.1875L3.1875 24H0V20.8125L8.71875 12.0469L0 3.46875V0H2.90625L11.9062 8.8125L20.625 0H24Z"
            fill="white"
         />
         <path
            d="M8.625 15.1875L9.14062 16.7812L1.96875 24H0V23.8594L8.625 15.1875ZM14.4375 14.625L16.9688 15L24 21.8906V24L14.4375 14.625ZM24 0L15 9.1875L14.8125 7.125L21.8438 0H24ZM0 0.046875L9.04688 8.90625L6.28125 8.53125L0 2.29688V0.046875Z"
            fill="#C8102E"
         />
         <path
            d="M8.25 0V24H15.75V0H8.25ZM0 8.25V15.75H24V8.25H0Z"
            fill="white"
         />
         <path
            d="M0 9.75V14.25H24V9.75H0ZM9.75 0V24H14.25V0H9.75Z"
            fill="#C8102E"
         />
      </g>
      <defs>
         <clipPath id="clip0_117_69">
            <rect width="24" height="24" rx="12" fill="white" />
         </clipPath>
      </defs>
   </svg>
);

const useClickOutside = (handler) => {
   const domNode = useRef(null);

   useEffect(() => {
      const maybeHandler = (event) => {
         if (domNode.current && !domNode.current.contains(event.target)) {
            handler();
         }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
         document.removeEventListener("mousedown", maybeHandler);
      };
   }, [handler]);

   return domNode;
};

const LanguageDropdown = () => {
   const languages = [
      { label: "বাংলা", value: "bn", icon: <BanglaIcon /> },
      { label: "English", value: "en", icon: <EnglishIcon /> },
   ];

   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
   const domNode = useClickOutside(() => {
      setDropdownOpen(false);
   });

   const handleSelect = (value) => {
      const selectedLang = languages.find((lang) => lang.value === value);
      setSelectedLanguage(selectedLang);
      setDropdownOpen(false);
   };

   const style = {
      boxShadow: "2px 2px 8.5px 1px #143C771A",
   };

   return (
      <div className="flex items-center justify-end w-full space-x-2" ref={domNode}>

         <div className="relative inline-block text-left">
            <button
               onClick={() => setDropdownOpen(!dropdownOpen)}
               className="text-base flex items-center justify-between  font-normal outline-none rounded-[4px]  px-3 py-2 gap-3 lg:w-[134px] placeholder:text-[16px] bg-[#f3f3f3]  placeholder:font-[400] placeholder:text-[#6C6C6C]">
               <p className="flex items-center  text-base font-normal gap-2">  {selectedLanguage.icon}
                  <span className="mt-[2px] hidden lg:block"> {selectedLanguage.label}</span></p>
               <span className="flex items-center justify-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="13"
                     height="8"
                     viewBox="0 0 13 8"
                     fill="none">
                     <path
                        d="M11.5 1.50012L6.5 6.50012L1.5 1.50012"
                        stroke="#111111"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </span>
            </button>
            <div
               style={style}
               className={`bg-white text-[16px] font-[400] shadow-1 !z-50 absolute left-0 mt-2 w-full rounded-[4px] py-[10px] transition-all ${dropdownOpen ? "top-full opacity-100 visible" : "top-[110%] invisible opacity-0"
                  }`}>
               {languages.map((option, index) => (
                  <div
                     key={index}
                     onClick={() => handleSelect(option.value)}
                     className="cursor-pointer py-2 px-5 text-[16px] font-[400] text-[#383838] hover:bg-gray-200">
                     {option.label}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default LanguageDropdown;

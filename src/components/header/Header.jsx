import React from 'react';
import image1 from "@/assets/image_1.png"
import image2 from "@/assets/image_2.png"
import LanguageDropdown from './LanguageDropdown';
const Header = () => {
   const style = {
      boxShadow: "2px 2px 8.5px 1px #143C771A",
   };

   return (
      <div className='bg-white flex items-center h-[90px] sticky z-50 top-0 left-0 right-0 '>
         <div className='main-container lg:gap-16 flex items-center w-full justify-between'>
            <div className='w-full flex lg:ps-28'>
               <img src={image1} className='w-[110] h-20' alt="july-protest" />
            </div>
            <div className='relative w-full hidden lg:block'><span className='absolute z-40 top-1/2 left-3 transform -translate-y-1/2'>
               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.53223 14.0332C8.92969 14.0332 10.2393 13.6113 11.3291 12.8906L15.1787 16.749C15.4336 16.9951 15.7588 17.1182 16.1104 17.1182C16.8398 17.1182 17.376 16.5469 17.376 15.8262C17.376 15.4922 17.2617 15.167 17.0156 14.9209L13.1924 11.0801C13.9834 9.95508 14.4492 8.59277 14.4492 7.11621C14.4492 3.31055 11.3379 0.199219 7.53223 0.199219C3.73535 0.199219 0.615234 3.31055 0.615234 7.11621C0.615234 10.9219 3.72656 14.0332 7.53223 14.0332ZM7.53223 12.1875C4.74609 12.1875 2.46094 9.90234 2.46094 7.11621C2.46094 4.33008 4.74609 2.04492 7.53223 2.04492C10.3184 2.04492 12.6035 4.33008 12.6035 7.11621C12.6035 9.90234 10.3184 12.1875 7.53223 12.1875Z" fill="#525252" />
               </svg>
            </span>
               <input type="text" className=' w-full bg-[#f5f5f5] max-w-[600px] mx-auto  py-2.5 outline-none pe-2 ps-[36px]  rounded-[8px] text-base font-medium' placeholder='Search' />
            </div>
            <div className='w-full ml-auto '>
               <LanguageDropdown />
            </div>

         </div>
      </div>
   );
};

export default Header;

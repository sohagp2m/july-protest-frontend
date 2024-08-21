const userData = [
   {
      id: 1,
      firstName: "Farhan",
      lastName: "Rahman",
      type: "User",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-08-20",
      email: "farhan.rahman@example.com",
   },
   {
      id: 2,
      firstName: "Tasnim",
      lastName: "Akter",
      type: "User",
      role: "Admin",
      status: "Inactive",
      lastLogin: "2024-07-15",
      email: "tasnim.akter@example.com",
   },
   {
      id: 3,
      firstName: "Rafi",
      lastName: "Chowdhury",
      type: "User",
      role: "User",
      status: "Active",
      lastLogin: "2024-08-18",
      email: "rafi.chowdhury@example.com",
   },
   {
      id: 4,
      firstName: "Maliha",
      lastName: "Hossain",
      type: "User",
      role: "Admin",
      status: "Inactive",
      lastLogin: "2024-06-22",
      email: "maliha.hossain@example.com",
   },
   {
      id: 5,
      firstName: "Aminul",
      lastName: "Islam",
      type: "User",
      role: "User",
      status: "Active",
      lastLogin: "2024-08-19",
      email: "aminul.islam@example.com",
   },
   {
      id: 6,
      firstName: "Sharmin",
      lastName: "Khan",
      type: "User",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-08-17",
      email: "sharmin.khan@example.com",
   },
   {
      id: 7,
      firstName: "Zahid",
      lastName: "Hasan",
      type: "User",
      role: "User",
      status: "Inactive",
      lastLogin: "2024-07-20",
      email: "zahid.hasan@example.com",
   },
   {
      id: 8,
      firstName: "Nusrat",
      lastName: "Jahan",
      type: "User",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-08-15",
      email: "nusrat.jahan@example.com",
   },
   {
      id: 9,
      firstName: "Imran",
      lastName: "Ahmed",
      type: "User",
      role: "User",
      status: "Active",
      lastLogin: "2024-08-10",
      email: "imran.ahmed@example.com",
   },
   {
      id: 10,
      firstName: "Fatema",
      lastName: "Begum",
      type: "User",
      role: "Admin",
      status: "Inactive",
      lastLogin: "2024-07-30",
      email: "fatema.begum@example.com",
   },
];

export default function Users() {
   return (
      <div className="">
         <div className=" flex items-center">
            <h3 className="text-[24px] font-medium">Users</h3>
         </div>

         <div className="mt-[14px] flex items-center justify-between gap-6">

            <div className='relative w-full max-w-md bg-white hidden lg:block'><span className='absolute z-40 top-1/2 left-3 transform -translate-y-1/2'>
               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.53223 14.0332C8.92969 14.0332 10.2393 13.6113 11.3291 12.8906L15.1787 16.749C15.4336 16.9951 15.7588 17.1182 16.1104 17.1182C16.8398 17.1182 17.376 16.5469 17.376 15.8262C17.376 15.4922 17.2617 15.167 17.0156 14.9209L13.1924 11.0801C13.9834 9.95508 14.4492 8.59277 14.4492 7.11621C14.4492 3.31055 11.3379 0.199219 7.53223 0.199219C3.73535 0.199219 0.615234 3.31055 0.615234 7.11621C0.615234 10.9219 3.72656 14.0332 7.53223 14.0332ZM7.53223 12.1875C4.74609 12.1875 2.46094 9.90234 2.46094 7.11621C2.46094 4.33008 4.74609 2.04492 7.53223 2.04492C10.3184 2.04492 12.6035 4.33008 12.6035 7.11621C12.6035 9.90234 10.3184 12.1875 7.53223 12.1875Z" fill="#525252" />
               </svg>
            </span>
               <input type="text" className=' w-full bg-white max-w-[600px] mx-auto  py-2.5 outline-none pe-2 ps-[36px]  rounded-[8px] text-base font-medium' placeholder='Search' />
            </div>
            <button className="primary-btn max-w-[180px]">+Add User</button>
         </div>

         <div className="mt-[30px] min-w-full relative overflow-x-auto">
            <table className="overflow-auto border-0 m-0 min-w-full ">
               <thead className="rounded-md border-none font-[500] text-center">
                  <tr className="border-none bg-[#e3e3e4a8] rounded-md text-[16px] font-[500]">
                     <th
                        scope="col"
                        className="px-6 h-full pt-1.5 place-items-center text-center font-[500] rounded-s-[8px] items-center justify-center text-[#6C6C6C]">
                        <input
                           className="h-5 w-5 cursor-pointer"
                           type="checkbox"
                        />
                     </th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500]">SL</th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500]">Name</th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500]">Email</th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500]">Role</th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500]">Status</th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500]">Last Login</th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500]">Type</th>
                     <th scope="col" className="px-6 py-5 text-center text-[#6C6C6C] font-[500] rounded-e-md">Action</th>
                  </tr>
               </thead>
               <tbody className="bg-white">
                  {userData.map((data, index) => (
                     <tr
                        key={index}
                        className={`bg-white border-b-[2px] border-[#E9EDF1] text-[16px]`}>
                        <td className="px-6 h-full pt-1.5 place-items-center text-center font-[500] rounded-s-md items-center justify-center text-[#6C6C6C]">
                           <input
                              className="h-5 w-5 cursor-pointer border-[#DCE2E8] outline-none"
                              type="checkbox"
                           />
                        </td>
                        <td className="px-6 py-4 text-[#474747] whitespace-nowrap text-[18px] font-[500] text-center">{data.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[18px] font-[500] text-center text-[#474747]">{data.firstName + " " + data.lastName}</td>

                        <td className="px-6 py-4 whitespace-nowrap text-[18px] font-[500] text-center text-[#474747]">{data.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[18px] font-[500] text-center text-[#474747]">{data.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[18px] font-[500] text-center text-[#474747]">
                           <div className="flex items-center justify-center">
                              <label className="inline-flex items-center cursor-pointer">
                                 <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    defaultChecked={data.status === "Active"}
                                 />
                                 <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600"></div>
                              </label>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[18px] font-[500] text-center text-[#474747]">{data.lastLogin}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[18px] font-[500] text-center text-[#474747]">{data.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[18px] font-[500] text-center text-[#474747]">
                           <div className="flex items-center justify-center w-full gap-[6px]">
                              <button className="border-[0.91px] p-1 rounded-sm text-[#FFFEFC] border-[#A6A6A6]">
                                 <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M5.74238 6.74316H4.83216C4.34935 6.74316 3.88631 6.93496 3.54491 7.27636C3.20351 7.61776 3.01172 8.0808 3.01172 8.56361V16.7556C3.01172 17.2384 3.20351 17.7015 3.54491 18.0429C3.88631 18.3843 4.34935 18.576 4.83216 18.576H13.0242C13.507 18.576 13.97 18.3843 14.3114 18.0429C14.6528 17.7015 14.8446 17.2384 14.8446 16.7556V15.8454"
                                       stroke="#474747"
                                       strokeWidth="1.82044"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                    <path
                                       d="M13.9341 4.92271L16.6647 7.65338M17.9254 6.36542C18.2839 6.00693 18.4853 5.52071 18.4853 5.01374C18.4853 4.50676 18.2839 4.02054 17.9254 3.66206C17.5669 3.30357 17.0807 3.10217 16.5737 3.10217C16.0667 3.10217 15.5805 3.30357 15.222 3.66206L7.5625 11.2943V14.0249H10.2932L17.9254 6.36542Z"
                                       stroke="#474747"
                                       strokeWidth="1.82044"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                 </svg>
                              </button>
                              <button className="border-[0.91px] p-1 rounded-sm text-[#FFFEFC] border-[#A6A6A6]">
                                 <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M6.61348 19.4862C6.11286 19.4862 5.68444 19.3081 5.32824 18.9519C4.97204 18.5957 4.79364 18.1669 4.79303 17.6657V5.83284H3.88281V4.01239H8.43392V3.10217H13.8953V4.01239H18.4464V5.83284H17.5361V17.6657C17.5361 18.1663 17.358 18.5951 17.0018 18.9519C16.6456 19.3087 16.2169 19.4868 15.7157 19.4862H6.61348ZM15.7157 5.83284H6.61348V17.6657H15.7157V5.83284ZM8.43392 15.8453H10.2544V7.65328H8.43392V15.8453ZM12.0748 15.8453H13.8953V7.65328H12.0748V15.8453Z"
                                       fill="#474747"
                                    />
                                 </svg>
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div className="mt-[50px] flex items-center gap-2 ">
            <div className="flex items-center gap-3">
               <p className="font-normal text-base">Rows per page</p>

               <p
                  style={{ border: "1px solid #C6CBD0" }}
                  className="bg-[#D9D9D9] cursor-pointer w-[32px] h-[32px] text-base font-normal p-[10px] flex items-center justify-center place-items-center rounded-[4px] border-[#D9D9D9]">
                  10
               </p>
               <p
                  style={{ border: "1px solid #C6CBD0" }}
                  className="w-[32px] h-[32px] text-base font-normal p-[10px] flex items-center justify-center place-items-center rounded-[4px] text-[#474747] cursor-pointer border-[#A6A6A6]">
                  10
               </p>
               <p
                  style={{ border: "1px solid #C6CBD0" }}
                  className="w-[32px] cursor-pointer h-[32px] text-base font-normal p-[10px] flex items-center justify-center place-items-center rounded-[4px] text-[#474747] border-[#A6A6A6]">
                  15
               </p>
               <p
                  style={{ border: "1px solid #C6CBD0" }}
                  className="w-[32px] cursor-pointer h-[32px] text-base font-normal p-[10px] flex items-center justify-center place-items-center rounded-[4px] text-[#474747] border-[#A6A6A6]">
                  20
               </p>
               <p
                  style={{ border: "1px solid #C6CBD0" }}
                  className="w-[32px] cursor-pointer h-[32px] text-base font-normal p-[10px] flex items-center justify-center place-items-center rounded-[4px] text-[#474747] border-[#A6A6A6]">
                  25
               </p>
            </div>
         </div>
      </div>
   );
}

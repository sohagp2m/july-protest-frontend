import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <div className="custom-scrollbar">
         <Header />

         <div className="flex main-container  relative gap-[30px]">
            <Sidebar />
            <Outlet />
         </div>
      </div>
   );
};

export default Main;

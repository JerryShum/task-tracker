"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

function Sidebar() {
   const [isCollapsed, setIsCollapsed] = useState(false);

   return (
      <aside
         className={`h-screen transition-all duration-300 bg-gray-800 text-white relative ${
            isCollapsed ? "w-12" : "w-64"
         }`}
      >
         <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
         >
            {isCollapsed ? "▶" : "◀"}
         </button>
         <ul className={`space-y-4 p-4 ${isCollapsed ? "hidden" : ""}`}>
            <Logo />
            <li className="font-semibold">
               <Link href={"/"}>Home</Link>
            </li>
            <li className="font-semibold">
               <Link href={"/task"}>Task</Link>
            </li>
            <li className="font-semibold">
               <Link href={"/profile"}>Profile</Link>
            </li>
         </ul>
      </aside>
   );
}

export default Sidebar;

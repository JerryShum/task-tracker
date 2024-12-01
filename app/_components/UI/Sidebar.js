"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { CheckBadgeIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const navLinks = [
   { name: "Home", href: "/", icon: HomeIcon },
   { name: "Tasks", href: "/task", icon: CheckBadgeIcon },
   { name: "Profile", href: "/profile", icon: UserIcon },
];

function Sidebar() {
   const [isCollapsed, setIsCollapsed] = useState(false);
   const pathname = usePathname();
   console.log(pathname);

   return (
      <aside
         className={`h-screen transition-all duration-300 bg-background text-white relative ${
            isCollapsed ? "w-12" : "w-64"
         }`}
      >
         <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-6 right-4 text-gray-400 hover:text-white"
         >
            {isCollapsed ? "▶" : "◀"}
         </button>
         <ul
            className={`flex flex-col gap-6  p-4 ${
               isCollapsed ? "hidden" : ""
            }`}
         >
            <Logo />
            <div className="space-y-2">
               {navLinks.map((link) => (
                  <li
                     key={link.name}
                     className={`rounded p-2 ${
                        pathname === link.href ? "bg-primary-dark" : ""
                     }`}
                  >
                     <Link href={link.href} className="flex gap-2 items-center">
                        <link.icon className="h-6 w-6" /> {link.name}
                     </Link>
                  </li>
               ))}
            </div>
         </ul>
      </aside>
   );
}

export default Sidebar;

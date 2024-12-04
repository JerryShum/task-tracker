import Sidebar from "@/app/_components/UI/Sidebar";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
});

export const metadata = {
   title: {
      template: "%s | Task Tracker",
      default: "Welcome | Task Tracker",
   },
   description: "Part 1 of Jerry's Personal Projects",
};

export default async function Layout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} min-h-screen bg-slate-300 flex`}>
            <Sidebar />
            <div className="flex-1 h-screen w-0 bg-background-darker">
               <main className="mx-auto overflow-scroll h-screen overflow-x-hidden">
                  {children}
               </main>
            </div>
         </body>
      </html>
   );
}

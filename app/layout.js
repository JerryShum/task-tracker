import { Inter } from "next/font/google";
import Sidebar from "@/app/_components/UI/Sidebar";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";

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

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} min-h-screen bg-slate-300 flex`}>
            <Sidebar />
            <div className="flex-1 h-screen w-0 bg-background-darker">
               <main className="mx-auto overflow-scroll h-screen overflow-x-hidden">
                  <SessionProvider>{children}</SessionProvider>
               </main>
            </div>
         </body>
      </html>
   );
}

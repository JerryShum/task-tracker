import Sidebar from "@/app/_components/UI/Sidebar";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Header from "./_components/UI/Header";

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

export default async function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${inter.className} flex flex-col bg-white px-60 h-screen`}
         >
            <Header />

            <main className="flex-1">{children}</main>
         </body>
      </html>
   );
}

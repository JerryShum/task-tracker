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

export default async function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-background-light`}>
            <main>{children}</main>
         </body>
      </html>
   );
}

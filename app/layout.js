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

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
   );
}

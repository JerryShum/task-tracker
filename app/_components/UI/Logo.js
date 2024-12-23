import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
   return (
      <Link href={"/application"} className="flex items-center gap-4">
         <Image src={logo} alt="Task Tracker Logo" height={40} width={40} />

         <span className="text-xl font-bold text-primary-lighter">
            Task Tracker
         </span>
      </Link>
   );
}

export default Logo;

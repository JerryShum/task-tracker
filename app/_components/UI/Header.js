import Link from "next/link";
import NavBar from "./NavBar";

function Header() {
   return (
      <header className="flex items-center justify-between px-6 py-4">
         <Link href={"/"}>
            <h1 className="text-2xl font-bold text-primary-lighter">
               Task <span className="text-black">Tracker</span>
            </h1>
         </Link>
         <NavBar />
      </header>
   );
}

export default Header;

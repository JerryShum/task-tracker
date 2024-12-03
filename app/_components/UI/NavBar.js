import Link from "next/link";

function NavBar() {
   return (
      <nav>
         <ul className="flex space-x-6 text-accent-lighter">
            <li>
               <Link href="/login" className="hover:underline">
                  Login
               </Link>
            </li>
            <li>
               <Link
                  href="/signup"
                  className="hover:bg-blue-600 hover:text-accent-lightest duration-300 bg-blue-500 rounded-xl text-black font-semibold p-2 py-3"
               >
                  Get Started
               </Link>
            </li>
         </ul>
      </nav>
   );
}

export default NavBar;

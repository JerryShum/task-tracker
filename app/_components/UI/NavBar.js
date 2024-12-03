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
         </ul>
      </nav>
   );
}

export default NavBar;

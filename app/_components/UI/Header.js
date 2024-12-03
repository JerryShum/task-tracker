import NavBar from "./NavBar";

function Header() {
   return (
      <header className="flex items-center justify-between px-6 py-4">
         <h1 className="text-2xl font-bold text-primary-lighter">
            Task Tracker
         </h1>
         <NavBar />
      </header>
   );
}

export default Header;

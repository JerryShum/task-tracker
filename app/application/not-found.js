import Link from "next/link";

function NotFound() {
   return (
      <main className="text-center space-y-6 flex flex-col justify-center items-center h-screen">
         <h1 className="text-3xl font-semibold text-text-light">
            This page could not be found :(
         </h1>
         <Link
            href="/"
            className=" bg-accent-500 text-primary-800 px-6 py-3 text-lg text-primary-light bg-primary-darker rounded-xl "
         >
            Go back home
         </Link>
      </main>
   );
}

export default NotFound;

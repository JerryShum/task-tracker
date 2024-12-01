"use client";

export default function Error({ error, reset }) {
   return (
      <main className="text-center space-y-6 flex flex-col justify-center items-center h-screen">
         <h1 className="text-3xl font-semibold text-text-light">
            Something went wrong!
         </h1>
         <p className="text-lg text-text-light">{error.message}</p>

         <button
            className=" bg-accent-500 text-primary-800 px-6 py-3 text-lg text-primary-light bg-primary-darker rounded-xl"
            onClick={reset}
         >
            Try again
         </button>
      </main>
   );
}

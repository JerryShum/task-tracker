"use client";

import Button from "../_components/UI/Button";
import { signIn, signOut } from "next-auth/react";
import { auth } from "../_lib/auth";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

export default function Page() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen">
         <h1 className="text-4xl font-bold mb-8">This is the login page</h1>
         <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => signIn("google")}
         >
            Continue with Google
         </button>
      </div>
   );
}

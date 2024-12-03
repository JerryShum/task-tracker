"use client";

import { useFormStatus } from "react-dom";

function FormButton({ type }) {
   const { pending, data, method, action } = useFormStatus();
   if (type == "signup")
      return (
         <button
            type="submit"
            className="w-full bg-primary-lighter text-white py-2 px-4 rounded-lg hover:bg-primary-light duration-300 font-bold"
            disabled={pending}
         >
            {pending ? "Signing Up..." : "Sign Up with Email"}
         </button>
      );
   else if (type == "login") {
      return (
         <button
            type="submit"
            className="w-full bg-primary-lighter text-white py-2 px-4 rounded-lg hover:bg-primary-light duration-300 font-bold"
            disabled={pending}
         >
            {pending ? "Loggin In..." : "Log In with Email"}
         </button>
      );
   }
}

export default FormButton;

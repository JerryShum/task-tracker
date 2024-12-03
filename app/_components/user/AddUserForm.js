"use client";

import { insertUserAction } from "@/app/_lib/actions";

function AddUserForm() {
   return (
      <div className="max-w-md mx-auto mt-10">
         <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            action={insertUserAction}
         >
            <div className="mb-4">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
               >
                  Username
               </label>
               <input
                  type="text"
                  id="username"
                  name="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               />
            </div>
            <div className="mb-6">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
               >
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               />
            </div>
            <div className="flex items-center justify-between">
               <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               >
                  Add User
               </button>
            </div>
         </form>
      </div>
   );
}

export default AddUserForm;

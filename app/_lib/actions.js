"use server";

import { insertUser } from "./supabaseAPI";

export async function insertUserAction(previousState, formdata) {
   const user = {
      username: formdata.get("username"),
      email: formdata.get("email"),
      password: formdata.get("password"),
   };

   const response = await insertUser(user);

   if (response.success) {
      return {
         status: "success",
         message: "User created successfully! Please Log In (:",
      };
   } else {
      // Return the error message from the `insertUser` function
      return {
         status: "error",
         message: response.message || "An unexpected error occurred.",
      };
   }
}

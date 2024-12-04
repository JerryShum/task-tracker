"use server";

import { getUser, insertUser } from "./supabaseAPI";

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

export async function getUserAction(previousState, formdata) {
   const user = {
      email: formdata.get("email"),
      password: formdata.get("password"),
   };

   const response = await getUser(user);

   // response.success = true
   if (response.success) {
      return {
         user: response.user,
         status: "success",
         message: "Successfully logged in!",
      };
   } else {
      return {
         status: "error",
         message: response.message || "An unexpected error occurred.",
      };
   }
}

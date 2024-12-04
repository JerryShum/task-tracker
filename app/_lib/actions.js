"use server";

import { insertUser } from "./supabaseAPI";

export async function insertUserAction(previousState, formdata) {
   const user = {
      username: formdata.get("username"),
      email: formdata.get("email"),
      password: formdata.get("password"),
   };

   try {
      await insertUser(user);
      return true; // Success
   } catch (error) {
      console.error("Error creating user:", error);
      return false; // Failure
   }
}

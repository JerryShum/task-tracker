import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function insertUser({ username, email, password }) {
   try {
      const { data, error } = await supabase
         .from("users")
         .insert([{ username, email, password }]);

      if (error) {
         // Check for unique constraint violation or other errors
         if (error.code === "23505") {
            throw new Error(
               "This email is already registered. Please use a different email."
            );
         }
         throw error; // Re-throw any other error
      }

      return { success: true };
   } catch (err) {
      // Handle unexpected errors
      return { success: false, message: err.message };
   }
}

export async function getUser({ user_email }) {
   let { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", user_email);

   if (error) throw new Error("There was an error getting the specified user.");

   return data;
}

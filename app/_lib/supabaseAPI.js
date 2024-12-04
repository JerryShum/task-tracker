import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function insertUser(user) {
   console.log(user);
   const { data, error } = await supabase
      .from("users")
      .insert([
         {
            user_name: user.username,
            email: user.email,
            password: user.password,
         },
      ])
      .select();
}

export async function getUser({ user_email }) {
   let { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", user_email);

   if (error) throw new Error("There was an error getting the specified user.");

   return data;
}

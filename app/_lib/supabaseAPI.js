import { supabase } from "./supabase";

async function insertUser({ user }) {
   const { data, error } = await supabase
      .from("users")
      .insert([{ user_name: user.name, email: user.email }])
      .select();

   if (error) throw new Error("There was an error inserting a new user.");
}

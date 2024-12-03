"use server";

import { insertUser } from "./supabaseAPI";

export async function insertUserAction(formdata) {
   const user = {
      username: formdata.get("username"),
      email: formdata.get("email"),
   };

   insertUser(user);
}

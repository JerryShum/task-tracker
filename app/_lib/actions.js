"use server";
import { cookies } from "next/headers";

import { getTasks, getUser, insertUser, insertTask } from "./supabaseAPI";
import { revalidatePath } from "next/cache";

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
      cookies().set("userID", response.user.id, { httpOnly: true });

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

export async function insertTaskAction(formdata) {
   const task = {
      title: formdata.get("title"),
      description: formdata.get("description"),
      priority: formdata.get("priority"),
      dueDate: formdata.get("dueDate"),
      user_id: formdata.get("user_id"),
   };

   console.log(task);

   const response = await insertTask(task);
   console.log(response);

   // revalidatePath("/application/task");
}

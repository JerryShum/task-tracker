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

export async function getUser({ email, password }) {
   try {
      //!fetch from supabase
      const { data: users, error } = await supabase
         .from("users")
         .select("*")
         .eq("email", email);

      if (error) {
         throw new Error("There was an error retrieving the user.");
      }

      //! Check if user exists
      if (!users || users.length === 0) {
         throw new Error("User not found. Please check your email.");
      }

      const user = users[0]; // Assuming emails are unique and return only one user

      //! Check if password matches
      if (user.password !== password) {
         throw new Error("Incorrect password. Please try again.");
      }

      // If everything is fine, return the user -> setting the response to this -> received by formAction
      return {
         user: user,
         success: true,
         data: user,
      };
   } catch (err) {
      // If theres an error, set the response to this:
      return {
         success: false,
         message: err.message,
      };
   }
}

export async function getTasks(userID) {
   let { data: tasks, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", userID);

   return tasks;
}

export async function insertTask(task) {
   const { title, description, priority, dueDate, user_id } = task;
   console.log("supabase" + task.user_id);
   const { error } = await supabase
      .from("tasks")
      .insert([
         {
            title: title,
            description: description,
            priority: priority,
            is_completed: false,
            due_date: dueDate,
            user_id: Number(user_id),
         },
      ])
      .select();

   console.log(error);
   return error;
}

import { getTasks } from "@/app/_lib/supabaseAPI";
import AddTaskForm from "../../_components/task/AddTaskForm";
import TaskList from "../../_components/task/TaskList";
import { cookies } from "next/headers";

export default async function Page() {
   const cookieStore = cookies();
   const userID = await cookieStore.get("userID")?.value;
   console.log(userID);

   const tasks = await getTasks(userID);
   console.log(tasks);

   return (
      <div className="px-60 py-10 space-y-10">
         <h1 className=" text-primary-light font-bold text-4xl">Tasks</h1>

         <AddTaskForm />

         <div className="p-6 border-2 border-accent-lighter rounded-xl space-y-6">
            <h2 className="text-accent-lighter font-bold text-2xl">
               Task List
            </h2>
            <TaskList tasks={tasks} />
         </div>
      </div>
   );
}

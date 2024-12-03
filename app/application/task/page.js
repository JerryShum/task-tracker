import AddTaskForm from "../../_components/task/AddTaskForm";
import TaskList from "../../_components/task/TaskList";

export default function Page() {
   return (
      <div className="px-60 py-10 space-y-10">
         <h1 className=" text-primary-light font-bold text-4xl">Tasks</h1>

         <AddTaskForm />

         <div className="p-6 border-2 border-accent-lighter rounded-xl space-y-6">
            <h2 className="text-accent-lighter font-bold text-2xl">
               Task List
            </h2>
            <TaskList />
         </div>
      </div>
   );
}

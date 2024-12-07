import { getTasks } from "@/app/_lib/supabaseAPI";
import TaskUnit from "./TaskUnit";

async function TaskList({ tasks }) {
   return (
      <div className="mx-auto">
         {tasks.length === 0 ? (
            <p className="text-lg text-gray-500">No tasks available.</p>
         ) : (
            <ul className="space-y-6">
               {tasks.map((task) => (
                  <TaskUnit task={task} key={task.title} />
               ))}
            </ul>
         )}
      </div>
   );
}

export default TaskList;

import Button from "../UI/Button";

function AddTaskForm() {
   return (
      <form className="text-text-light flex-col flex max-w-[600px] mx-auto border-2 border-accent-lighter p-4 rounded-xl space-y-2">
         <div className="border-b border-accent-light flex flex-col gap-2 pb-4">
            <input
               type="text"
               name="title"
               placeholder="Task Title"
               className="bg-transparent outline-none text-2xl"
            />
            <input
               type="text"
               name="title"
               placeholder="Description"
               className="bg-transparent outline-none text-sm"
            />
         </div>

         <div className="py-2 flex justify-between items-center">
            <div className="space-x-2">
               <select
                  name="priority"
                  className="bg-transparent outline-none text-md text-accent-lighter "
                  placeholder="Priority"
               >
                  <option selected disabled className=" bg-background">
                     Priority
                  </option>
                  <option value="low" className=" bg-background">
                     {" "}
                     Low
                  </option>
                  <option value="medium" className=" bg-background">
                     Medium
                  </option>
                  <option value="high" className=" bg-background">
                     High
                  </option>
               </select>

               <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  className="bg-transparent border-b border-accent-light outline-none"
               />
            </div>

            <div className="space-x-2">
               <Button type={"secondary"}>Cancel</Button>
               <Button type={"primary"}>Add Task</Button>
            </div>
         </div>
      </form>
   );
}

export default AddTaskForm;

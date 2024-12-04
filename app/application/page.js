import Link from "next/link";
import ApplicationHeader from "../_components/UI/ApplicationHeader";

export default function Home() {
   const tasks = [
      { id: 1, title: "Complete project report", status: "In Progress" },
      { id: 2, title: "Review team feedback", status: "Pending" },
      { id: 3, title: "Update task tracker", status: "Completed" },
   ];

   return (
      <div className="px-60 py-10 space-y-10">
         <ApplicationHeader />
         {/* <h2>Track and manage your tasks efficiently using our TaskTracker!</h2> */}

         {tasks ? (
            <div className="border-2 border-accent-lighter p-6 rounded-xl">
               <h2 className="text-accent-lighter font-semibold text-2xl ">
                  Current status of your tasks:
               </h2>
            </div>
         ) : (
            <div>
               <h2>Start by adding a task.</h2>
               <Link href={"/task"} />
            </div>
         )}
      </div>
   );
}

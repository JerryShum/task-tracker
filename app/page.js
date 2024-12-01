import Link from "next/link";

export default function Home() {
   const username = "Jerry";
   const tasks = [
      { id: 1, title: "Complete project report", status: "In Progress" },
      { id: 2, title: "Review team feedback", status: "Pending" },
      { id: 3, title: "Update task tracker", status: "Completed" },
   ];

   return (
      <div className="px-60 space-y-10">
         <h1 className=" text-primary-lighter font-bold text-4xl mt-10">
            Welcome, {username}!
         </h1>
         {/* <h2>Track and manage your tasks efficiently using our TaskTracker!</h2> */}

         {tasks ? (
            <div className="border-2 border-accent-light p-6 rounded-xl">
               <h2 className="text-primary-light font-semibold text-2xl ">
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

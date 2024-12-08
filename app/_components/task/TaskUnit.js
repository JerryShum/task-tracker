"use client";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function TaskUnit({ task }) {
   const { id, title, description, due_date } = task;
   return (
      <li
         key={id}
         className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
         <div className="flex">
            <div className="flex-1">
               <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {title}
               </h3>
               <p className="text-gray-600 mb-2">{description}</p>
               <p className="text-sm text-gray-500">Due Date: {due_date}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
               <Link href={`/application/task/${id}`}>
                  <PencilSquareIcon className="h-6 text-black" />
               </Link>
               <button>
                  <TrashIcon className="h-6 text-black" />
               </button>
            </div>
         </div>
      </li>
   );
}

export default TaskUnit;

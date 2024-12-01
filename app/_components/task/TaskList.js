import TaskUnit from "./TaskUnit";

function TaskList() {
   const tasks = [
      {
         id: 1,
         title: "Finish the Next.js app",
         description: "Complete the task tracker feature in the Next.js app.",
         due_date: "2024-12-10T12:00:00Z",
      },
      {
         id: 2,
         title: "Research new tech stack",
         description: "Look into the latest frontend frameworks and libraries.",
         due_date: "2024-12-05T17:00:00Z",
      },
      {
         id: 3,
         title: "Prepare for the team meeting",
         description:
            "Create a presentation to update the team on the project progress.",
         due_date: "2024-12-01T10:00:00Z",
      },
      {
         id: 4,
         title: "Update project documentation",
         description:
            "Make sure the project documentation is up-to-date with recent changes.",
         due_date: "2024-12-08T15:00:00Z",
      },
      {
         id: 5,
         title: "Fix login bug",
         description:
            "Investigate and fix the issue where users can't log in to the app.",
         due_date: "2024-12-02T14:00:00Z",
      },
      {
         id: 6,
         title: "Write unit tests for the API",
         description:
            "Write and run tests to cover all API endpoints in the app.",
         due_date: "2024-12-12T13:00:00Z",
      },
      {
         id: 7,
         title: "Design new homepage layout",
         description:
            "Create a new layout design for the homepage with a focus on usability.",
         due_date: "2024-12-06T11:00:00Z",
      },
      {
         id: 8,
         title: "Review code PR",
         description:
            "Go through the pull request submitted by the team and leave feedback.",
         due_date: "2024-12-04T16:00:00Z",
      },
      {
         id: 9,
         title: "Optimize app performance",
         description:
            "Analyze and improve the performance of the app by reducing load times.",
         due_date: "2024-12-09T18:00:00Z",
      },
      {
         id: 10,
         title: "Prepare for code deployment",
         description:
            "Ensure everything is in place for the production deployment next week.",
         due_date: "2024-12-07T09:00:00Z",
      },
   ];

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

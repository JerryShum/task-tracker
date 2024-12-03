import Link from "next/link";

export default function Page() {
   return (
      <div className=" text-white flex-col items-center justify-center">
         <div>
            <section className="text-center py-20 px-6">
               <h2 className="text-5xl font-extrabold mb-4 text-primary-lighter">
                  Organize your work and life effortlessly
               </h2>
               <p className="text-lg mb-6 text-primary-light">
                  Stay productive and achieve your goals with our intuitive task
                  tracker.
               </p>
               <Link
                  href="/signup"
                  className="bg-gradient-to-r from-primary-dark  to-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 "
               >
                  Get Started for Free
               </Link>
            </section>
            {/* Features Section */}
            <section className="py-10 text-gray-800">
               <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                  <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
                     <h3 className="text-2xl font-semibold mb-4  text-primary">
                        Plan
                     </h3>
                     <p>
                        Easily plan and prioritize tasks with our intuitive
                        interface.
                     </p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-lg shadow-md">
                     <h3 className="text-2xl font-semibold mb-4 text-primary">
                        Track
                     </h3>
                     <p>
                        Keep track of progress and deadlines with built-in
                        reminders.
                     </p>
                  </div>
                  <div className="p-6 bg-pink-50 rounded-lg shadow-md">
                     <h3 className="text-2xl font-semibold mb-4 text-primary">
                        Achieve
                     </h3>
                     <p>
                        Stay motivated and accomplish your goals efficiently.
                     </p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}

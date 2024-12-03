import Link from "next/link";

export default function Page() {
   return (
      <div className=" text-white flex-col items-center justify-center">
         <div>
            <section className="text-center py-20 px-6 flex flex-col gap-2 items-center">
               <h2 className="text-5xl font-extrabold mb-4 text-primary-lighter tracking-wide">
                  Organize your life effortlessly
               </h2>
               <p className="text-xl mb-6 text-accent-dark">
                  Our task tracker helps you stay productive and achieve your
                  goals. <br />
               </p>
               <Link
                  href="/signup"
                  className="bg-gradient-to-r to-primary-light  from-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg  shrink w-1/5 hover:to-primary-dark hover:from-to-primary duration-300 transition-all"
               >
                  Get Started for Free
               </Link>
            </section>
            {/* Features Section */}
            <section className="py-10 text-gray-800">
               <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                  <div className="p-6 bg-indigo-50 rounded-lg shadow-xl">
                     <h3 className="text-2xl font-semibold mb-4  text-primary">
                        Plan
                     </h3>
                     <p>
                        Easily plan and prioritize tasks with our intuitive
                        interface.
                     </p>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-lg shadow-xl">
                     <h3 className="text-2xl font-semibold mb-4 text-primary">
                        Track
                     </h3>
                     <p>
                        Keep track of progress and deadlines with built-in
                        reminders.
                     </p>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-lg shadow-xl">
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

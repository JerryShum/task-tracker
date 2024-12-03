import Image from "next/image";
import Link from "next/link";
import Github from "@/public/Github.svg";
import Google from "@/public/logo-google.svg";

function LoginForm({ type }) {
   if (type == "login")
      return (
         <div className="gap-8 shadow-2xl border rounded-lg p-8 ">
            <div className="flex flex-col justify-center">
               <h1 className="text-3xl font-bold mb-6 text-primary-lighter">
                  Log In
               </h1>
               {/* Social Login Buttons */}
               <div className="flex flex-col space-y-4">
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold gap-2">
                     <Image src={Google} alt="Google" height={30} />
                     <span>Continue with Google</span>
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold gap-2">
                     <Image src={Github} alt="GitHub Icon" height={30} />
                     <span>Continue with GitHub</span>
                  </button>
               </div>

               {/* Divider */}
               <div className="my-6 text-primary-light font-semibold text-center">
                  or
               </div>

               {/* Email and Password Fields */}
               <form className="space-y-4">
                  <div>
                     <label className="block text-sm font-medium text-gray-700">
                        Email
                     </label>
                     <input
                        type="email"
                        placeholder="Enter your email..."
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700">
                        Password
                     </label>
                     <input
                        type="password"
                        placeholder="Enter your password..."
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-primary-lighter text-white py-2 px-4 rounded-lg hover:bg-primary-light duration-300 font-bold"
                  >
                     Log In with Email
                  </button>
               </form>

               {/* Terms and Existing Account */}
               <p className="text-xs text-gray-500 mt-4">
                  By continuing with Google, Github, or Email, you agree to our{" "}
                  <Link href="#" className="text-indigo-500 hover:underline">
                     Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-indigo-500 hover:underline">
                     Privacy Policy
                  </Link>
                  .
               </p>
               <p className="mt-4 text-sm">
                  <span className="text-black">Don't have an account?</span>{" "}
                  <Link
                     href="/signup"
                     className="text-indigo-500 hover:underline"
                  >
                     Go to signup
                  </Link>
               </p>
            </div>
         </div>
      );

   if (type == "signup")
      return (
         <div className="gap-8 shadow-2xl border rounded-lg p-8 ">
            <div className="flex flex-col justify-center">
               <h1 className="text-3xl font-bold mb-6 text-primary-lighter">
                  Sign Up
               </h1>
               {/* Social Login Buttons */}
               <div className="flex flex-col space-y-4">
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold gap-2">
                     <Image src={Google} alt="Google" height={30} />
                     <span>Continue with Google</span>
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold gap-2">
                     <Image src={Github} alt="GitHub Icon" height={30} />
                     <span>Continue with GitHub</span>
                  </button>
               </div>

               {/* Divider */}
               <div className="my-6 text-primary-light font-semibold text-center">
                  or
               </div>

               {/* Email and Password Fields */}
               <form className="space-y-4">
                  <div>
                     <label className="block text-sm font-medium text-gray-700">
                        Email
                     </label>
                     <input
                        type="email"
                        placeholder="Enter your email..."
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700">
                        Password
                     </label>
                     <input
                        type="password"
                        placeholder="Enter your password..."
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-primary-lighter text-white py-2 px-4 rounded-lg hover:bg-primary-light duration-300 font-bold"
                  >
                     Sign Up with Email
                  </button>
               </form>

               {/* Terms and Existing Account */}
               <p className="text-xs text-gray-500 mt-4">
                  By continuing with Google, Github, or Email, you agree to our{" "}
                  <Link href="#" className="text-indigo-500 hover:underline">
                     Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-indigo-500 hover:underline">
                     Privacy Policy
                  </Link>
                  .
               </p>
               <p className="mt-4 text-sm">
                  <span className="text-black">Already have an account?</span>{" "}
                  <Link
                     href="/signup"
                     className="text-indigo-500 hover:underline"
                  >
                     Login
                  </Link>
               </p>
            </div>
         </div>
      );
}

export default LoginForm;

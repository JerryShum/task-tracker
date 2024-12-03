export default function Page() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
         <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-8">
            {/* Sign-in Form */}
            <div className="flex flex-col justify-center">
               <h1 className="text-3xl font-bold mb-6">Sign up</h1>
               {/* Social Login Buttons */}
               <div className="flex flex-col space-y-4">
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">
                     <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                        alt="Google"
                        className="w-6 h-6 mr-2"
                     />
                     Continue with Google
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">
                     <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        alt="Facebook"
                        className="w-6 h-6 mr-2"
                     />
                     Continue with Facebook
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">
                     <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        alt="Apple"
                        className="w-6 h-6 mr-2"
                     />
                     Continue with Apple
                  </button>
               </div>

               {/* Divider */}
               <div className="my-6 text-gray-400 text-center">or</div>

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
                     className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                  >
                     Sign up with Email
                  </button>
               </form>

               {/* Terms and Existing Account */}
               <p className="text-xs text-gray-500 mt-4">
                  By continuing with Google, Apple, or Email, you agree to our{" "}
                  <a href="#" className="text-indigo-500 hover:underline">
                     Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-indigo-500 hover:underline">
                     Privacy Policy
                  </a>
                  .
               </p>
               <p className="mt-4 text-sm">
                  Already signed up?{" "}
                  <a href="/login" className="text-indigo-500 hover:underline">
                     Go to login
                  </a>
               </p>
            </div>

            {/* Highlights Section */}
            <div className="hidden md:flex flex-col justify-center space-y-8">
               <div className="flex items-center space-x-4">
                  <img
                     src="https://via.placeholder.com/64"
                     alt="Highlight 1"
                     className="w-16 h-16"
                  />
                  <div>
                     <h3 className="text-lg font-bold">30 million+</h3>
                     <p className="text-gray-600">app downloads</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <img
                     src="https://via.placeholder.com/64"
                     alt="Highlight 2"
                     className="w-16 h-16"
                  />
                  <div>
                     <h3 className="text-lg font-bold">15 years+</h3>
                     <p className="text-gray-600">in business</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <img
                     src="https://via.placeholder.com/64"
                     alt="Highlight 3"
                     className="w-16 h-16"
                  />
                  <div>
                     <h3 className="text-lg font-bold">2 billion+</h3>
                     <p className="text-gray-600">tasks completed</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <img
                     src="https://via.placeholder.com/64"
                     alt="Highlight 4"
                     className="w-16 h-16"
                  />
                  <div>
                     <h3 className="text-lg font-bold">100,000+</h3>
                     <p className="text-gray-600">team users</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

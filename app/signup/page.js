import Image from "next/image";
import LoginForm from "../_components/UI/LoginForm";
import SignupForm from "../_components/UI/SignupForm";

export default function Page() {
   return (
      <div className="flex items-center justify-center h-full">
         <SignupForm />
      </div>
   );
}

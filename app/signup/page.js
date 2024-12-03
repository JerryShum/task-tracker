import Image from "next/image";
import LoginForm from "../_components/UI/LoginForm";

export default function Page() {
   return (
      <div className="flex items-center justify-center h-full">
         <LoginForm type={"signup"} />
      </div>
   );
}

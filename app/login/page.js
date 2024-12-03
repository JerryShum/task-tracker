import Image from "next/image";
import LoginForm from "../_components/UI/LoginForm";
import calendar from "@/public/calendar.png";

export default function Page() {
   return (
      <div className="flex items-center justify-center h-full">
         <LoginForm type={"login"} />
      </div>
   );
}

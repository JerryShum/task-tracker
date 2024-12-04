"use client";

import { useUser } from "../UserContext";

function ApplicationHeader() {
   const { user } = useUser();
   let username = user?.username;

   return (
      <h1 className=" text-primary-lighter font-bold text-4xl">
         Welcome, {username}!
      </h1>
   );
}

export default ApplicationHeader;

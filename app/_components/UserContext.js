"use client";
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
   const initialState = null;
   const [user, setUser] = useState(initialState);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
}

function useUser() {
   const context = useContext(UserContext);
   if (context === undefined) {
      throw new Error("useUser must be used within the UserProvider");
   }

   return context;
}

export { UserProvider, useUser };

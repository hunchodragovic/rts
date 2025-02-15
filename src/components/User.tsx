import React, { useState } from "react";
import { Userr } from "../types/app"; // Ensure Userr type is correctly defined

const User = () => {
  const [user, setUser] = useState<null | Userr>(null);

  return (
    <div>
      <button
        onClick={() => setUser({ name: "ilyes", email: "huncho@gmail.com" })}
      >
        Change user's credentials
      </button>
      <h1>The user's name is: {user ? user.name : "No user"}</h1>
      <h1>The user's email is: {user ? user.email : "No email"}</h1>
    </div>
  );
};

export default User;

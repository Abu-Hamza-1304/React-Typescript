import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null);
  /*
    We are informing typescript that user can either null
    or AuthUser.
    The initial value is "null" but in the future, it's
    value can be of type "AuthUser".
  */
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  /*
    This allow us to access the name and email without the check (?).
  */

  const handleLogin = () => {
    setUser({
      name: "Abu",
      email: "Abu@example.com",
    });
  };

  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

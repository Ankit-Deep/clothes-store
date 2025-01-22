import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const {user,loginWithRedirect,isAuthenticated,logout} = useAuth0()
  console.log("Current user", user);
  return (
    <>
    {isAuthenticated ? (<><h1>Hello {user.name}</h1>
     <button onClick={logout}>Logout</button></>
  ) : (<><h1>Hello Guest</h1> <button onClick={loginWithRedirect}>Login</button></>)}
    
    </>
  );
};

export default Login;

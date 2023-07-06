import React from "react";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../App";
import Login from "./Login";
import GodList from "./GodList";
import { Link } from "react-router-dom";


function Godpage({blogs}) {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1 className="route-heading">God Sahab</h1>
      <Link to={'/god/editpage'}>New</Link>
      {user ? SignOutButton() : <Login/>}
      {
        user && <GodList blogs={blogs}/>
      }
    </div>
  );
}
function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default Godpage;

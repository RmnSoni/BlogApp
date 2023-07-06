import React, { useState } from 'react'
import { auth } from '../App';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleEmailChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value );
};

const handleSignIn = async (e) => {
e.preventDefault();

try {
  await auth.signInWithEmailAndPassword(email, password);
  console.log("User signed in successfully!");
} catch (error) {
  console.error("Error signing in:", error);
  alert(error.message);
}
};

return (
<div>
  <h1>Sign In</h1>
  <form onSubmit={handleSignIn}>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={handleEmailChange}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
    />
    <button type="submit">Sign In</button>
  </form>
</div>
);
}

export default Login
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = ({ users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  function signIn() {
    let foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!foundUser) setError("Invalid username or password");
    else navigate("/AllRecipes");
  }
  return (
    <div className="signInPage">
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /> <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{error}</p>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

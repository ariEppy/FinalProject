import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = ({ addUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  function signUp() {
    let error = false;
    setUsernameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    // check that the username is in english and >= 4 chars
    if (username.length < 4) {
      error = true;
      setUsernameError("Username must be at least 4 characters");
    } else {
      for (let i = 0; i < username.length; i++) {
        if (
          username[i].toLowerCase() < "a" ||
          username[i].toLowerCase() > "z"
        ) {
          error = true;
          setUsernameError("Username must be in English");
          break;
        }
      }
    }

    // check that the password has a special char, an uppercase, and at least 7 chars
    if (password.length < 7) {
      error = true;
      setPasswordError("Password must be at 7 characters long");
    } else {
      let hasUpper = false;
      let hasSpecial = false;
      for (let j = 0; j < password.length; j++) {
        if (password[j] >= "A" && password[j] <= "Z") hasUpper = true;
        if (password[j] < "0" || password[j] > "9")
          if (password[j] < "A" || password[j] > "Z")
            if (password[j] < "a" || password[j] > "z") hasSpecial = true;
      }
      if (hasUpper === false || hasSpecial === false) {
        error = true;
        setPasswordError(
          "Password must have an uppercase letter and special case character"
        );
      }
    }
    // check that the password and confirm password are the same
    if (password !== confirmPassword) {
      error = true;
      setConfirmPasswordError("Passwords must be the same");
    }

    if (error === false) {
      addUser(username, password);
      navigate("/SignIn");
    }
  }
  return (
    <div className="signUpPage">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>{usernameError}</p>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{passwordError}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <p>{confirmPasswordError}</p>
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

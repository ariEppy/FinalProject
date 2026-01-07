import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  function toSignIn() {
    navigate("/SignIn");
  }

  function toSignUp() {
    navigate("/SignUp");
  }
  return (
    <div>
      <h1>SV Recipe</h1>
      <button className="signUp" onClick={toSignUp}>
        Sign Up
      </button>
      <button className="signIn" onClick={toSignIn}>
        Sign In
      </button>
    </div>
  );
};

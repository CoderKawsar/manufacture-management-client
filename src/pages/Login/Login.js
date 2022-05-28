import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  let errorMessage;
  if (error) {
    errorMessage = error.message;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-8">Login</h2>
      <form className="w-full max-w-sm mx-auto" onSubmit={handleLogin}>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary mt-4" />
        {errorMessage && <p className="text-red mt-2">{errorMessage}</p>}
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;

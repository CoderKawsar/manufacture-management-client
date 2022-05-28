import React from "react";
import auth from "../../firebase.config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, registerError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading || updating) {
    return (
      <div className="h-screen flex justify-center items-center">
        <progress class="progress w-56"></progress>
      </div>
    );
  }

  let errorMessage;
  if (registerError || updateError) {
    errorMessage = registerError?.message || updateError?.message;
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName });
    event.target.reset();
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-8">Signup</h2>
      <form className="w-full max-w-sm mx-auto" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input type="text" name="name" className="input input-bordered" />
        </div>
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
        <input type="submit" value="Signup" className="btn btn-primary mt-4" />
        {errorMessage && <p className="text-red-400 mt-2">{errorMessage}</p>}
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;

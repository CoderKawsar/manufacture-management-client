import React from "react";
import auth from "../../firebase.config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import SocialLogin from "../shared/SocialLogin";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, registerError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let navigate = useNavigate();

  if (loading || updating) {
    return (
      <div className="h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  let errorMessage;
  if (registerError || updateError) {
    errorMessage = registerError?.message || updateError?.message;
    console.log("registerError", registerError);
    console.log("updateError", updateError);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    event.target.reset();
  };

  if (user) {
    navigate("/");
  }

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
        <input
          type="submit"
          value="Signup"
          className="btn bg-siteColor border-0 px-6 mt-4"
        />
        {errorMessage && <p className="text-red mt-2">{errorMessage}</p>}
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;

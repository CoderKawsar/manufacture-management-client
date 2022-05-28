import React from "react";
import googleIcon from "../../img/logo/Google-logo.png";
import githubIcon from "../../img/logo/github-logo.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

const SocialLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (loading1 || loading2) {
    return (
      <div className="h-96 flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  let errorMessage;
  if (error1 || error2) {
    errorMessage = error1?.message || error2?.message;
  }

  if (user1 || user2) {
    navigate(from, { replace: true });
  }

  return (
    <div className="mt-12">
      <div className="divider font-semibold text-xl text-gray-500">OR</div>
      <h5 className="mb-8 mt-8 text-center font-semibold text-3xl text-gray-700">
        Social Login
      </h5>

      <div className="flex flex-col jusify-center items-center">
        <div
          className="mb-3 flex items-center px-4 py-2 border rounded cursor-pointer shadow"
          onClick={() => signInWithGoogle()}
        >
          <img className="w-8 h-8 mr-2" src={googleIcon} alt="Google" />
          <p className="font-semibold">Sign in with Google</p>
        </div>
        <div
          className="mb-3 flex items-center px-4 py-2 border rounded cursor-pointer shadow"
          onClick={() => signInWithGithub()}
        >
          <img className="w-8 h-8 mr-2" src={githubIcon} alt="Github" />
          <p className="font-semibold">Sign in with Github</p>
        </div>
        {errorMessage && (
          <p className="text-red-400 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default SocialLogin;

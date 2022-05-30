import React from "react";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import avatarImg from "../../img/others/149071.png";

const SingleUser = ({ singleUser }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, photoURL, email, phone, location } = singleUser;
  if (loading) {
    return (
      <div className="h-16 flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <tr key={singleUser._id}>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL || avatarImg} alt="User" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-ghost badge-sm">{phone}</span>
      </td>
      <td>
        <button class="btn btn-xs">Make Admin</button>
      </td>
    </tr>
  );
};

export default SingleUser;

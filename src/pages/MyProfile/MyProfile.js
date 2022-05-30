import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.config";
import useUser from "../../hooks/useUser";

const MyProfile = () => {
  const [userData] = useUser();
  const [user, loading, error] = useAuthState(auth);

  const url = `https://serene-dawn-73243.herokuapp.com/user/${userData?.uid}`;

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const linkedinProfileLink = event.target.linkedinProfileLink.value;

    const updatedData = {
      uid: user?.uid,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      education,
      location,
      phone,
      linkedinProfileLink,
    };
    axios.put(url, updatedData);
    event.target.reset();
    toast.success("Profile Updated");
  };
  return (
    <div>
      <img className="mx-auto rounded-full" src={user?.photoURL} alt="" />
      <h5 className="text-center font-semibold text-3xl">
        {user?.displayName}
      </h5>
      <h6 className="text-center">{user?.email}</h6>
      <form className="w-96" onSubmit={handleUpdateProfile}>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Education</span>
          </label>
          <input
            type="text"
            name="education"
            defaultValue={userData?.education}
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">
              Location (district)
            </span>
          </label>
          <input
            type="text"
            name="location"
            defaultValue={userData?.location}
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Phone Number</span>
          </label>
          <input
            type="text"
            name="phone"
            defaultValue={userData?.phone}
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">
              LinkedIn profile link
            </span>
          </label>
          <input
            type="text"
            name="linkedinProfileLink"
            defaultValue={userData?.linkedinProfileLink}
            className="input input-bordered"
          />
        </div>
        <input
          type="submit"
          className="btn bg-siteColor mt-4 mb-8 border-0"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default MyProfile;

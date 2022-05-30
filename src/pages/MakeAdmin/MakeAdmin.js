import React from "react";
import { useQuery } from "react-query";
import SingleUser from "./SingleUser";

const MakeAdmin = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users", { method: "GET" }).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email/Phone</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((singleUser) => (
            <SingleUser key={singleUser._id} singleUser={singleUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;

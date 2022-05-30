import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.config";

const useUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  const url = `https://serene-dawn-73243.herokuapp.com/user/${user?.uid}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setUserData(res.data);
    });
  }, [url]);
  return [userData];
};

export default useUser;

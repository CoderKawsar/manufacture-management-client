import { useEffect, useState } from "react";
import axios from "axios";

const useReviews = (total) => {
  const [reviews, setReviews] = useState([]);
  const url = `https://manufacture-site.onrender.com/reviews?total=${total}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      const toolsData = res.data;
      setReviews(toolsData);
    });
  }, [url]);
  return [reviews, setReviews];
};

export default useReviews;

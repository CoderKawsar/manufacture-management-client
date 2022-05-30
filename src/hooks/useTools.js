import { useEffect, useState } from "react";
import axios from "axios";

const useTools = (total) => {
  const [tools, setTools] = useState([]);
  const url = `https://serene-dawn-73243.herokuapp.com/tools?total=${total}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      const toolsData = res.data;
      setTools(toolsData);
    });
  }, [url]);
  return [tools, setTools];
};

export default useTools;

import { useEffect, useState } from "react";
import axios from "axios";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get("tools.json").then((res) => {
      const toolsData = res.data;
      setTools(toolsData);
    });
  }, []);
  return [tools, setTools];
};

export default useTools;

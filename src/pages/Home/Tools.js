import React from "react";
import useTools from "../../hooks/useTools";
import Tool from "./Tool";

const Tools = () => {
  const [tools] = useTools();
  return (
    <div className="my-16 w-11/12 mx-auto">
      <h3 className="text-5xl font-bold text-center mb-12">Tools</h3>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
